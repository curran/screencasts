## Building a Graphing Calculator with HTML5

 * <a href="http://curran.github.io/screencasts/grapher/grapher/grapher.html#1/(x*x+1)*10*sin(x*3+t)">Run the graphing calculator</a>
 * Check out [the code](grapher) ([zip](http://curran.github.io/screencasts/grapher/grapher.zip))
 * Watch the [Screencast on YouTube](http://www.youtube.com/watch?v=E-_Lc6FrDRw&feature=youtu.be&a)

This repository contains resources that go along with a tutorial given by Curran Kelleher at University of Massachusetts 
Lowell on 11/12/2013 and 11/14/2013 as part of the undergraduate course 
"GUI Programming" with [Professor Jesse Heines](http://www.uml.edu/Sciences/computer-science/faculty/heines-jesse.aspx). 

The tutorial covers:

 * Creating and using a Canvas element
 * Drawing a sine wave path consisting of many lines
 * Transforming between math coordinates and pixel coordinates
 * Animation with [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/)
 * Using [Math.js](http://mathjs.org/) to evaluate mathematical expressions
 * Plotting a Math.js expression
 * Using a TextField to drive the math expression
 * Using the URL hash fragment to store and share plots

## References and Starter examples:

 * [HTML5 Canvas Spec](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html) Documentation for the HTML5 Canvas API.
 * `canvasExample` ([run it](http://curran.github.io/screencasts/grapher/canvasExample.html), [source code](canvasExample.html)) Demonstrates the HTML5 Canvas API by drawing a square, circle, line and text.
 * `animationExample` ([run it](http://curran.github.io/screencasts/grapher/animationExample.html), [source code](animationExample.html)) Demonstrates animation using HTML5 Canvas and `requestAnimationFrame`.
 * `mathJSExample` ([run it](http://curran.github.io/screencasts/grapher/mathJSExample.html), [source code](mathJSExample.html)) Parses and evaluates a math expression with variables using [Math.js](http://mathjs.org/).
 * `textFieldExample` ([run it](http://curran.github.io/screencasts/grapher/textFieldExample.html), [source code](textFieldExample.html)) Initializes and reads text from an HTML form `input` field as it changes.
 * `hashExample` ([run it](http://curran.github.io/screencasts/grapher/hashExample.html), [source code](hashExample.html)) Demonstrates how to work with fragment identifiers.

On Tuesday 11/12/2013, we wrote the [basic function plotter](http://jsbin.com/UriGaQo/4/edit).

On Thursday 11/14/2013, we completed the core functionality of the graphing 
calculator.

 * Here's the [Code in JSBin](http://jsbin.com/UriGaQo/80/edit)
 * Here's a cleaned up and thoroughly documented version of the code:
   * [run it](http://curran.github.io/screencasts/grapher/grapher/grapher.html)
   * [grapher.html source code](grapher/grapher.html)
   * [grapher.js source code](grapher/grapher.js)

Please use the `grapher.html` and `grapher.js` as the starting point for the 
[assignment](http://curran.github.io/screencasts/grapher/assignment.pdf).

## Detailed Tutorial Content

 * Using [JSBin](http://jsbin.com/)
   * `CTRL [` for indentation
 * Using the Canvas Element
   * Introduced by Apple in 2004
   * Great browser coverage except old IE
 * Inspecting the DOM using Chrome Dev Tools
 * Using `console.log()` for debugging
 * Better not to use jQuery until you really need it
 * `document.getElementById()`
 * `ctx` as a common convention for the Canvas contexts, I prefer `c`
 * Filling a rectangle using the Canvas API
 * Pixel coordinates vs. math coordinates (Y is flipped)
 * Separating the JavaScript from the HTML in JSBin
 * Canvas features: lines, colors, circles, text
 * Approximating a continuous curve with discrete line segments
 * Using the Canvas API documentation
 * Default color is black, default line width is 1 pixel
 * Using Canvas `lineTo()` to draw a polyline
 * Documenting single-letter variable names is critical
 * Combining multiple `var` declarations into a single statement
 * Variables are scoped to function closures, not curly brace blocks
 * Better to declare `i` and `j` loop indices at the top of the function
 * Defining a path using the Canvas API and a for loop
 * Projecting the `i` loop index to Canvas coordinates
 * Using `canvas.width` and `canvas.height`
 * Defining the width and height of the Canvas in HTML attributes
 * Refactoring to encapsulate specific tasks as functions
 * Which way should the code read?
   * IMO more readable when functions are first used, then defined
   * this coding style reads more like a story or a book
 * Defining a mathematical window in terms of (xMin, xMax, yMin, yMax)
 * Linear interpolation (projection and inverse projection between intervals)
 * Using symbolic algebraic manipulation to invert linear interpolation
 * Using [Math.js](http://mathjs.org/) to parse and evaluate math expression strings
 * Using [CDNjs](http://cdnjs.com/)
 * Libraries typically introduce a single global variable
 * The importance of naming variables well
 * Putting a text field onto the page and listening for changes
 * Updating the plot when the user changes the expression string
 * Clearing the canvas using `clearRect()`
 * Flipping the Y coordinate to match math convention
 * Overview of [JSLint](http://www.jslint.com/)
 * Why eval is evil
 * Animation with `requestAnimationFrame()`
 * Why it is better than `setTimeout()`
 * Introducing a 'time' variable in the math expression
 * Aside on 3D graphics for the Web
   * WebGL
   * [Three.js](http://threejs.org/)
 * Using the URL hash
 * Empty string is falsy
 * It's a sign to rafactor if you copy and paste chunks of complex code
 * Using the `hashchange` event to get the back and forward buttons to work
