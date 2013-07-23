The code from an "Introduction to Coding" tutorial given at MIT on July 21, 2013. Part of the [HSSP 2013](http://curransoft.com/interactivegraphics/?p=485) course [Computer Programming and Interactive Graphics](http://curransoft.com/interactivegraphics/?p=485).

[Edit the code](http://jsbin.com/uhaziw/3/edit)!

Content of the tutorial:

 * Opening the Chrome JavaScript Console
 * Hello World

```javascript
console.log("Hello World");
Hello World
```

 * Variables
   * Numbers
   * Strings
     * Double quotes
     * Single quotes
   * Booleans

```javascript
var x = 5;
x
5
x
5
x = 7;
7
x
7
var y = 50;
y
50
var name = "Fred";
name
"Fred"
var name = 'Fred';
var x = true;
x
true
```

 * Contitional execution
   * `if`

```javascript
if(x){ console.log("Hello"); }
Hello
x = false;
false
if(x){ console.log("Hello"); }
```

 * Using the up and down arrows in the console

 * Operators
   * `&&`
   * `||`
   * `<`, `>`
   * `<=`, `>=`
   * `==`
   * `=`

```javascript
var a = true;
var b = false;
a && b;
false
b = true;
true
a && b;
true
a || b;
true
b = false;
false
a || b;
true
a = false;
false
a || b;
false
a && b;
false
var x = 5;
var y = 10;
x < y;
true
y < x;
false
5 < 5;
false
5 <= 5;
true
5<5;
false
 5 == 5;
true
 5 == 6;
false
x == 5;
true
"Hello" == "Hello"
true
"Hello" == "hello"
false
x
5
y
10
x != y
true
```

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

```javascript
var o = {};
o
Object {}
o.x = 5;
5
o.x;
5
o.y = 50;
50
o;
Object {x: 5, y: 50}
o['x']
5
o['x'] = 6;
6
o.x;
6
o['x'] = 6;
6
var p = 'z';
o[p] = 60;
60
o
Object {x: 6, y: 50, z: 60}
o.firstName = "Fred";
"Fred"
o
Object {x: 6, y: 50, z: 60, firstName: "Fred"}
o.foo = {a:100, b:200};
Object {a: 100, b: 200}
o
Object {x: 6, y: 50, z: 60, firstName: "Fred", foo: Object}
firstName: "Fred"
foo: Object
a: 100
b: 200

x: 6
y: 50
z: 60
```

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

```javascript
var a = [1,2,3,5];
a;
[1, 2, 3, 5]
a[2]
3
a[2] = 500;
500
a
[1, 2, 500, 5]
a.push(100);
5
a
[1, 2, 500, 5, 100]
a.pop();
100
a
[1, 2, 500, 5]
a.pop();
5
a
[1, 2, 500]
a.pop();
500
a.pop();
2
a.pop();
1
a.pop();
a.pop();
a
[]
```

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

```javascript
var add = function(a, b){ return a + b; };
add;
function (a, b){ return a + b; }
add(1,1);
2
add(1,5);
6
add(1, 1 + 1);
3
add(1, add(5, 5));
11
```

 * Loops
   * Declaring an increment variable `i`
   * Initialization (`i = 0`)
   * Condition (`i < n`)
   * Afterthought (`i++`)
 * The `++` syntax
   * `i++` is short for `i = i + 1`

```javascript
var i = 0;
console.log(i);
0
for(i = 0; i < 10; i = i + 1){ console.log(i); }
0
1
2
3
4
5
6
7
8
9
for(i = 0; i < 10; i = i + 1){ console.log(i + 1); }
1
2
3
4
5
6
7
8
9
10
```

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

```javascript
canvas
<canvas id=​"canvas" width=​"300" height=​"300">​
var c = canvas.getContext('2d');
c.fillRect(0, 0, 50, 50);
c.fillStyle = "red";
"red"
c.fillRect(0, 0, 40, 40);
```
