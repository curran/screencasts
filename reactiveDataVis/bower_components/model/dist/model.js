
// A functional reactive model library.
//
// By [Curran Kelleher](https://github.com/curran/portfolio) July 2014
//
// ## Public API
//
// `var model = Model();`
//
//  * The model constructor function.
//  * Using "new" is optional.
//  * The returned `model` object can be treated as a plain JavaScript Object
//    for setting and getting property values, e.g.
//    * `model.x = 5;`
//    * `console.log(model.x);`
//
// `model.when(properties, callback [, thisArg]);`
//
//  * Listens for changes to the given dependency properties.
//  * `properties` Either an array of strings or a string.
//    Specifies the dependency properties.
//  * `callback` A callback function that is called:
//    * with dependency property values as arguments,
//    * only if all dependency properties have values,
//    * once for initialization,
//    * whenever one or more dependency properties change,
//    * on the next tick of the JavaScript event loop after 
//      dependency properties change,
//    * only once as a result of one or more changes to
//      dependency properties.
//  * `thisArg` An optional argument bound to `this` in the callback.
//
// `model.removeListener(listenerToRemove)`
//
//  * Removes the listener returned by `when`.
//
// `model.set(values)`
//
//  * A convenience function for setting many model properties.
//  * Assigns each property from the given `values` object.
//  * This function can be used to deserialize models, e.g.:
//    * `var json = JSON.stringify(model);`
//    * ... later on ..
//    * `model.set(JSON.parse(json));`
//
/* Here's some example code demonstrating how to use model.js.
 * This code computes a `fullName` property based on two others,
 * `firstName` and `lastName`.

var model = Model();

model.when(['firstName', 'lastName'], function (firstName, lastName) {
  model.fullName = firstName + ' ' + lastName;
});

model.when('fullName', function (fullName) {
  console.log(fullName); // prints 'John Doe'
});

model.firstName = 'John';
model.lastName = 'Doe';
*/

