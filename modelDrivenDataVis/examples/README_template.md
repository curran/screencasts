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

<%= examples %>

# Sources

 * [Rich Web UIs with Knockout.js - Steven Sanderson](https://www.youtube.com/watch?v=MNiUcuo3Wio) - A brief introduction to Knockout by its creator Steven Sanderson
 * [learn.knockoutjs.com](http://learn.knockoutjs.com/) - Knockout interactive tutorial
 * [Top JavaScript MVC Frameworks](http://www.infoq.com/research/top-javascript-mvc-frameworks) - Comparison of frameworks
 * [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
 * [URL Routing with Sammy.js and Knockout.js](http://www.softfinity.com/blog/an-simple-introduction-to-url-routing/)
 * [YouTube: A comparison of the two-way binding in AngularJS, EmberJS and KnockoutJS](https://www.youtube.com/watch?v=mVjpwia1YN4) Surveys common features across libraries, lots of code examples
 * [YouTube: Getting the Most Out of Knockout js](https://www.youtube.com/watch?v=a108oDs39Ss) A deep dive into the internal organiation of Knockout, complex code examples
