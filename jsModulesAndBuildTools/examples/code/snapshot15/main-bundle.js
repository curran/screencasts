(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
function add(a, b) {
  return a + b;
}
var $__default = add;

//# sourceURL=/Users/curran/repos/screencasts/jsModulesAndBuildTools/examples/code/latest/add.js
},{}],2:[function(require,module,exports){
"use strict";
var $__sum__;
var sum = ($__sum__ = require("./sum"), $__sum__ && $__sum__.__esModule && $__sum__ || {default: $__sum__}).default;
var numbers = [1, 2, 3];
var result = sum(numbers);
var outputElement = document.getElementById("output");
outputElement.innerHTML = result;

//# sourceURL=/Users/curran/repos/screencasts/jsModulesAndBuildTools/examples/code/latest/main.js
},{"./sum":4}],3:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
function reduce(list, iteratee, memo) {
  list.forEach(function(item) {
    memo = iteratee(item, memo);
  });
  return memo;
}
var $__default = reduce;

//# sourceURL=/Users/curran/repos/screencasts/jsModulesAndBuildTools/examples/code/latest/reduce.js
},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperties(exports, {
  default: {get: function() {
      return $__default;
    }},
  __esModule: {value: true}
});
var $__reduce__,
    $__add__;
var reduce = ($__reduce__ = require("./reduce"), $__reduce__ && $__reduce__.__esModule && $__reduce__ || {default: $__reduce__}).default;
var add = ($__add__ = require("./add"), $__add__ && $__add__.__esModule && $__add__ || {default: $__add__}).default;
function sum(list) {
  return reduce(list, add, 0);
}
var $__default = sum;

//# sourceURL=/Users/curran/repos/screencasts/jsModulesAndBuildTools/examples/code/latest/sum.js
},{"./add":1,"./reduce":3}]},{},[2]);
