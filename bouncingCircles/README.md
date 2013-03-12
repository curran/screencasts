A [screencast](http://www.youtube.com/watch?v=yF0T7lviBnY&feature=youtu.be) in which a simulation of bouncing and colliding balls is programmed from scratch using JavaScript and HTML5 Canvas.

Check out the final product! [run it](http://curran.github.com/screencasts/bouncingCircles/snapshots/snapshot17/index.html), [view source](https://github.com/curran/screencasts/blob/gh-pages/bouncingCircles/snapshots/snapshot17/script.js), [play with the code](http://jsbin.com/obodip/2/edit) (try setting `gravity = 0` for billiard balls).

The screencast covers the following topics:

 * HTML, HEAD, and BODY tags
 * The SCRIPT tag
 * Loading external JavaScript files using SCRIPT tags
 * The CANVAS tag
 * Drawing a rectangle
 * Drawing a circle
 * Positioning a Canvas to be flush against the upper left corner using inline CSS
 * How to use HTML5 requestAnimationFrame using the [`requestAnimFrame` cross-browser compatability shim by Paul Irish](http://paulirish.com/2011/requestanimationframe-for-smart-animating/).
 * Animations using setInterval or setTimeout versus use of requestAnimationFrame (which is better).
 * Moving a circle from the top to the bottom of the screen
   * How to increment a numeric variable each frame
 * Using clearRect to clear the canvas each frame
 * Accessing the width and height of the canvas
 * How requestAnimationFrame is not really recursive: it does not call itself, but rather schedules functions to executed 1/60th of a second in the futur e
 * Conditionally stopping animation
 * How clearRect differs from fillRect; clearRect clears a portion of the buffer to be "transparent"
 * How multiple canvases can be layered when positioned on top of one another (in theory)
 * How the Canvas element can be used for offscreen buffering (bitmap caching)
 * Using JavaScript object literals to define objects with properties
 * An alternative way to have multiple objects - use one array per property, and use the array index to correlate their values into object s
 * using immediately invoked functions to define a lexical scope (so as not to pollute the global namespace)
   * the module pattern
 * scoping of JavaScript - lexical scoping at the level of functions
   * `for` loops do not define a new scope, only function closures do
 * A simple physics simulation of masses in a viscous fluid
   * definition of gravity
   * associating a velocity vector with circles
   * incrementing location by velocity each frame
   * implementing gravity by incrementing velocity vectors
 * specifying the size of the Canvas element
 * making a ball bounce off the bottom of the canvas
 * simulating a viscous fluid by using a dampening factor in the simulation
 * adding mouse interactivity
 * printing to the console using `console.log()`
 * getting the (x, y) mouse position
 * implementing an interaction where clicking repositions a circle
 * passing functions as arguments to other functions
 * the callback pattern
 * using `console.log` to inspect the properties of event objects
 * implementing a ghosting trail effect by filling the canvas with a semi-transparent white rectangle
 * using CSS color strings to define colors with Canvas
 * the stateful nature of the Canvas API (fillStyle, strokeStyle)
 * using JavaScript array literals
 * `Array.push`
 * for loops
   * `i` being declared outside as a best practice because `for` loops do not introduce a new scope
 * iterating over elements in an array using a `for` loop
 * a collection of balls bouncing around the screen
 * implementing collision detection between all pairs of circles
 * computing the distance between two points
 * computing the unit vector (the vector in a certain direction of length 1)  
 * applying a repulsion force between all pairs of colliding circles
 * getting speed from JavaScript by not creating new objects all the time
   * the performance hit from garbage collection
 * implementing interactions while the mouse is down
 * storing the mouse location for use between events
 * using the events `mousedown`, `mouseup`, and `mousemove`
