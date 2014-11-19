var app = angular.module('exampleViewerApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: 'example-list.html',
      controller: 'ExampleListCtrl'
    }).
    when('/:exampleNumber', {
      templateUrl: 'example-detail.html',
      controller: 'ExampleDetailCtrl'
    }).
    otherwise({
      redirectTo: '/'
    });
});

app.factory('examples', function($http){

  function getData(callback){
    $http({
      method: 'GET',
      url: '../examples.json',
      cache: true
    }).success(callback);
  }

  return {
    list: getData,
    find: function(exampleNumber, callback){
      getData(function(data) {
        var index = parseInt(exampleNumber) - 1;
        callback(data[index]);
      });
    }
  };
});

// Responsible for navigating based on key events.
app.controller('MainCtrl', function ($scope, $document, $location, examples){
  examples.list(function(examples){
    var LEFT = 37,
        RIGHT = 39;

    $scope.changeExample = function(e) {
      var path = $location.path(),
          // The example number
          n;

      // If there is a number,
      if(path.length > 1){

        // Extract the example number from the path.
        n = parseInt(path.substr(1), 10);

        // Increment or decrement the example number.
        if(e.keyCode === RIGHT && n < examples.length){
          n++;
        } else if(e.keyCode === LEFT && n > 1) {
          n--;
        }
        
        // Navigate to the previous or next example.
        $location.path('/' + n);
      }
    };
  });
});

app.controller('ExampleListCtrl', function ($scope, examples){
  examples.list(function(examples) {
    $scope.examples = examples;
  });
});

app.controller('ExampleDetailCtrl',
    function ($scope, $routeParams, $http, $sce, examples){
  examples.find($routeParams.exampleNumber, function(example) {
    $scope.example = example;
    var examplePath = '../examples/snapshots/' + example.name;
    $scope.runUrl = examplePath + '/index.html';
    $http.get(examplePath + '/README.md').success(function(data) {
      // Remove first line, as it appears elsewhere on the page (called 'message').
      var md = data.split('\n').splice(1).join('\n');
      $scope.readme = $sce.trustAsHtml(marked(md));
    });
  });
});

/**
 * The `file` directive loads the content of an 
 * example source code file into a CodeMirror instance
 * for syntax-highlighted presentation.
 */
app.directive('file', function(){
  return {
    scope: { file: '=', example: '=' },
    restrict: 'A',
    controller: function($scope, $http){
      var path = [
        '../examples/snapshots',
        $scope.example.name,
        $scope.file
      ].join('/');
      $http.get(path).success(function(data) {
        if(typeof(data) === 'object'){
          // un-parse auto-parsed JSON files for presentation as text
          data = JSON.stringify(data, null, 2);
        } else {
          // Remove trailing newlines from code presentation
          data = data.trim();
        }
        $scope.content = data;
      });
    },
    link : function(scope, element, attrs) {
      var textArea = element[0];
      var editor = CodeMirror.fromTextArea(textArea, {
        mode: scope.file.split('.').pop() == 'js' ? 'text/typescript' : 'text/html',
        lineNumbers: true,
        viewportMargin: Infinity
      });
      scope.$watch('content', function(data){
        if(data) {
          editor.setValue(data);
        }
      });
    }
  };
});
