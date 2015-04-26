# Introduction to D3

Streaming live at [this Google Hangout](https://plus.google.com/hangouts/_/g2adpgfm4tkrdvwq3qgcbanmfaa).

[Slides](https://docs.google.com/presentation/d/1QI8ztO-2baoW8SToaPTlSu24w8dvqvrEMD-xVpI3LmE/pub?start=false&loop=false&delayms=3000)

This tutorial covers fundamental [D3.js](http://d3js.org/) concepts from the ground up, and introduces basic visualizations.

 * technologies leveraged by D3
   * HTML
   * SVG
   * CSS
 * fundamental D3 concepts
   * selections
   * scales
   * axes
   * graphical elements
     * rectangles
     * circles
     * lines
 * visualizations
   * bar chart
   * scatter plot
   * line chart

## Examples

Check out the [Example Viewer](http://curran.github.io/screencasts/introToD3/examples/viewer/#/). Use left and right arrow keys to navigate.

 * [Example 1](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot01) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot01) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot01/index.html)) - Hello HTML
 * [Example 2](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot02) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot02) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot02/index.html)) - Hello SVG
 * [Example 3](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot03) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot03) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot03/index.html)) - Default SVG size
 * [Example 4](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot04) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot04) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot04/index.html)) - Specifying SVG dimensions
 * [Example 5](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot05) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot05) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot05/index.html)) - Adding (x, y) coordinates
 * [Example 6](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot06) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot06) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot06/index.html)) - Adding color
 * [Example 7](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot07) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot07) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot07/index.html)) - rgb() color syntax
 * [Example 8](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot08) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot08) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot08/index.html)) - Transparency with rgba()
 * [Example 9](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot09) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot09) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot09/index.html)) - Hex color codes
 * [Example 10](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot10) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot10) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot10/index.html)) - Drawing outlines with stroke
 * [Example 11](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot11) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot11) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot11/index.html)) - Controlling stroke width
 * [Example 12](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot12) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot12) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot12/index.html)) - Using fill=none
 * [Example 13](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot13) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot13) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot13/index.html)) - Drawing a circle
 * [Example 14](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot14) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot14) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot14/index.html)) - cx and cy
 * [Example 15](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot15) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot15) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot15/index.html)) - stroke and width
 * [Example 16](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot16) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot16) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot16/index.html)) - drawing a line
 * [Example 17](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot17) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot17) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot17/index.html)) - drawing several lines
 * [Example 18](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot18) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot18) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot18/index.html)) - using SVG paths
 * [Example 19](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot19) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot19) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot19/index.html)) - drawing several lines with a path
 * [Example 20](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot20) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot20) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot20/index.html)) - filling a path
 * [Example 21](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot21) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot21) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot21/index.html)) - closing a path
 * [Example 22](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot22) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot22) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot22/index.html)) - pseudo scatterplot
 * [Example 23](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot23) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot23) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot23/index.html)) - the g element
 * [Example 24](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot24) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot24) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot24/index.html)) - pseudo bar chart
 * [Example 25](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot25) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot25) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot25/index.html)) - pseudo line chart
 * [Example 26](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot26) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot26) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot26/index.html)) - SVG Text
 * [Example 27](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot27) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot27) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot27/index.html)) - Styling SVG Text with CSS
 * [Example 28](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot28) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot28) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot28/index.html)) - CSS class selector syntax
 * [Example 29](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot29) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot29) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot29/index.html)) - multiple SVG text elements
 * [Example 30](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot30) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot30) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot30/index.html)) - font fill and stroke
 * [Example 31](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot31) - ([run it!](http://curran.github.io/screencasts/navigation/d3-101/04-intro-to-D3/examples/code/snapshot31) | [index.html](https://github.com/curran/screencasts/tree/gh-pages/d3-101/04-intro-to-D3/examples/code/snapshot31/index.html)) - Using Google Fonts

Feel free to use and modify this presentation framework for your own presentations! MIT License.

By [Curran Kelleher](https://github.com/curran/portfolio) April 2015
