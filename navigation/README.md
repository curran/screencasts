# Navigation for Single Page Applications

 * [YouTube Video - Navigation for Single Page Applications](https://www.youtube.com/watch?v=xN9QxPtK2LM&feature=youtu.be)
 * [Code Examples Viewer](http://curran.github.io/screencasts/navigation/examples/viewer/#/). Use left and right arrow keys to navigate.

This screencast covers how to construct a single page application with a tab-like navigation user interface and routing. A solution is introduced that uses only Web Standards (HTML, JavaScript, CSS, [The DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model)).

Even though libraries like Bootstrap, Backbone, Angular, Knockout and Ember do most of the work for you when implementing this kind of system, this screencast does not use any libraries at all. This emphasizes the core technogies, and provides a foundation for understanding how those libraries work.

Curran Kelleher October 2014

## Background

Single Page Application

 * One page only, no page loads.
 * Information fetched on the fly using [XMLHTTPRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
 * [AJAX](http://en.wikipedia.org/wiki/Ajax_(programming))
 * Related concept: "Server Side Push"
   * [Comet (programming) (also known as Reverse Ajax)](http://en.wikipedia.org/wiki/Comet_(programming)) long polling XMLHTTPRequest
   * [WebSocket](http://en.wikipedia.org/wiki/WebSocket) full-duplex communications channels over a single TCP connection
   * [Socket.io Node.js library for WebSocket](http://socket.io/)
 * [Fragment Identifier](http://en.wikipedia.org/wiki/Fragment_identifier) used for routing
   * `index.html#pageA`
   * `index.html#pageB`

Workflow Review

 * Editor / IDE
   * Needs to insert only spaces or only tabs
   * Mixed tabs and spaces causes editor-specific indentation errors
     * My Vim configuration uses 2 spaces for a single tab
     * [CodeMirror Visible Tabs Demo](http://codemirror.net/demo/visibletabs.html)
     * Chrome Source view uses 8 spaces to represent a tab
 * Git Command Line
   * Running on your machine in same directory as the editor
 * Local Server (e.g. [`python -m SimpleHTTPServer 8080`](http://www.pythonforbeginners.com/modules-in-python/how-to-use-simplehttpserver/))
   * This is far better than doing your development over an SSH connection
 * DOM Inspector ([`<p>Hello</p>`](http://jsbin.com/nuduzahoga/1/edit))
 * JavaScript Console ([`console.log("Hello");`](http://jsbin.com/luxiqonefa/1/edit))

Navigation Interfaces

 * [Wordpress Blogs](https://wordpress.com/fresh/)
   * [Citizen Sketcher](http://citizensketcher.wordpress.com/2014/10/23/in-which-holmes-creates-a-painting-in-the-rain-or-the-case-of-the-vanishing-castle/)
   * [The New West](http://thewpsa.wordpress.com/)
   * These use separate HTML pages
 * Approaches
   * Separate HTML pages
     * e.g. PHP applications
     * Used to be standard practice
     * Replaced by the "Single Page Application"
   * Single Page Application
     * A single page with no reload
     * Dynamic behavior added using JavaScript
     * Content fetched as needed
     * Routing using a [fragment identifier](http://en.wikipedia.org/wiki/Fragment_identifier)
       * Was the standard practice for a long time
       * Slowly being replaced by HTML5 History API
     * Routing using [HTML5 History API](http://diveintohtml5.info/history.html)
       * [CanIUse Report](http://caniuse.com/#search=history)
     * Caching

## Examples

Check out the [Example Viewer](http://curran.github.io/screencasts/navigation/examples/viewer/#/). Use left and right arrow keys to navigate.

 * [Example 1](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot01) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot01) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot01/index.html)) - Simple Navigation Links
 * [Example 2](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot02) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot02) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot02/index.html)) - Separate pages
 * [Example 3](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot03) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot03) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot03/index.html)) - Styling navigation links
 * [Example 4](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot04) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot04) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot04/index.html)) - Styling the entire site
 * [Example 5](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot05) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot05) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot05/index.html)) - Removing type=“text/css”
 * [Example 6](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot06) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot06) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot06/index.html)) - Styling the currently visited page link
 * [Example 7](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot07) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot07) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot07/index.html)) - Put some effort into CSS
 * [Example 8](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot08) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot08) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot08/index.html)) - Fragment identifier links
 * [Example 9](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot09) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot09) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot09/index.html)) - Accessing the fragment identifier
 * [Example 10](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot10) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot10) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot10/index.html)) - Dynamic content
 * [Example 11](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot11) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot11) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot11/index.html)) - Encapsulating navigation
 * [Example 12](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot12) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot12) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot12/index.html)) - Cleaning up
 * [Example 13](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot13) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot13) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot13/index.html)) - Defaulting to #home
 * [Example 14](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot14) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot14) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot14/index.html)) - Removing the # character
 * [Example 15](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot15) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot15) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot15/index.html)) - Encapsulating content retrieval
 * [Example 16](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot16) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot16) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot16/index.html)) - Adding content from a JS object
 * [Example 17](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot17) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot17) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot17/index.html)) - Setting the active class on links
 * [Example 18](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot18) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot18) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot18/index.html)) - Using a callback to fetch content
 * [Example 19](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot19) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot19) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot19/index.html)) - Fetching partial HTML files using AJAX
 * [Example 20](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot20) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot20) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot20/index.html)) - Encapsulating AJAX
 * [Example 21](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot21) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot21) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot21/index.html)) - Caching fetched partials
 * [Example 22](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot22) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot22) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot22/index.html)) - Cleaning up JavaScript
 * [Example 23](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot23) - ([run it!](http://curran.github.io/screencasts/navigation/examples/code/snapshot23) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/navigation/examples/code/snapshot23/index.html)) - Using jQuery

Feel free to use and modify for your own presentations! MIT License.

By Curran Kelleher October 2014
