/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var sum = __webpack_require__(1);

	var numbers = [1, 2, 3];
	var result = sum(numbers);

	var outputElement = document.getElementById("output")
	outputElement.innerHTML = result;


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var reduce = __webpack_require__(2);
	var add = __webpack_require__(3);

	function sum(list){
	  return reduce(list, add, 0);
	};

	module.exports = sum;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	function reduce(list, iteratee, memo){
	  list.forEach(function (item){
	    memo = iteratee(item, memo);
	  });
	  return memo;
	}

	module.exports = reduce;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	function add(a, b){
	  return a + b;
	}

	module.exports = add;


/***/ }
/******/ ]);