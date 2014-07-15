define(["d3", "model"], function (d3, Model) {
  return function BarChart () {
    var model = Model();

    // Issue: hard-coded visualization size and margin.
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var x = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1);

    var y = d3.scale.linear()
        .range([height, 0]);

    var xAxis = d3.svg.axis()
        .scale(x)
        .orient("bottom");

    var yAxis = d3.svg.axis()
        .scale(y)
        .orient("left")
        .ticks(10, "%");

    // Issue: statically assigned SVG size precludes dynamic resize.
    var svg = d3.select("body").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom);

    var g = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var xAxisG = g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")");

    var yAxisG = g.append("g")
      .attr("class", "y axis");

    var yAxisText = yAxisG.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end");

    model.when(["data", "xAttribute", "yAttribute"],
        function (data, xAttribute, yAttribute) {

      x.domain(data.map(function(d) { return d[xAttribute]; }));
      y.domain([0, d3.max(data, function(d) { return d[yAttribute]; })]);

      xAxisG.call(xAxis);

      yAxisG.call(yAxis);

      var bars = g.selectAll(".bar").data(data);

      bars.enter().append("rect").attr("class", "bar");

      bars.attr("x", function(d) { return x(d[xAttribute]); })
          .attr("width", x.rangeBand())
          .attr("y", function(d) { return y(d[yAttribute]); })
          .attr("height", function(d) { return height - y(d[yAttribute]); });

      bars.exit().remove();
    });

    model.when('yAxisLabel', function (yAxisLabel) {
      yAxisText.text(yAxisLabel);
    });

    return model;
  };
});
