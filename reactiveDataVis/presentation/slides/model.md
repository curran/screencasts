## [Model.js](https://github.com/curran/model)

 * Supports reactive data dependency graphs
 * Clean syntax based on dependency injection:
   * var model = Model();
   * model.x = 5;
   * model.when(['x', 'y'], function(x, y) {});
