/**
 * HTML5 Canvas Graphing Calculator
 * By Curran Kelleher 11/14/2013
 *
 * Draws from examples found in
 * https://github.com/curran/screencasts/tree/gh-pages/grapher
 */

// Wait for the DOM to be ready using jQuery.
// This also ensures our variables do not pollute the global namespace,
// but rather are visible only within the function passed into jQuery here.
$(function (){

  // Get the 'canvas' DOM element based on its id using jQuery.
  var canvas = $('#myCanvas')[0],

      // Get the canvas context, which is a namespace for the Canvas API 
      // functions for drawing graphics. For Canvas API documentation see
      // http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html
      c = canvas.getContext('2d'),
      
      // 'n' is the number of discrete points used to approximate the 
      // continuous math curve defined by the math expression.
      n = 100,
      
      // Define the math "window", which is the visible region in 
      // "math coordinates" that gets projected onto the Canvas.
      xMin = -10,
      xMax = 10,
      yMin = -10,
      yMax = 10,
      
      // Initialize the Math.js library
      // see http://mathjs.org/
      math = mathjs(),

      // 'expr' will contain the math expression as a string.
      expr = '',

      // 'defaultExpr' is assigned to 'expr' if there is no expression in the 
      // URL hash when the page is loaded. Otherwise the URL hash value is 
      // assigned to 'expr' on page load.
      defaultExpr = 'sin(x+t)*x',

      // 'scope' defines the variables available inside the math expression.
      scope = {
        x: 0,
        t: 0
      },

      // 'tree' contains the parsed math expression as an abstract syntax tree.
      // see http://en.wikipedia.org/wiki/Abstract_syntax_tree
      tree,

      // Define a 'time' value that gets incremented every frame.
      // This is assigned to the 't' variable in the math expression scope.
      time = 0,
      timeIncrement = 0.1;

  // These are the main steps of the program.
  setExprFromHash();
  initTextField();
  startAnimation();

  // Update the math expression when the URL hash changes. This may occur from
  // use of back and forward buttons or by manually changing the URL hash.
  window.addEventListener('hashchange', setExprFromHash);

  // Sets the math expression from the URL hash value.
  // Uses the default expression if there is no URL hash value.
  function setExprFromHash(){

    var hash = getHashValue();
    if(hash){
      setExpr(hash);
    } else {
      setExpr(defaultExpr);
      setHashValue(expr);
    }

    // Update the text input to contain the updated expression.
    $('#inputField').val(expr);
  }

  // Sets the value of 'expr' and re-parses the expression into 'tree'.
  function setExpr(newExpr){
    expr = newExpr;
    tree = math.parse(expr, scope);
  }

  // Initializes the text field value to contain the expression.
  // Also sets up an event listener to track changes to the text.
  function initTextField(){

    // Get a jQuery selection for the input field.
    var input = $('#inputField');

    // Set the initial text value from the math expression.
    input.val(expr);
    
    // Listen for changes using jQuery.
    input.keyup(function (event) {
      setExpr(input.val());
      setHashValue(expr);
    });
  }

  // Kick off an animation loop that re-renders the plot
  // 60 times each second using requestAnimationFrame.
  // See http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  function startAnimation(){
    (function animloop(){
      requestAnimationFrame(animloop);
      render();
    }());
  }

  // This function is called each animation frame.
  function render(){
    // increment time
    time += timeIncrement;
    
    // redraw
    drawCurve();
  }

  // Plots the math expression curve on the canvas.
  function drawCurve(){
    // These variables are used inside the for loop.
    var i, 
        
        // These vary between xMin and xMax
        //                and yMin and yMax.
        xPixel, yPixel,
        
        // These vary between 0 and 1.
        percentX, percentY,
        
        // These are values in math coordinates.
        mathX, mathY;
    
    // Clear the canvas.
    c.clearRect(0, 0, canvas.width, canvas.height);
    
    // Plot the math expression as a curve using the Canvas API:
    
    // This line of code begins the math curve path definition.
    c.beginPath();

    // 'n' is the number of points used to define the curve, which 
    // consists of (n - 1) straight line segments.
    for(i = 0; i < n; i++) {

      // 'i' varies between 0 and n - 1.
      // 'percentX' varies between 0 and 1.
      percentX = i / (n - 1);

      // 'mathX' varies between 'xMin' and 'xMax'.
      mathX = percentX * (xMax - xMin) + xMin;
     
      mathY = evaluateMathExpr(mathX);
      
      // Project 'mathY' from the interval ['yMin', 'yMax']
      // to the interval [0, 1].
      percentY = (mathY - yMin) / (yMax - yMin);
      
      // Flip Y to match canvas coordinates.
      percentY = 1 - percentY;
      
      // Project percentX and percentY to pixel coordinates.
      xPixel = percentX * canvas.width;
      yPixel = percentY * canvas.height;

      // The first time this line of code is run, it defines the first point
      // in the path, acting exactly like 'c.moveTo(xPixel, yPixel);'
      // Subsequently, this line of code adds a line segment to the curve path
      // between the previous and current points.
      c.lineTo(xPixel, yPixel);
    }
    // This line of code renders the curve path defined by the 'c.lineTo' calls
    // by filling it in with a single-pixel-wide outline, called a 'stroke'.
    c.stroke();
  }

  // Evaluates the current math expression based on the given 
  // values for 'mathX' and 'time' ('time' is global).
  // Returns a Y coordinate in math space.
  function evaluateMathExpr(mathX){

    // Set values on the scope visible inside the math expression.
    scope.x = mathX;
    scope.t = time;

    // Evaluate the previously parsed math expression with the
    // new values for 'x' and 't' and return it.
    return tree.eval();
  }


  // Gets the fragment identifier value.
  function getHashValue(){
    return location.hash.substr(1);
  }

  // Sets the fragment identifier value.
  function setHashValue(value){
    return location.hash = value;
  }
});