// ## Implementation
define('model/model',[], function () {

  // ### Helper Functions
  //
  // Returns a function which when called schedules
  // the original callback function to execute on the next
  // tick of the JavaScript event loop. Multiple calls to the
  // debounced function within a single tick of the event loop
  // cause the original callback to be called only once.
  //
  // See also [debounce in Underscore.js](http://underscorejs.org/#debounce).
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

  // Returns true if all elements of the given array are defined.
  function allAreDefined(arr){
    return !arr.some(function (d) {
      return typeof d === 'undefined' || d === null;
    });
  }

  // The Model constructor function, returned as the AMD module.
  return function Model() {

    // ### Private Variables
    //
    // Stores listener functions.
    //
    //  * Keys are property names.
    //  * Values are arrays of listener functions.
    var listeners = {},

        // Flags which properties have been tracked.
        //
        //  * Keys are property names.
        //  * Values are `true`.
        trackedProperties = {},

        // Stores the internal values for tracked properties.
        //
        //  * Keys are property names.
        //  * Values are the property values of the model.
        values = {},
        
        // Tracks which properties change inside a callback,
        // used for detecting the flow graph. This is normally
        // null, but becomes an object that stores which properties
        // change when a callback is being called.
        changedProperties,

        // A function used for detecting the data flow graph.
        recordLambda,

        // The object returned, containing the public API.
        model;

    // #### addListener
    // This function deals with calling the callback.
    function addListener(properties, callback, thisArg){

      // Define a listener function that invokes the callback,
      // passing as arguments the model property values corresponding
      // to the given dependency properties.
      var listener = debounce(function () {

        // Extract the property values into an array.
        var args = properties.map(function (property) {
          return values[property];
        });

        // Call the callback if all properties are defined.
        if(allAreDefined(args)) {
          // If the flow graph is being detected,
          if(recordLambda) {
            // Prepare for recording which properties change
            // inside the callback.
            changedProperties = {};
          }

          // Call the callback.
          callback.apply(thisArg, args);

          // If the flow graph is being detected,
          if(recordLambda) {

            // record this listener as a lambda node
            // in the flow graph.
            recordLambda(properties);
          }
        }
      });

      // Invoke the listener once for initialization.
      listener();

      // Store the listener such that it get invoked
      // when any dependency properties change.
      properties.forEach(function(property){
        if(!listeners[property]) {
          listeners[property] = [];
        }
        listeners[property].push(listener);
      });
      return listener;
    }

    // #### trackProperty
    // This function deals with tracking properties.
    function trackProperty(property){

      // If the property is not already tracked,
      if(!trackedProperties[property]) {

        // flag the property as tracked.
        trackedProperties[property] = true;

        // Copy the value that may have been previously assigned
        // from the `model` object to the internal `values` object.
        //
        // This allows properties to be assigned before they are
        // listened to using `model.when`.
        values[property] = model[property];

        // Track the property on the `model` object using setters and getters.
        // See also [Object.defineProperty docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty).
        Object.defineProperty(model, property, {
          
          // When a property is evaluated on `model`,
          get: function () {

            // return the internal value.
            return values[property];
          },

          // When a property is assigned on `model` (e.g. `model.x = 5`),
          set: function(value) {

            // If the flow graph is being detected,
            if(changedProperties) {
              // mark the property as changed.
              changedProperties[property] = true;
            }

            // assign the internal value, and
            values[property] = value;

            // notify listeners.
            if(listeners[property]){
              listeners[property].forEach(function (listener) {
              
                // Note that a single listener may be called many times
                // if more than one of its dependency properties changes,
                // or if a single dependency property changes more than once.
                // These multiple calls collapse to a single call to the original
                // callback because the listener is debounced.
                listener();
              });
            }
          }
        });
      }
    }

    // ### Public Methods
    //
    // #### when
    // Tracks properties and sets up the callback
    // to be called appropriately.
    function when(properties, callback, thisArg) {

      // Support passing either single string or 
      // an array of strings as the `properties` argument.
      if(!(properties instanceof Array)) {
        properties = [properties];
      }

      // For each dependency property, track it using
      // Object.defineProperty where setters invoke listeners.
      properties.forEach(trackProperty);

      // Set up the callback to be invoked with property values
      // once initially, when any property changes, but only
      // when all property values are defined.
      return addListener(properties, callback, thisArg);
    }

    // #### removeListener
    // Removes a listener added by a call to `when`.
    function removeListener(listenerToRemove) {

      // For each key that has listeners,
      Object.keys(listeners).forEach(function (property) {

        // remove the given listener from its array.
        listeners[property] = listeners[property].filter(function (listener) {
          return listener !== listenerToRemove;
        });
      });
    }

    // #### set
    // Copies values from `values` to `model`.
    function set(values){
      Object.keys(values).forEach(function (property) {
        model[property] = values[property];
      });
    }

    // #### detectFlowGraph
    // Detects the flow graph that executes within
    // the given `wait` time (in ms).
    function detectFlowGraph(callback, wait){
      var nodes = {},
          links = [];

      // Default wait time.
      wait = wait || 50;

      function propertyNode(name) {
        return nodes[name] || (nodes[name] = { type: 'property', name: name });
      }

      function lambdaNodeKey(inProperties, outProperties) {
        return inProperties.join(',') + '|' + outProperties.join(',');
      }

      recordLambda = function (inProperties) {
        var outProperties = Object.keys(changedProperties),
            key = lambdaNodeKey(inProperties, outProperties),
            lambda = nodes[key];
        if(!lambda && outProperties.length > 0){
          lambda = nodes[key] = { type: 'lambda' };
          inProperties.forEach(function (property) {
            links.push({
              source: propertyNode(property),
              target: lambda
            });
          });
          outProperties.forEach(function (property) {
            links.push({
              source: lambda,
              target: propertyNode(property)
            });
          });
        }
      };
      setTimeout(function () {
        callback({
          nodes: Object.keys(nodes).map(function (key, i) {
            var node = nodes[key];
            node.index = i;
            return node;
          }),
          links: links.map(function (link) {
            return {
              source: link.source.index,
              target: link.target.index
            };
          })
        });
      }, wait);
    }

    // Define the public API object. See also [Object.create docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create).
    //
    // The object passed to `Object.create` becomes the prototype of `model`,
    // so methods are callable but do not appear as "own properties" of the object.
    //
    // This makes it is possible to call `JSON.stringify(model)` to serialize models.
    model = Object.create({
      when: when,
      removeListener: removeListener,
      set: set,
      detectFlowGraph: detectFlowGraph
    });

    return model;
  };
});

define('model', ['model/model'], function (main) { return main; });
