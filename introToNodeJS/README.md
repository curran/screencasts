This content goes along with the video [Introduction to Node.js]().

Resources:

 * [How do I read files in node.js?](https://docs.nodejitsu.com/articles/file-system/how-to-read-files-in-nodejs)
 * [Node "fs" API documentation](https://nodejs.org/api/fs.html)
 * [Lorem Ipsum](http://www.lipsum.com/)
 * [The Node.js Way - Understanding Error-First Callbacks](http://fredkschott.com/post/2014/03/understanding-error-first-callbacks-in-node-js/)
 * [Writing files in Node.js](http://stackoverflow.com/questions/2496710/writing-files-in-node-js)
 * [BUILD YOUR FIRST HTTP SERVER IN NODE.JS](http://blog.modulus.io/build-your-first-http-server-in-nodejs)
 * [Hypertext Transfer Protocol (Wikipedia)](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)
 * [Content types (MIME types) W3C Spec](https://www.w3.org/TR/html4/types.html#h-6.7)
 * [UTF-8 (Wikipedia)](https://en.wikipedia.org/wiki/UTF-8)
 * [JSBin HTML Boilerplate](https://jsbin.com/bupolekari/edit?html,output)
 * [Streamgraph with Padding](http://bl.ocks.org/curran/526e8504a153b9ea941e)
 * [Express NPM Package](https://www.npmjs.com/package/express)
 * [Specifics of package.json handling](https://docs.npmjs.com/files/package.json)
 * [Serving static files in Express](http://expressjs.com/en/starter/static-files.html)
 * [Datavis.tech](https://datavis.tech/)

When you have your server running, go to [http://localhost:3000/](http://localhost:3000/)

Code:


index.html
main.js
mainFileServer.js

greet.js
```javascript
function greet(name){
  return "Hello " + name;
}
module.exports = greet;
```

main.js (using greet.js)
```javascript
var greet = require("./greet");

console.log(greet("World"));
```

test.txt
```
Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
```

main.js (reading a file)
```javascript
var fs = require("fs");

fs.readFile("test.txt", "utf8", function (error, text){
  console.log(text);
});
```

main.js (writing a file)
```javascript
var fs = require("fs");

fs.writeFile("testWrite.txt", "Hello World", function (error){
  console.log("wrote file");
});
```

testWrite.txt
```
Hello World
```

index.html
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Test page</title>
  </head>
  <body>
    <h1>Hello Node.js!</h1>
  </body>
</html>
```

main.js (serving index.html)
```javascript
var http = require('http');
var fs = require('fs');

var server = http.createServer(function (request, response){
  response.writeHead(200, {
    'Content-Type': 'text/html'
  });

  fs.readFile('index.html', 'utf8', function (err, text){
    response.end(text);
  });
});

server.listen(3000, function(){
  console.log('Server listening at http://localhost:3000');
});
```

package.json
```
{
  "name": "testing",
  "version": "1.0.0",
  "description": "Testing stuff.",
  "main": "main.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Curran Kelleher",
  "license": "ISC",
  "dependencies": {
    "express": "^4.13.4"
  }
}
```

Commands used throughout the video:

```
mkdir testing
cd testing/
clear
ls
vim main.js
ls
cat main.js 
node main.js
vim main.js 
ls
clear
vim main.js 
clear
npm install express
npm init
npm install -S express
ls
ls node_modules/
cat package.json 
```
