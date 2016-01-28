// Set up navigation with arrow keys.
export default function arrowKeyNavigation(controller){
  window.addEventListener("keydown", function (e){
    var offsets = {

      // Decrement slide on UP (38) and LEFT (37)
      37: -1,
      38: -1,

      // Increment slide on DOWN (40) and RIGHT (39);
      39: 1,
      40: 1
    };
    controller.incrementCurrentIndex(offsets[e.keyCode]);
  });
}
