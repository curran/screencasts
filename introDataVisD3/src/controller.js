function Controller(){
  var controller = {
    setItems: function (items) {
      controller.app.setState(function () {
        return { items: items };
      });
      controller.setCurrentIndex(0);
    },
    setCurrentIndex: function (currentIndex) {
      controller.app.setState(function (previousState) {
        return {
          currentIndex: currentIndex,
          item: previousState.items[currentIndex]
        };
      });
    },
    // Increment (offset == 1) or decrement (offset == -1) the current index.
    incrementCurrentIndex: function (offset) {
      controller.app.setState(function (previousState) {
        var currentIndex = previousState.currentIndex + offset;

        // Guard against going out of bounds.
        var n = previousState.items.length;
        currentIndex = (currentIndex < 0) ? 0 : currentIndex;
        currentIndex = (currentIndex >= n) ? (n - 1) : currentIndex;

        return {
          currentIndex: currentIndex,
          item: previousState.items[currentIndex]
        };
      });
    }
  };
  return controller;
}
export default Controller;
