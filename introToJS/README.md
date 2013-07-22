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

 * Operators
   * `&&`
   * `||`
   * `<`, `>`
   * `<=`, `>=`

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

 * Objects

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
a
false
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

canvas
<canvas id=​"canvas" width=​"300" height=​"300">​
var c = canvas.getContext('2d');
c.fillRect(0, 0, 50, 50);
c.fillStyle = "red";
"red"
c.fillRect(0, 0, 40, 40);
```
