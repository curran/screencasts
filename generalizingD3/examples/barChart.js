function BarChart(div){
  var margin = {top: 20, right: 20, bottom: 30, left: 40},
      x = d3.scale.ordinal(),
      y = d3.scale.linear(),
      xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom"),
      yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10, "%"),
      svg = d3.select(div).append("svg"),
      g = svg.append("g"),
      xAxisG = g.append("g")
        .attr("class", "x axis"),
      yAxisG = g.append("g")
        .attr("class", "y axis"),
      yAxisLabel = yAxisG.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", ".71em")
        .style("text-anchor", "end")
        .text("Frequency"),

      model = new Backbone.Model();

  // The following code depends on "size" from the model.
  model.on('change:size', _.debounce(function () {
    var size = model.get('size'),
        width,
        height;

    if(size){
      width = size.width - margin.left - margin.right,
      height = size.height - margin.top - margin.bottom,


      svg.attr("width", outerWidth)
         .attr("height", outerHeight);

      g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    }
  }, 0));

  // The following code depends on "size" and "data" from the model
  model.on('change:size change:data', _.debounce(function (){
    var size = model.get('size'),
        data = model.get('data'),
        width,
        height,
        bars;

    console.log('Responding to "change:size change:data"');
    console.log('  size = ' + size);
    console.log('  data = ' + data);

    if(size && data){
      console.log('Updating visualization');

      // TODO eliminate this duplicated code
      width = size.width - margin.left - margin.right,
      height = size.height - margin.top - margin.bottom,

      x.domain(data.map(function(d) { return d.letter; }));
      y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
      x.rangeRoundBands([0, width], .1);
      y.range([height, 0]);

      xAxisG
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis);

      yAxisG.call(yAxis);

      // Create the D3 selection with data binding
      bars = g.selectAll(".bar").data(data);

      // Enter: stuff that happens only once when DOM elements are created.
      // Should be independent of data and visualization size.
      bars.enter().append("rect").attr("class", "bar");

      // Update: stuff that may happen many times,
      // and may change based on the data or visualization size.
      bars.attr("x", function(d) { return x(d.letter); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d.frequency); })
          .attr("height", function(d) { return height - y(d.frequency); });

      // Exit: stuff that happens when the number of data elements decreases
      // and there are extra DOM elements left over. In this case, just remove them.
      bars.exit().remove();
    }
  }, 0));

  return model;
}
