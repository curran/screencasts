// Used by the router for rendering slide content.
// Loads and renders each slide in response to URL changes.
app.controller('SlideCtrl', function($rootScope, $scope, $routeParams, $http, $sce, presentation){

  // Get the current slide configuration based on its name.
  presentation.getSlide($routeParams.slideName, function(slide){

    // Used for determining which slide entry should be styled as "active".
    $rootScope.currentSlide = slide;

    // If an image is defined on the slide info,
    if(slide.image) {

      // then display a slide that is just that image full screen.
      $scope.image = slide.image;

      // Add a link for the image from the configuration.
      $scope.link = slide.link;

    // Likewise for iFrames
    } else if(slide.iFrameSrc) {
      $scope.iFrameSrc = $sce.trustAsResourceUrl(slide.iFrameSrc);

      // Otherwise, load and render the markdown file for the slide.
    } else {

      // Compute the path of the markdown file from the slide name.
      var markdownFile = 'slides/' + $routeParams.slideName + '.md';

      // Fetch the Markdown file that contains the content for the current slide.
      $http.get(markdownFile).success(function(markdownText){

        // Compile the markdown text using the marked.js library.
        // See https://github.com/chjj/marked
        var slideHTML = marked(markdownText);

        // Use of $sce is required because ng-bind-html is used in the template.
        // For more info, see:
        //   http://docs.angularjs.org/api/ng/directive/ngBindHtml
        //   http://docs.angularjs.org/api/ng/service/$sce
        $scope.slideHTML = $sce.trustAsHtml(slideHTML);
      });
    }
  });
});
