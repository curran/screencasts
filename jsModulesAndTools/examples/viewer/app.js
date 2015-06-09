// An Angular.js app that displays code examples.
// Create by Curran Kelleher July 2014
// Updated April 2015
var app = angular.module('exampleViewerApp', ['ngRoute']);

// Set up routes.
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

// This service works with examples.json.
app.factory('examples', function($http){

  function getData(callback){
    $http({
      method: 'GET',
      url: '../examples.json',
      cache: true
    }).success(callback);
  }

  return {

    // examples.list(callback) lists all examples.
    list: getData,

    // examples.find gets details about one specific example.
    find: function(exampleNumber, callback){
      getData(function(data) {
        var index = parseInt(exampleNumber) - 1;
        callback(data[index]);
      });
    }
  };
});

// This service works with project.json.
app.factory('project', function($http){
  return {
    getData: function (callback){
      $http({
        method: 'GET',
        url: '../project.json',
        cache: true
      }).success(callback);
    }
  };
});

// Responsible for navigating based on key events.
app.controller('MainCtrl', function ($scope, $document, $location, examples){

  // Show the iframe running the example code by default.
  // This can be toggled by pressing "p".
  $scope.showIFrame = true;

  examples.list(function(examples){

    // These are key codes from key down events.
    var LEFT = 37,
        RIGHT = 39,
        P = 80;

    $scope.onKeydown = function(e) {

      // Use left and right arrows for navigation
      if(e.keyCode === RIGHT || e.keyCode === LEFT){
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
      }

      // Use the "p" key to toggle visibility of the iframe.
      if(e.keyCode === P){
        $scope.showIFrame = !$scope.showIFrame;
      }
    };
  });
});

app.controller('ExampleListCtrl', function ($scope, examples, project){
  examples.list(function(examples) {
    $scope.examples = examples;
  });
  project.getData(function(project){
    $scope.title = project.title;
    $scope.date = project.date;
    $scope.author = project.author;
    $scope.authorLink = project.authorLink;
  });
});

app.controller('ExampleDetailCtrl',
    function ($scope, $routeParams, $http, $sce, examples){
  examples.find($routeParams.exampleNumber, function(example) {
    $scope.example = example;
    $scope.runUrl = '../code/' + example.name;
    $http.get($scope.runUrl + '/README.md').success(function(data) {
      // Remove first line, as it appears elsewhere on the page (called 'message').
      var md = data.split('\n').splice(1).join('\n');
      $scope.readme = $sce.trustAsHtml(marked(md));
    });
  });

  // Postponed feature - dynamic code changing
  //$scope.$on('htmlChange', function (event, data){
  //  $scope.iFrameSrcDoc = $sce.trustAsHtml(data);
  //});
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
        '../code',
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
      var textArea = element[0],
          ext = scope.file.substr(scope.file.lastIndexOf("."));
      var editor = CodeMirror.fromTextArea(textArea, {
        mode: {
          '.html': 'text/html',
          '.js': 'text/javascript',
          '.json': 'text/javascript',
          '.css': 'text/css'
        }[ext],
        lineNumbers: true,
        viewportMargin: Infinity
      });
      // Postponed feature - dynamic code changing
      //editor.on('changes', function (instance, changeObj){
      //  // Propagate the event up the scope tree.
      //  // http://toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/
      //  if(scope.file === 'index.html'){
      //    scope.$emit('htmlChange', editor.getValue());
      //  }
      //});
      scope.$watch('content', function(data){
        if(data) {
          editor.setValue(data);
        }
      });
    }
  };
});

// Display video from the camera on the video element.
// Example code from http://www.html5rocks.com/en/tutorials/getusermedia/intro/
navigator.getUserMedia  = navigator.getUserMedia ||
                          navigator.webkitGetUserMedia ||
                          navigator.mozGetUserMedia ||
                          navigator.msGetUserMedia;

navigator.getUserMedia({ video: true }, function (localMediaStream) {
  var video = document.querySelector('video');
  video.src = window.URL.createObjectURL(localMediaStream);
}, function (e) {
  console.log("Error " + e);
});
