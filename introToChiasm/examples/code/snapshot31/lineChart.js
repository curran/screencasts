var Model = require("model-js");
var ChiasmComponent = require("chiasm-component");
var mixins = require("./mixins");

function LineChart(){

  var my = new ChiasmComponent({
    xColumn: Model.None,
    yColumn: Model.None,
    lineStroke: "black",
    lineStrokeWidth: "1px"
  });

  var svg = d3.select(my.initSVG());
  var g = mixins.marginConvention(my, svg);

  var line = d3.svg.line().interpolate("basis");
  var path = g.append("path").attr("fill", "none");

  var xAxisG = mixins.xAxis(my, g);
  mixins.xScaleTime(my);
  mixins.xAxisLabel(my, xAxisG);

  var yAxisG = mixins.yAxis(my, g);
  mixins.yScaleLinear(my);
  mixins.yAxisLabel(my, yAxisG);

  my.when(["data", "xColumn"], function (data, xColumn){
    if(xColumn !== Model.None){
      my.xScaleDomain = d3.extent(data, function (d) { return d[xColumn]; });
    }
  });
  
  my.when(["data", "yColumn"], function (data, yColumn){
    if(yColumn !== Model.None){
      my.yScaleDomain = d3.extent(data, function (d) { return d[yColumn]; });
    }
  });

  my.when(["data", "xScale", "xColumn", "yScale", "yColumn"],
      function (data, xScale, xColumn, yScale, yColumn) {

    line
      .x(function(d) { return xScale(d[xColumn]); })
      .y(function(d) { return yScale(d[yColumn]); });

    path.attr("d", line(data));

  });

  my.when("lineStroke", function (lineStroke){
    path.attr("stroke", lineStroke);
  });

  my.when("lineStrokeWidth", function (lineStrokeWidth){
    path.attr("stroke-width", lineStrokeWidth);
  });

  return my;
}

module.exports = LineChart;
