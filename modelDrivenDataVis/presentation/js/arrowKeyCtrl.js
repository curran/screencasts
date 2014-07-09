// Responsible for handling the arrow keys to change slides.
app.controller('ArrowKeyCtrl', function ($scope, $rootScope, $location){

  // Key codes for arrow keys.
  var LEFT = 37, RIGHT = 39, NEXT = 1, PREVIOUS = -1;

  // Navigates to the previous or next slide.
  // Called on key down event of the <body> element.
  $scope.changeSlide = function(arrow) {
    if(arrow === RIGHT){
      moveSlide(NEXT);
    } else if(arrow === LEFT){
      moveSlide(PREVIOUS);
    }      
  }

  function moveSlide(increment) {
    var i = $rootScope.currentSlide.index + increment;

    // Check bounds
    i = Math.min(i, $rootScope.slides.length - 1);
    i = Math.max(i, 0);

    navigateTo($rootScope.slides[i]);
  }

  // Navigates to the given slide
  // by changing the URL hash fragment.
  function navigateTo(slide) {
    $location.path('/' + slide.name);
  }
});
