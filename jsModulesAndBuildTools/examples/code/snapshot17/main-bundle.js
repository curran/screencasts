(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  factory();
}(this, function () { 'use strict';

  var numbers = [1, 2, 3];

  function add(a, b){
    return a + b;
  }

  function reduce(list, iteratee, memo){
    list.forEach(function (item){
      memo = iteratee(item, memo);
    });
    return memo;
  }

  function sum(list){
    return reduce(list, add, 0);
  }

  var result = sum(numbers);

  var outputElement = document.getElementById("output");
  outputElement.innerHTML = result;

}));