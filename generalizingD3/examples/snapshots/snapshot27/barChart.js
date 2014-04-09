function BarChart(div){
  var x = d3.scale.ordinal(),
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
        .style("text-anchor", "end");

      model = new Backbone.Model({
        margin: {top: 20, right: 20, bottom: 30, left: 40},
        yLabel: "Frequency"
      });
 
  function when(dependencies, func, thisArg){
    var callFunc = _.debounce(function () {
      var args = dependencies.map(model.get, model);
      if(!_.some(args, _.isUndefined)){
        func.apply(thisArg, args);
      }
    }, 0);
    callFunc();
    dependencies.forEach(function (property) {
      model.on('change:' + property, callFunc);
    });
  }

  when(['yLabel'], yAxisLabel.text, yAxisLabel);

  when(['margin'], function (margin) {
    g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  });

  when(['size'], function (size) {
    svg.attr("width", size.width)
       .attr("height", size.height);
  });

  when(['size', 'margin'], function (size, margin) {
    model.set('width', size.width - margin.left - margin.right);
    model.set('height', size.height - margin.top - margin.bottom);
  });

  when(['height'], function (height) {
    xAxisG.attr("transform", "translate(0," + height + ")");
  });

  when(['width', 'height', 'data'], function (width, height, data) {
    var bars;

    x.domain(data.map(function(d) { return d.letter; }));
    y.domain([0, d3.max(data, function(d) { return d.frequency; })]);
    x.rangeRoundBands([0, width], .1);
    y.range([height, 0]);

    xAxisG.call(xAxis);
    yAxisG.call(yAxis);

    bars = g.selectAll(".bar").data(data);
    bars.enter().append("rect").attr("class", "bar");
    bars.attr("x", function(d) { return x(d.letter); })
        .attr("width", x.rangeBand())
        .attr("y", function(d) { return y(d.frequency); })
        .attr("height", function(d) { return height - y(d.frequency); });
    bars.exit().remove();
  });

  return model;
}
