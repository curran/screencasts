Eliminating redundant update calls using debounce

 * Uses [_.debounce](http://underscorejs.org/docs/underscore.html#section-72) to collapse multiple sequential updates into a single execution of the callback.
 * Moved scale range computation into data update code, as range must be set for bars to render properly
 * Demonstrates recurring pattern:
   * Listen for changes on several variables
   * Extract values into local scope
   * Check if any are null
   * Debounce callback to eliminate redundant calls
