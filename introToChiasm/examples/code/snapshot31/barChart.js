var Model = require("model-js");
var ChiasmComponent = require("chiasm-component");
var mixins = require("./mixins");

function BarChart(){

  var my = new ChiasmComponent({
    xColumn: Model.None,
    yColumn: Model.None
  });

  var svg = d3.select(my.initSVG());
  var g = mixins.marginConvention(my, svg);

  var xAxisG = mixins.xAxis(my, g);
  mixins.xScaleOrdinal(my);
  mixins.xAxisLabel(my, xAxisG);

  var yAxisG = mixins.yAxis(my, g);
  mixins.yScaleLinear(my);
  mixins.yAxisLabel(my, yAxisG);

  my.when(["data", "xColumn"], function (data, xColumn){
    if(xColumn !== Model.None){
      my.xScaleDomain = data.map( function (d) { return d[xColumn]; });
    }
  });
  
  my.when(["data", "yColumn"], function (data, yColumn){
    if(yColumn !== Model.None){
      my.yScaleDomain = [0, d3.max(data, function (d) { return d[yColumn]; })];
    }
  });

  my.when(["data", "xScale", "xColumn", "yScale", "yColumn", "height"],
      function (data, xScale, xColumn, yScale, yColumn, height) {

    var bars = g.selectAll("rect").data(data);
      bars.enter().append("rect");
      bars.exit().remove();
      bars
        .attr("x", function (d){ return xScale(d[xColumn]); })
        .attr("width", xScale.rangeBand())
        .attr("y", function (d){ return yScale(d[yColumn]); })
        .attr("height", function (d){ return height - yScale(d[yColumn]); });

  });

  return my;
}

module.exports = BarChart;
