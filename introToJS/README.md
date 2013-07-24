The code from an ["Introduction to Coding" tutorial](http://www.youtube.com/watch?v=zIpA8k167gU) given at MIT on July 21, 2013. Part of the [HSSP 2013](http://curransoft.com/interactivegraphics/?p=485) course [Computer Programming and Interactive Graphics](http://curransoft.com/interactivegraphics/?p=485).

In this tutorial we wrote the following code:

 * [JavaScript Console Log](https://github.com/curran/screencasts/blob/gh-pages/introToJS/console.js)
 * [Virtual Pendulums](https://github.com/curran/screencasts/blob/gh-pages/introToJS/index.html) (modeling the pendulums seen in the video [Pendulum Waves starring Alan](http://www.youtube.com/watch?v=yVkdfJ9PkRQ))

[Play with the code in JSBin](http://jsbin.com/uhaziw/3/edit)!

Content of the tutorial:

 * Opening the Chrome JavaScript Console
 * Hello World
 * Variables
   * Numbers
   * Strings
     * Double quotes
     * Single quotes
   * Booleans
 * Contitional execution
   * `if`
 * Using the up and down arrows in the console
 * Operators
   * `&&`
   * `||`
   * `<`, `>`
   * `<=`, `>=`
   * `==`
   * `=`
 * White space
   * White space includes spaces, newlines, and tabs.
   * not significant in JavaScript, but is in other languages like Python.
   * used as a means to make code more readable
   * levels of indentation signify code blocks
 * Objects
   * JavaScript objects are key-value mappings.
   * Keys are strings used to look up values
   * Values can be any type that a variable can be (Number, String, Boolean, Array, Object, Function)
   * The `.` operator
     * Access
     * Assignment
   * The `[]` operator
     * Access
     * Assignment
   * Object literals
     * Objects with a single property
     * Objects with multiple properties
 * Placeholder variables
   * foo
   * bar
 * Inspecting nested objects using the Chrome console
   * Using the arrows to expand objects and their properties
 * Arrays
   * Array literals
     * Empty array
     * Array with things in it separated by commas
   * Square bracket notation
     * Accessing values by index
     * Writing values by index
   * The `push` function
   * The `pop` function
 * Functions
   * Functions can be assigned to variables and object properties
   * Declaring functions
   * Arguments
   * Scope of arguments
   * Return values
   * Calling functions
 * Expressions
   * Binary operators are expressions
   * Function calls are expressions
   * Any expression can be used to provide an argument to a function
   * Using function call return values as arguments to functions
 * Loops
   * Declaring an increment variable `i`
   * Initialization (`i = 0`)
   * Condition (`i < n`)
   * Afterthought (`i++`)
 * The `++` syntax
   * `i++` is short for `i = i + 1`
 * HTML5 Canvas
   * Accessing DOM elements by global variables created from their id
   * A Canvas is a bitmap of pixels
   * Accessing the 2D drawing context of a canvas element
   * The `fillRect` function
   * (0, 0) is the top left corner in computer graphics
   * Setting the fill style of the canvas context
   * Adding a Canvas element to an HTML page
   * The `id` attribute
   * Adding a `script` tag to an HTML page
   * Accessing the width and height of a Canvas element
   * The Canvas default size
   * The `width` attribute
   * The `height` attribute
   * Using a for loop to draw many shapes
   * Computing the center of the canvas
   * Using setInterval for animation (see also [requestAnimationFrame](http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/))
   * The display refreshes at 60 frames per second, with 16.66 milliseconds between each frame
   * Using a `time` variable that increments each frame
   * Clearing the canvas
   * Using `Math.sin`
 * Refactoring
   * Extracting hard-coded function arguments to local variables for clarity
 * Camel Case vs. underscores for variable names
   * JS convention is to use camelCase
 * Using JSBin for rapid HTML5 coding
   * Re-running the code every time you change it
   * Turning off auto-run with the check box (when writing for loops to prevent crashing)
   * CTRL-X, CTRL-C and CTRL-V
   * Using error messages to debug your code
