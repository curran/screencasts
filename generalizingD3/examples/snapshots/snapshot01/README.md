Original D3 Bar Chart Example

Uses [D3 Margin Convention](http://bl.ocks.org/mbostock/3019563)

Common issues when adapting [D3 examples](https://github.com/mbostock/d3/wiki/Gallery) to production code:

 * Hard coded to a specific data set
 * Static hard coded size
 * Static visualization elements using only `enter`
 * Does not handle dynamic changes with `update` or `exit`
 * Data preprocessing mixed with visualization logic
 * Not using [single var pattern](http://stackoverflow.com/questions/15778527/why-single-var-is-good-in-javascript)
