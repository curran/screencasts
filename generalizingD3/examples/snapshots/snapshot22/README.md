Introducing when()

`when()` encapsulates the recurring pattern:
 * Listen for changes on several variables
 * Extract values into local scope
 * Check if any are null
 * Debounce callback to eliminate redundant calls

Dependency property values are declared with an array, and their values are automatically injected into the callback, handling both debouncing and null checking.

Inspired by

 * [Ember's computed properties](http://emberjs.com/guides/object-model/computed-properties/)
 * [Angular's dependency injection](http://docs.angularjs.org/guide/di)
 * [Require's dependency declaration syntax](http://requirejs.org/docs/api.html#defdep)

These functional reactive programming libraries provide generalized `when` implementations:

 * [RxJS](http://reactive-extensions.github.io/RxJS/) - [the RxJS `when` operator](https://github.com/Reactive-Extensions/RxJS/blob/master/doc/api/core/observable.md#rxobservablewhenargs)
 * [Bacon.js](https://github.com/baconjs/bacon.js/tree/master) - [the Bacon.js `when` operator](https://github.com/baconjs/bacon.js/tree/master#bacon-when)
