An introduction to Angular.js covering single-page-app concepts, related libraries and angular features by example. 

 * View the screencasts on YouTube
   * [Part I](https://www.youtube.com/watch?v=TRrL5j3MIvo&feature=youtu.be)
   * [Part II](https://www.youtube.com/watch?v=6J08m1H2BME&feature=youtu.be)
 * [Run the examples](http://curran.github.io/screencasts/introToAngular/exampleViewer) (use left and right arrow keys)

by [Curran Kelleher](https://github.com/curran/portfolio) March 2014

## [Angular.js](http://angularjs.org/)

  * "What HTML would have been, had it been designed for building web-apps"
  * Implements futuristic Web standards now ([Web Components and Model Driven views](http://www.confreaks.com/videos/2204-fronteersconf2011-web-components-and-model-driven-views))
  * Created by [Misko Hevery](https://www.youtube.com/results?search_query=misko%20hevery%20angularjs&sm=3) in 2009
  * Open Source, supported by Google
  * Extremely well documented
  * Vibrant community of users
  * Gaining traction in industry

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

 * [Underscore](http://underscorejs.org/) - a widely adopted [functional programming](http://en.wikipedia.org/wiki/Functional_programming) utility library, providing functional primitives such as map, reduce, each and filter. [Lo-Dash](http://lodash.com/) is a replacement for Underscore that boasts performance increases, bug fixes and additional features. Underscore can be used in conjunction with Angular.
 * [Backbone](http://backbonejs.org/) - a tried and true bare bones MVC framework that provides fundamental features such as events, observable properties, and class-like inheritance. Backbone also has foundational support for routing based on hash fragments and RESTful synchronization with a [CRUD](http://en.wikipedia.org/wiki/Create,_read,_update_and_delete) backend for persistence. Backbone was one of the first on the JavaScript MVC library scene, and surely influenced Angular.
 * [jQuery](http://jquery.com/) - an industry standard library for [DOM](http://en.wikipedia.org/wiki/Document_Object_Model) [manipulation](https://api.jquery.com/category/manipulation/) and [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming)).
   * Angular includes a jQuery-like API with [jqLite](http://docs.angularjs.org/api/ng/function/angular.element)
 * [AMD](https://github.com/amdjs/amdjs-api/wiki/AMD) - an industry standard for separating JavaScript projects across many files using modules. The top AMD implementation is [Require](http://requirejs.org/).
   * [Angular dependency injection](http://docs.angularjs.org/guide/di) follows a pattern extremely similar to (and likely influenced by) AMD.
 * [Promises](http://howtonode.org/promises) - an industry standard pattern for dealing with asynchronous control flow. The top Promises implementation is [Q](https://github.com/kriskowal/q). [Async.js](https://github.com/caolan/async) is another great asynchronous control flow library, from the [Node.js](http://nodejs.org/) community.
   * Angular includes a Q-like API with the [$q service](http://docs.angularjs.org/api/ng/service/$q)
 * [Handlebars](http://handlebarsjs.com/) - one of the top templating libraries. Handlebars is derived from [Mustache](http://mustache.github.io/), which provides logic-less templates.
   * [Angular templates](http://docs.angularjs.org/guide/templates) use syntax similar to Handlebars.

## Examples

 * Illustrate Angular features in small increments
 * Meant to be as simple as possible (e.g. no [Bootstrap](http://getbootstrap.com/) or [Grunt](http://gruntjs.com/))
 * Check out the [example viewer](http://curran.github.io/screencasts/introToAngular/exampleViewer) (which is itself an [Angular application](https://github.com/curran/screencasts/tree/gh-pages/introToAngular/exampleViewer)).

<%= examples %>

## Angular Learning Resources

It is straightforward to teach yourself about Angular, as there are so many learning resources on the Web.

### Birds-eye-view:

 * [Learn Angularjs This Weekend](http://joelhooks.com/blog/2013/08/03/learn-angularjs-in-a-weekend/) - Advice on which resources to use for getting up to speed on Anguar.
 * [A Better Way to Learn AngularJS](http://www.thinkster.io/angularjs/GtaQ0oMGIl/a-better-way-to-learn-angularjs) - A great collection of links to resources for learning Angular.
 * [AngularJS-Learning](https://github.com/jmcunningham/AngularJS-Learning) - A kithen sink of links to Angular learning resources.

### Introductory tutorials and guides:

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
 * [An Introduction to AngularJS Forms Validation](https://www.youtube.com/watch?v=PxMwW1QBEro)

### Design and implementation of Angular:

 * [Re-Imagining the Browser with AngularJS](https://www.youtube.com/watch?v=ersEb9vTX3Y)
   * Talk by Miško Hevery, creator of Angular
   * Discusses the high-level goals of Angular
 * [Bringing Angular Apps to Life with Animation by Miško Hevery](https://www.youtube.com/watch?v=cF_JsA9KsDM)
 * [Google I/O 2013 - Design Decisions in AngularJS](https://www.youtube.com/watch?v=HCR7i5F5L8c)
 * ["Writing Directives" talk by Misko Hevery](https://www.youtube.com/watch?v=WqmeI5fZcho&sns=em)

### Angular and D3

 * [AngularJS & D3: Directives for Visualizations - YouTube](https://www.youtube.com/watch?v=aqHBLS_6gF8)
 * [D3 on AngularJS (ng-newsletter)](http://www.ng-newsletter.com/posts/d3-on-angular.html)
 * [Dynamic Visualizations with AngularJS and D3 / Protractor E2E testing for AngularJS](https://www.youtube.com/watch?v=BvAeabvZ61o)
 * [Replacing (most of) d3.js with pure SVG + AngularJS](http://alexandros.resin.io/angular-d3-svg/)
 * [Diagramme in AngularJS mit D3/nvd3](http://angularjs.de/blog/angularjs-directives-d3-nvd3)
 * [Using the D3.js Visualization Library with AngularJS](http://briantford.com/blog/angular-d3.html)
 * [Angularjs-nvd3-directives (GitHub)](http://cmaurer.github.io/angularjs-nvd3-directives/)
 * [angular-d3-directives(GitHub](https://github.com/robinboehm/angular-d3-directives)

by [Curran Kelleher](https://github.com/curran/portfolio) March 2014
