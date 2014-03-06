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

app.controller('ExampleListCtrl', function ($scope, examples){
  examples.list(function(examples) {
    $scope.examples = examples;
  });
});

app.controller('ExampleDetailCtrl', function ($scope, $routeParams, examples){
  examples.find($routeParams.exampleNumber, function(example) {
    $scope.example = example;
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
        mode: "text/html",
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
