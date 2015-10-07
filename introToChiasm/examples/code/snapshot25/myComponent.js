var Model = require("model-js");
var ChiasmComponent = require("chiasm-component");
var mixins = require("./mixins");

function MyComponent(){

  var my = new ChiasmComponent({
    xColumn: Model.None,
    yColumn: Model.None
  });

  var svg = d3.select(my.initSVG());
  var g = mixins.marginConvention(my, svg);

  var xAxisG = mixins.xAxis(my, g);
  mixins.xScaleLinear(my);
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

  return my;
}

module.exports = MyComponent;
