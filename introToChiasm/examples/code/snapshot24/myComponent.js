var ChiasmComponent = require("chiasm-component");
var mixins = require("./mixins");

function MyComponent(){

  var my = new ChiasmComponent();
  var svg = d3.select(my.initSVG());
  var g = mixins.marginConvention(my, svg);

  var xAxisG = mixins.xAxis(my, g);
  mixins.xScaleLinear(my);
  mixins.xAxisLabel(my, xAxisG);

  var yAxisG = mixins.yAxis(my, g);
  mixins.yScaleLinear(my);
  mixins.yAxisLabel(my, yAxisG);
  
  return my;
}

module.exports = MyComponent;
