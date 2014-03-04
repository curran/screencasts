Getting started with routing using ngRoute.

Inspired by [step 7 of the official Angular tutorial](http://docs.angularjs.org/tutorial/step_07).

See also [Angular docs for $routeProvider](http://docs.angularjs.org/api/ngRoute/provider/$routeProvider).

What has changed:

 * An additional script tag has been added for `angular-route`, which defines the `ngRoute` module.
 * The `ngRoute` module was added as a dependency to `countryApp`, which provides the `$routeProvider` API.
 * The `config()` call sets up the routes using inline strings as templates.
 * A placeholder `CountryDetailCtrl` was added.
 * A div with the `ng-view` directive was added to the body. This is where the route provider injects content rendered from the template associated with the current route.
