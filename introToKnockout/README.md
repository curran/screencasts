# What is Knockout.js?

 * A "Model View Viewmodel" user interface framework
   * Model - persistent data residing on the server
   * Viewmodel - the client-side model that drives the user interface
   * View - the user interface DOM elements
 * Core functionality
   * Data Binding - synchronize view with viewmodel
   * Computed Properties - automatic change propagation
 * Related Frameworks
   * [Durandal.js](http://durandaljs.com/) A complete Single Page App framework built on Knockout, [Require.js](http://requirejs.org/) and [JQuery](http://jquery.com/)
   * [Angular.js](https://angularjs.org/)
   * [Ember.js](http://emberjs.com/)
   * [Backbone.js](http://backbonejs.org/)
   * [React.js](https://github.com/facebook/react)
   * [Can.js](http://canjs.com/) 
   * [JSViews](http://www.jsviews.com/)
   * [Spine.js](http://spinejs.com/)

# Framework Comparison Table

 * Shows popular JavaScript Frameworks related to building single page applications
 * "Yes" means the feature is included
 * blank means it is not included
 * a library name means there is an additional library for the feature

| Library     | Minified File Size | Github Stars | Observable Models | Computed Properties | Templating | Data Binding | Composable Views  | Routing   |
|-------------|--------------------|--------------|-------------------|---------------------|------------|--------------|-------------------|-----------|
| Knockout.js | 17kb               | 5,036        | Yes               | Yes                 | Yes        | Yes          | Durandal          | Durandal  |
| Angular.js  | 106kb              | 24,580       | Dirty checking    | Dirty checking      | Yes        | Yes          | AngularUI         | UI-Router |
| Ember.js    | 71kb               | 10,368       | Yes               | Yes                 | Yes        | Yes          | Yes               | Yes       |
| Can.js      | 82kb               | 928          | Yes               | Yes                 | Yes        | Yes          | Yes               | Yes       |
| React.js    | 123kb              | 7,015        | Yes               |                     | Yes        | Yes          | Yes               | react-router-component |
| Backbone.js | 6.5kb              | 18,167       | Yes               |                     |            |              | Yes               | Yes       |

## Examples

 * Illustrate Knockout features in small increments
 * Meant to be as simple as possible (e.g. no [Bootstrap](http://getbootstrap.com/) or [Grunt](http://gruntjs.com/))
 * Check out the [example viewer](http://curran.github.io/screencasts/introToKnockout/exampleViewer)

Listing of all examples:

 * [Example 1](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot01) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01/index.html)) - Starter HTML page with a text input
 * [Example 2](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot02) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02/index.html)) - DIY One-way Data Binding
 * [Example 3](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot03) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03/index.html)) - Hello Knockout
 * [Example 4](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot04) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04/index.html)) - Getting and setting observables
 * [Example 5](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot05) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05/index.html)) - Subscribing to observables
 * [Example 6](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot06) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06/index.html)) - Unsubscribing from observables
 * [Example 7](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot07) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07/index.html)) - Computed properties
 * [Example 8](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot08) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08/index.html)) - Subscribing to computed properties
 * [Example 9](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot09) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09/index.html)) - Hello Knockout
 * [Example 10](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot10) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10/index.html)) - Separating out JavaScript
 * [Example 11](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot11) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11/index.html)) - Isolating the viewModel
 * [Example 12](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot12) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12/index.html)) - Updating on key up
 * [Example 13](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot13) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13/index.html)) - Data binding with many text inputs
 * [Example 14](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot14) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14/index.html)) - Displaying first and last name
 * [Example 15](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot15) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15/index.html)) - Why object literals are not good viewmodels
 * [Example 16](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot16) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16/index.html)) - Using a viewmodel constructor function
 * [Example 17](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot17) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17/index.html)) - Binding 'this' for computed properties
 * [Example 18](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot18) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18/index.html)) - An alternative pattern avoiding 'this' and 'new'
 * [Example 19](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot19) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19/index.html)) - Observable arrays

# Sources

 * [Rich Web UIs with Knockout.js - Steven Sanderson](https://www.youtube.com/watch?v=MNiUcuo3Wio) - A brief introduction to Knockout by its creator Steven Sanderson
 * [learn.knockoutjs.com](http://learn.knockoutjs.com/) - Knockout interactive tutorial
 * [Top JavaScript MVC Frameworks](http://www.infoq.com/research/top-javascript-mvc-frameworks) - Comparison of frameworks
 * [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
 * [URL Routing with Sammy.js and Knockout.js](http://www.softfinity.com/blog/an-simple-introduction-to-url-routing/)
 * [YouTube: A comparison of the two-way binding in AngularJS, EmberJS and KnockoutJS](https://www.youtube.com/watch?v=mVjpwia1YN4) Surveys common features across libraries, lots of code examples
