// Create a scale, but don't set the domain until the data is known.
var x = d3.scale.linear()
    .range([0, width]);

// Load the data.
d3.json("data.json", function(data) {

  // Now we can compute the domain and update the scale.
  x.domain([0, d3.max(data)]);

  // And here's where we'd visualize the data…
});
