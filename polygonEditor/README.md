This code is from a screencast recorded at an HTML5 tutorial at UMass Lowell given by [Curran Kelleher](https://github.com/curran/portfolio) on 4/1/2013. In the tutorial we use [Underscore.js](http://underscorejs.org/), [Backbone.js](http://backbonejs.org/), [Require.js](http://requirejs.org/), the [Model View Controller paradigm](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller), and [HTML5 Canvas](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-canvas-element.html) to build from scratch a graphical polygon editor.
## Material

 * [screencast on YouTube](http://www.youtube.com/watch?v=lNfKn0wbxYI&feature=youtu.be)
 * Final Product: [run it](http://curran.github.com/screencasts/polygonEditor/snapshots/snapshot06/), [view source](https://github.com/curran/screencasts/tree/gh-pages/polygonEditor/snapshots/snapshot06)
 * [snapshots of incremental progress](https://github.com/curran/screencasts/tree/gh-pages/polygonEditor/snapshots)

## Topics

 * Underscore.js
   * each
   * map
   * reduce
   * range
   * extend
 * Backbone.js
   * Events
     * on
     * trigger
   * Models
     * set and get
     * change events
   * Collections
     * adding Models to Collections
     * events 'add', 'remove', 'change'
 * Require.js
   * Using data-main
   * Syntax of the `require` and `define` functions
   * Script Loaders, motivating Asynchronous Module Definition
   * Module dependency graph concept
   * Defining a simple module dependency graph
     * `app` -> `myModule` -> `anotherModule`
   * The "baseURL" concept
   * Using `require.config()`
   * Busting the cache using the `urlArgs` configuration option
   * Using a directory tree and `/` in module names
 * The Model-View-Controller Paradigm
   * Using events to couple between the view and model
   * Having the controller change the model and cause events
 * Defining a Vertex "class" as a module that creates a Backbone Model type
 * Defining Model-View-Controller application using modules for:
   * The Model, a Backbone Collection of Vertices
   * The View, a rendering enging for an HTML5 Canvas
   * The Controller, a set of mouse listeners that implement interactions
     * These change the model, causing it to fire events
 * Discussion of the HTML feature/bug that each tag with an id gets assigned to a global variable automatically
 * Drawing circles on an HTML5 Canvas using the `arc` function
 * Make the canvas element flush against the upper left corner using inline CSS
 * Rendering a polygon using HTML5 Canvas `moveTo` and `lineTo` functions.
 * Discussion of when the Canvas API flushes the buffer to the display
 * Clearing and re-rendering the canvas content based on events
 * Using Underscore methods on Backbone Collections
