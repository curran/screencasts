(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
var Model = require("model-js");
var d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);

function MyComponent(){
  var my = new Model();

  my.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  var svg = d3.select(my.el)
    .attr("width", 200)
    .attr("height", 200);

  var rect = svg.append("rect")
    .attr("width", 200)
    .attr("height", 200);
  
  return my;
}

var myComponent = new MyComponent();

document.getElementById("container").appendChild(myComponent.el);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"model-js":2}],2:[function(require,module,exports){
// ModelJS v0.2.1
//
// https://github.com/curran/model
// 
// Last updated by Curran Kelleher March 2015
//
// Includes contributions from
//
//  * github.com/mathiasrw
//  * github.com/bollwyvl
//  * github.com/adle29
//  * github.com/Hypercubed
//
// The module is defined inside an immediately invoked function
// so it does not pullute the global namespace.
(function(){

  // Returns a debounced version of the given function.
  // See http://underscorejs.org/#debounce
  function debounce(callback){
    var queued = false;
    return function () {
      if(!queued){
        queued = true;
        setTimeout(function () {
          queued = false;
          callback();
        }, 0);
      }
    };
  }

  // Returns true if all elements of the given array are defined, false otherwise.
  function allAreDefined(arr){
    return !arr.some(function (d) {
      return typeof d === 'undefined' || d === null;
    });
  }

  // The constructor function, accepting default values.
  function Model(defaults){

    // Make sure "new" is always used,
    // so we can use "instanceof" to check if something is a Model.
    if (!(this instanceof Model)) {
      return new Model(defaults);
    }

    // `model` is the public API object returned from invoking `new Model()`.
    var model = this,

        // The internal stored values for tracked properties. { property -> value }
        values = {},

        // The callback functions for each tracked property. { property -> [callback] }
        listeners = {},

        // The set of tracked properties. { property -> true }
        trackedProperties = {};

    // The functional reactive "when" operator.
    //
    //  * `properties` An array of property names (can also be a single property string).
    //  * `callback` A callback function that is called:
    //    * with property values as arguments, ordered corresponding to the properties array,
    //    * only if all specified properties have values,
    //    * once for initialization,
    //    * whenever one or more specified properties change,
    //    * on the next tick of the JavaScript event loop after properties change,
    //    * only once as a result of one or more synchronous changes to dependency properties.
    function when(properties, callback, thisArg){
      
      // Make sure the default `this` becomes 
      // the object you called `.on` on.
      thisArg = thisArg || this;

      // Handle either an array or a single string.
      properties = (properties instanceof Array) ? properties : [properties];

      // This function will trigger the callback to be invoked.
      var listener = debounce(function (){
        var args = properties.map(function(property){
          return values[property];
        });
        if(allAreDefined(args)){
          callback.apply(thisArg, args);
        }
      });

      // Trigger the callback once for initialization.
      listener();
      
      // Trigger the callback whenever specified properties change.
      properties.forEach(function(property){
        on(property, listener);
      });

      // Return this function so it can be removed later with `model.cancel(listener)`.
      return listener;
    }

    // Adds a change listener for a given property with Backbone-like behavior.
    // Similar to http://backbonejs.org/#Events-on
    function on(property, callback, thisArg){
      thisArg = thisArg || this;
      getListeners(property).push(callback);
      track(property, thisArg);
    }
    
    // Gets or creates the array of listener functions for a given property.
    function getListeners(property){
      return listeners[property] || (listeners[property] = []);
    }

    // Tracks a property if it is not already tracked.
    function track(property, thisArg){
      if(!(property in trackedProperties)){
        trackedProperties[property] = true;
        values[property] = model[property];
        Object.defineProperty(model, property, {
          get: function () { return values[property]; },
          set: function(newValue) {
            var oldValue = values[property];
            values[property] = newValue;
            getListeners(property).forEach(function(callback){
              callback.call(thisArg, newValue, oldValue);
            });
          }
        });
      }
    }

    // Cancels a listener returned by a call to `model.when(...)`.
    function cancel(listener){
      for(var property in listeners){
        off(property, listener);
      }
    }

    // Removes a change listener added using `on`.
    function off(property, callback){
      listeners[property] = listeners[property].filter(function (listener) {
        return listener !== callback;
      });
    }

    // Sets all of the given values on the model.
    // `newValues` is an object { property -> value }.
    function set(newValues){
      for(var property in newValues){
        model[property] = newValues[property];
      }
    }

    // Transfer defaults passed into the constructor to the model.
    set(defaults);

    // Public API.
    model.when = when;
    model.cancel = cancel;
    model.on = on;
    model.off = off;
    model.set = set;
  }
  
  // Model.None is A representation for an optional Model property that is not specified.
  // Model property values of null or undefined are not propagated through
  // to when() listeners. If you want the when() listener to be invoked, but
  // some of the properties may or may not be defined, you can use Model.None.
  // This way, the when() listener is invoked even when the value is Model.None.
  // This allows the "when" approach to support optional properties.
  //
  // For example usage, see this scatter plot example with optional size and color fields:
  // http://bl.ocks.org/curran/9e04ccfebeb84bcdc76c
  //
  // Inspired by Scala's Option type.
  // See http://alvinalexander.com/scala/using-scala-option-some-none-idiom-function-java-null
  Model.None = "__NONE__";

  // Support AMD (RequireJS), CommonJS (Node), and browser globals.
  // Inspired by https://github.com/umdjs/umd
  if (typeof define === "function" && define.amd) {
    define([], function () { return Model; });
  } else if (typeof exports === "object") {
    module.exports = Model;
  } else {
    this.Model = Model;
  }
})();

},{}]},{},[1]);
