Add resize support

What changed:

 * Added `barChart.updateSize()`
 * Main program in an [immediately invoked function](http://en.wikipedia.org/wiki/Immediately-invoked_function_expression)
 * Main program calls `updateSize` in response to browser window resize
 * Issue: fetches data every resize
