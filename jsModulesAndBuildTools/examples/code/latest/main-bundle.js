(function (factory) {
  !(typeof exports === 'object' && typeof module !== 'undefined') &&
  typeof define === 'function' && define.amd ? define(factory) :
  factory()
}(function () { 'use strict';

  function reduce(list, iteratee, memo){
    list.forEach(function (item){
      memo = iteratee(item, memo);
    });
    return memo;
  }

  function add(a, b){
    return a + b;
  }

  function sum(list){
    return reduce(list, add, 0);
  }

  var numbers = [1, 2, 3];
  var result = sum(numbers);

  var outputElement = document.getElementById("output");
  outputElement.innerHTML = result;

}));