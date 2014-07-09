// A presentation framework using Angular.js.
//
// Slides are authored in Markdown.
//
// Presentation configuration resides in `presentation.json`,
// which specifies the presentation title and the ordering of slides.
//
// Curran Kelleher 3/10/2014

// Declare the Angular app.
var app = angular.module('app', ['ngRoute']);

// Configure routes.
app.config(function($routeProvider){
  $routeProvider.
    when('/:slideName', {

      // This template handles different kinds of slides:
      template: [

        // If "slideHTML" is present, the slide has been compiled from the Markdown file found in 
        // the "slides" directory, corresponding to the "name" property on the slide config (in presentation.json).
        '<div ng-if="slideHTML" class="slide" ng-bind-html="slideHTML"></div>',

        // If an "image" property is specified in the slide config (in presentation.json),
        // then this part of the template becomes active, rendering the image to fill the slide space.
        '<div ng-if="image" class="img-container">',
          '<a ng-if="link" href="{{link}}" target="_blank"><img ng-src="images/{{image}}"></a>',
          '<img ng-if="!link" ng-src="images/{{image}}">',
        '</div>',

        // If "iFrameSrc" is present, the slide has been configured to load another page in an iFrame.
        '<div ng-if="iFrameSrc" class="slide"><iframe ng-src="{{iFrameSrc}}"></div>'

      ].join(''),
      controller: 'SlideCtrl'
    }).
    otherwise({ redirectTo: '/firstSlide' });
});

// This segment deals with:
//
//  * loading the presentation metadata from `slides.json`
//  * exposing the presentation title to the template, which becomes the HTML <title>
//  * exposing the listing of slides to the template, which becomes the list on the left.
app.run(function($rootScope, $document, $location, presentation){

  // Get the presentation configuration that lives in "presentation.json".
  presentation.getConfig(function(config){

    // Used to set the <title> of the page.
    $rootScope.title = config.title;

    // Used for creating the list of slides on the left.
    $rootScope.slides = config.slides;
  });
});
