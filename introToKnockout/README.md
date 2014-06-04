# What is Knockout.js?

 * A "Model View Viewmodel" user interface framework
   * Model - persistent data residing on the server
   * Viewmodel - the client-side model that drives the user interface
   * View - the user interface DOM elements
 * Core functionality
   * [Observables](http://knockoutjs.com/documentation/observables.html) - implement the [observer pattern](http://en.wikipedia.org/wiki/Observer_pattern)
   * [Data Binding](http://knockoutjs.com/documentation/binding-syntax.html) - automatic View and Viewmodel synchronization
   * [Computed Properties](http://knockoutjs.com/documentation/computedObservables.html) - automatic change propagation through data dependency graphs
 * Limited in scope to user interface only
   * Does not deal with routing or AJAX
   * Gaps filled by [Durandal.js](http://durandaljs.com/)
     * A complete Single Page App framework built on Knockout, [Require.js](http://requirejs.org/) and [JQuery](http://jquery.com/)

# Framework Comparison Table

 * Shows popular JavaScript Frameworks related to building single page applications
 * "Yes" means the feature is included
 * blank means it is not included
 * a library name means there is an additional library for the feature

| Library     | Size | Github Stars | Templating | Data Binding | Routing   |
|-------------|------|--------------|------------|--------------|-----------|
| [Backbone.js](http://backbonejs.org/) | 6.5kb| 18,167       |            |              | Yes       |
| [Knockout.js](http://knockoutjs.com/) | 17kb | 5,036        | Yes        | Yes          | [Durandal](http://durandaljs.com/)  |
| [Angular.js](https://angularjs.org/) | 106kb| 24,580        | Yes        | Yes          | [UI-Router](https://github.com/angular-ui/ui-router) |
| [Ember.js](http://emberjs.com/)    | 71kb | 10,368          | Yes        | [Handlebars](http://handlebarsjs.com/) | Yes       |
| [Can.js](http://canjs.com/)    | 82kb | 928                 | Yes        | Yes          | Yes       |
| [React.js](https://github.com/facebook/react) | 123kb| 7,015| Yes        | Yes          | [react-router-component](https://github.com/andreypopp/react-router-component) |

Table fields:

 * Size - minified library size
 * GitHub Stars - number of people who have starred the repository (popularity indicator)
 * Observable - the library has some means to observe changes in a model with named properties
 * Computed Properties - explicitly supports data dependency graphs
 * Data Binding - automatic synchronization between views and models
 * Composable Views - views can contain other views (also called "partials")
 * Routing - responding to changes in the URL hash fragment and parsing its parameters

More frameworks:

 * [SproutCore](http://sproutcore.com/)
 * [JSViews](http://www.jsviews.com/)
 * [Spine.js](http://spinejs.com/)
 * [Batman.js](http://batmanjs.org/)
 * [Meteor.js](https://www.meteor.com/)
 * [Enyo.js](http://enyojs.com/)

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
 * [Example 20](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot20) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot20) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot20/index.html)) - Using observable arrays in templates
 * [Example 21](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot21) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot21) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot21/index.html)) - Adding entries to observable arrays using forms
 * [Example 22](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot22) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot22) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot22/index.html)) - Clearing the entered name on submit
 * [Example 23](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot23) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot23) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot23/index.html)) - Removing items from an observable array
 * [Example 24](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot24) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot24) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot24/index.html)) - Enumerating objects - countries and their populations
 * [Example 25](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot25) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot25) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot25/index.html)) - Building a table
 * [Example 26](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot26) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot26) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot26/index.html)) - Fetching JSON for populating a table
 * [Example 27](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot27) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot27) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot27/index.html)) - Adding a search query box
 * [Example 28](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot28) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot28) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot28/index.html)) - Live search
 * [Example 29](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot29) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot29) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot29/index.html)) - Object literal computed property gotcha
 * [Example 30](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot30) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot30) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot30/index.html)) - Using a constructor function
 * [Example 31](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot31) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot31) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot31/index.html)) - Simpler construction avoiding 'this' and 'new'
 * [Example 32](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot32) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot32) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot32/index.html)) - Sorting countries by population
 * [Example 33](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot33) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot33) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot33/index.html)) - Sorting by field, the wrong way
 * [Example 34](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot34) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot34) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot34/index.html)) - Using inline click handler functions
 * [Example 35](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot35) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot35) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot35/index.html)) - Using function.prototype.bind in click handler
 * [Example 36](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot36) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot36) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot36/index.html)) - Using DOM attributes in click handler
 * [Example 37](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot37) - ([run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot37) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot37/index.html)) - Interactively reversing sort order

# Sources

 * [Rich Web UIs with Knockout.js - Steven Sanderson](https://www.youtube.com/watch?v=MNiUcuo3Wio) - A brief introduction to Knockout by its creator Steven Sanderson
 * [learn.knockoutjs.com](http://learn.knockoutjs.com/) - Knockout interactive tutorial
 * [Top JavaScript MVC Frameworks](http://www.infoq.com/research/top-javascript-mvc-frameworks) - Comparison of frameworks
 * [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
 * [URL Routing with Sammy.js and Knockout.js](http://www.softfinity.com/blog/an-simple-introduction-to-url-routing/)
 * [YouTube: A comparison of the two-way binding in AngularJS, EmberJS and KnockoutJS](https://www.youtube.com/watch?v=mVjpwia1YN4) Surveys common features across libraries, lots of code examples
 * [YouTube: Getting the Most Out of Knockout js](https://www.youtube.com/watch?v=a108oDs39Ss) A deep dive into the internal organiation of Knockout, complex code examples
