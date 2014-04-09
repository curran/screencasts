Using a Backbone Model to drive the visualization

What changed:

 * Added Underscore.js and Backbone.js script tags to HTML (from [CDNJS](http://cdnjs.com/libraries/backbone.js/))
 * Added Backbone model to barChart.js
 * Added change listener to model that calls `update()`
 * Modified `update()` to use the model
 * Returned the model as the public API
 * Modified main.js to use the Backbone Model API
