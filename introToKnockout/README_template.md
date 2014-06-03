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

<%= examples %>

# Sources

 * [Rich Web UIs with Knockout.js - Steven Sanderson](https://www.youtube.com/watch?v=MNiUcuo3Wio) - A brief introduction to Knockout by its creator Steven Sanderson
 * [learn.knockoutjs.com](http://learn.knockoutjs.com/) - Knockout interactive tutorial
 * [Top JavaScript MVC Frameworks](http://www.infoq.com/research/top-javascript-mvc-frameworks) - Comparison of frameworks
 * [A Comparison of Angular, Backbone, CanJS and Ember](http://sporto.github.io/blog/2013/04/12/comparison-angular-backbone-can-ember/)
 * [URL Routing with Sammy.js and Knockout.js](http://www.softfinity.com/blog/an-simple-introduction-to-url-routing/)
 * [YouTube: A comparison of the two-way binding in AngularJS, EmberJS and KnockoutJS](https://www.youtube.com/watch?v=mVjpwia1YN4) Surveys common features across libraries, lots of code examples
 * [YouTube: Getting the Most Out of Knockout js](https://www.youtube.com/watch?v=a108oDs39Ss) A deep dive into the internal organiation of Knockout, complex code examples
