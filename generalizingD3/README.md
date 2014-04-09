TODO

5 D3 examples:

 * review the original example code
 * separate insert, update and delete
 * use a model
 * make the visualization react to the model
 * add user interface elements to control

Table of Contents:

 * What is D3?
 * What is Backbone?
 * What is a Bar Chart?
 * Separating insert, update and delete
 * Introducing a visualization model
 * Models in Backbone
 * Models in Angular
 * Models in Ember
 * Functional Reactive Programming
   * Data Flow Systems
   * [Unix Pipes](http://en.wikipedia.org/wiki/Pipeline_(Unix))
   * Functional Reactive Animation
   * [Iteratee](http://en.wikipedia.org/wiki/Iteratee)
   * Bacon.js
   * Reactive.js
   * [Reactive Bacon](https://github.com/raimohanska/reactive-bacon)
   * [Reactive Bacon](https://github.com/raimohanska/reactive-bacon)
 * Dependency Injection
   * Require.js
   * Angular.js
 * Functional Reactive Visualization Models
 * Using Backbone with Reactive.js

Original examples:

 * [Bar Chart](http://bl.ocks.org/mbostock/3885304)
 * [Line Chart](http://bl.ocks.org/mbostock/3883245)
 * [Scatter Plot](http://bl.ocks.org/mbostock/3887118)
 * [Choropleth Map](http://bl.ocks.org/mbostock/4060606)
 * [Streamgraph](http://bl.ocks.org/mbostock/4060954)
 * [Node Link Tree)(http://bl.ocks.org/mbostock/4063550)

## Examples

 * Illustrate D3 example generalization in small increments
 * Check out the [example viewer](http://curran.github.io/screencasts/generalizingD3/exampleViewer).

Listing of all examples:

 * [Example 1](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot01) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01/index.html)) - Original D3 Bar Chart Example
 * [Example 2](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot02) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02/index.html)) - Split into HTML, CSS and JS files
 * [Example 3](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot03) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03/index.html)) - Implement Single Var Pattern
 * [Example 4](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot04) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04/index.html)) - Make HTML structure explicit
 * [Example 5](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot05) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05/index.html)) - Split bar chart and main program
 * [Example 6](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot06) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06/index.html)) - Split up SVG and Group creation and configuration
 * [Example 7](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot07) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07/index.html)) - Split up X axis group creation and configuration
 * [Example 8](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot08) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08/index.html)) - Split up Y axis group creation and configuration
 * [Example 9](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot09) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09/index.html)) - Split up enter and update for bars
 * [Example 10](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot10) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10/index.html)) - Isolate hard-coded visualization size
 * [Example 11](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot11) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11/index.html)) - Allow CSS to determine visualization size
 * [Example 12](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot12) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12/index.html)) - Add resize support
 * [Example 13](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot13) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13/index.html)) - Eliminate multiple data fetching
 * [Example 14](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot14) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14/index.html)) - Move data fetching to main
 * [Example 15](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot15) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15/index.html)) - Reset data each second
 * [Example 16](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot16) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16/index.html)) - Handling the exit() case for bars
 * [Example 17](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot17) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17/index.html)) - Isolating the model
 * [Example 18](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot18) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18/index.html)) - Using a Backbone Model to drive the visualization
 * [Example 19](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot19) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19/index.html)) - Model driven updates

Final Result:

 * FRD3 - Functional Reactive D3 library and examples gallery
 * Basis for integrating UDC data model and dashboard infrastructure with D3 visualizations
