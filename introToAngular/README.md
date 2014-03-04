# Angular.js

[Angular.js](http://angularjs.org/) is one of the hottest frameworks out there today and well worth learning.

## Data Binding Frameworks

 * Facilitate building [single page applications](http://en.wikipedia.org/wiki/Single-page_application)
   * Page never reloads
   * No server-side page rendering
 * Based on the [Model View Controller](http://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) concept
 * Provide solutions for:
   * Routing - handling updates to the URL hash fragment
   * Templating - dynamically creating and updating HTML based on templates and models
   * Data binding - synchronize the model and user interface
 * Top data binding frameworks today:
   * [Angular.js](http://angularjs.org/)
   * [Knockout](http://knockoutjs.com/)
   * [Ember](http://emberjs.com/)
   * [JsViews](http://www.jsviews.com/#jsviews)
   * [Can.js](http://canjs.com/)
   * [Ractive](http://www.ractivejs.org/)

## Foundational Libraries

The following libraries lay the foundation for many data binding frameworks:

 * [jQuery](http://jquery.com/) - an industry standard library for [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) [manipulation](https://api.jquery.com/category/manipulation/) and [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming)).
 * [Underscore](http://underscorejs.org/) - a widely adopted [functional programming](http://en.wikipedia.org/wiki/Functional_programming) utility library, providing functional primitives such as map, reduce, each and filter. [Lo-Dash](http://lodash.com/) is a replacement for Underscore that boasts performance increases, bug fixes and additional features.
 * [Backbone](http://backbonejs.org/) - a tried and true bare bones MVC framework that provides fundamental features such as events, observable properties, and class-like inheritance. Backbone also has foundational support for routing based on hash fragments and RESTful synchronization with a [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) backend for persistence.
 * [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) - an industry standard for separating JavaScript projects across many files using modules. The top AMD implementation is [Require](http://requirejs.org/).
 * [Promises](http://howtonode.org/promises) - an industry standard pattern for dealing with asynchronous control flow. The top Promises implementation is [Q](https://github.com/kriskowal/q). [Async.js](https://github.com/caolan/async) is another great asynchronous control flow library, from the [Node.js](http://nodejs.org/) community.
 * [Handlebars](http://handlebarsjs.com/) - one of the top templating libraries. Handlebars is derived from [Mustache](http://mustache.github.io/), which provides logic-less templates.

## Angular Learning Resources

Birds-eye-view:

 * [Learn Angularjs This Weekend](http://joelhooks.com/blog/2013/08/03/learn-angularjs-in-a-weekend/) - Advice on which resources to use for getting up to speed on Anguar.
 * [A Better Way to Learn AngularJS](http://www.thinkster.io/angularjs/GtaQ0oMGIl/a-better-way-to-learn-angularjs) - A great collection of links to resources for learning Angular.
 * [AngularJS-Learning](https://github.com/jmcunningham/AngularJS-Learning) - A kithen sink of links to Angular learning resources.

Introductory tutorials and guides:

 * [Angular Developer Guide Conceptual Overview](http://docs.angularjs.org/guide/concepts)
   * Enumerates fundamental concepts
   * Provides several code examples
 * [Official Angular Tutorial](http://docs.angularjs.org/tutorial)
   * Useful to read through
   * Emphasizes testing
   * Starts with complex boilerplate project
   * Great diagrams
 * [Egghead.io](https://egghead.io/tags/AngularJS)
   * A collection of short screencasts (scroll to the bottom for intoduction content)
 * [AngularJS Fundamentals In 60-ish Minutes](https://www.youtube.com/watch?v=i9MHigUZKEM)
   * A talk on YouTube that covers fundamentals of Angular
 * [Learn Angular.js in 30 Min](https://www.youtube.com/watch?v=QETUuZ27N0w)
   * A screencast showing how to build an app using [UI-Router](https://github.com/angular-ui/ui-router)
   * Does not cover basics, jumps to advanced usage
   * Great example of how development flows in practice

Design and implementation of Angular:

 * [Re-Imagining the Browser with AngularJS](https://www.youtube.com/watch?v=ersEb9vTX3Y)
   * Talk by Miško Hevery, creator of Angular
   * Discusses the high-level goals of Angular
 * [Bringing Angular Apps to Life with Animation by Miško Hevery](https://www.youtube.com/watch?v=cF_JsA9KsDM)
 * [Google I/O 2013 - Design Decisions in AngularJS](https://www.youtube.com/watch?v=HCR7i5F5L8c)

## Examples

 * [snapshot01](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot01/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot01) - Starter HTML page with a text input
 * [snapshot02](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot02/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot02) - Added keyup event listener on textInput.
 * [snapshot03](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot03/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot03) - Extracting text from the text input as it changes.
 * [snapshot04](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot04/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot04) - Updating a span when input text changes using the DOM API.
 * [snapshot05](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot05/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot05) - Updating a span when input text changes using jQuery.
 * [snapshot06](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot06/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot06) - Updating a span when input text changes using Backbone.
 * [snapshot07](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot07/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot07) - Updating a template when input text changes using Angular.
 * [snapshot08](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot08/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot08) - Data binding with many text inputs.
 * [snapshot09](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot09/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot09) - First name and last name.
 * [snapshot10](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot10/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot10) - Initializing the model using an Angular controller, defined with a global function.
 * [snapshot11](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot11/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot11) - Initializing the model using an Angular controller, defined within an Angular module.
 * [snapshot12](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot12/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot12) - Changing scope values asynchronously - updates don't propagate without .apply().
 * [snapshot13](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot13/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot13) - Changing scope values asynchronously - updates propagate .apply().
 * [snapshot14](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot14/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot14) - Looping over lists in templates using ng-repeat.
 * [snapshot15](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot15/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot15) - Adding entries to a list using forms and ng-submit.
 * [snapshot16](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot16/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot16) - Clearing the entered name on submit using data binding.
 * [snapshot17](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot17/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot17) - Removing names from a list using ng-click.
 * [snapshot18](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot18/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot18) - Enumerating objects - countries and their populations.
 * [snapshot19](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot19/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot19) - Building a table.
 * [snapshot20](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot20) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot20/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot20) - Fetching JSON.
 * [snapshot21](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot21) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot21/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot21) - Dependency injection syntax for minification.
 * [snapshot22](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot22) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot22/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot22) - Adding search using Angular filters.
 * [snapshot23](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot23) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot23/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot23) - Sorting in ng-repeat using orderBy
 * [snapshot24](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot24) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot24/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot24) - Sorting in descending order
 * [snapshot25](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot25) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot25/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot25) - Sorting table columns interactively.
 * [snapshot26](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot26) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot26/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot26) - Interactively reversing sort order.
 * [snapshot27](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot27) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot27/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot27) - Adding country flag images.
 * [snapshot28](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot28) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot28/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot28) - Using ng-src.
 * [snapshot29](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot29) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot29/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot29) - Adding capital data.
 * [snapshot30](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot30) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot30/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot30) - Adding GDP data
 * [snapshot31](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot31) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot31/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot31) - Formatting currency using Angular filters in templates.
 * [snapshot32](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot32) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot32/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot32) - Formatting population using Angular filters in templates.
 * [snapshot33](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot33) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot33/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot33) - Preparing for routing - making a simple country listing.
 * [snapshot34](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot34) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot34/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot34) - Getting started with routing using ngRoute
 * [snapshot35](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot35) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot35/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot35) - Moving templates for routes into separate files
 * [snapshot36](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot36) - [index.html source](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/examples/snapshots/snapshot36/index.html) | [run it!](http://curran.github.io/screencasts/introToAngular/examples/snapshots/snapshot36) - Extracting and using parameters from routes

by [Curran Kelleher](https://github.com/curran/portfolio) March 2014
