define(["d3", "model"], function (d3, Model) {
  return function BarChart () {
    var model = Model();

    // Issue: hard-coded visualization size and margin.
    var margin = {top: 20, right: 20, bottom: 30, left: 40},
        width = 960 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

    var xAxis = d3.svg.axis()
        .orient("bottom");

    var yAxis = d3.svg.axis()
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

    model.when(["data", "xAttribute"], function (data, xAttribute) {
      model.xScale = d3.scale.ordinal()
        .rangeRoundBands([0, width], .1)
        .domain(data.map(function(d) { return d[xAttribute]; }));
    });
    model.when(["data", "yAttribute"], function (data, yAttribute) {
      model.yScale = d3.scale.linear()
        .range([height, 0])
        .domain([0, d3.max(data, function(d) { return d[yAttribute]; })]);
    });
    model.when(["data", "xAttribute", "yAttribute", "xScale", "yScale"],
        function (data, xAttribute, yAttribute, xScale, yScale) {

      xAxis.scale(xScale)
      xAxisG.call(xAxis);

      yAxis.scale(yScale)
      yAxisG.call(yAxis);

      var bars = g.selectAll(".bar").data(data);

      bars.enter().append("rect").attr("class", "bar");

      bars.attr("x", function(d) { return xScale(d[xAttribute]); })
        .attr("width", xScale.rangeBand())
        .attr("y", function(d) { return yScale(d[yAttribute]); })
        .attr("height", function(d) { return height - yScale(d[yAttribute]); });

      bars.exit().remove();
    });

    model.when('yAxisLabel', yAxisText.text, yAxisText);

    return model;
  };
});
