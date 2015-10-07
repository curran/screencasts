var ChiasmComponent = require("chiasm-component");
var Model = require("model-js");
var d3 = require("d3");

function backgroundRect(my, svg){
  my.addPublicProperty("backgroundRectColor", "white");
  var rect = svg.append("rect");

  my.when("box", function (box){
    rect.attr("width", box.width).attr("height", box.height);
  });

  my.when("backgroundRectColor", function (color){
    rect.attr("fill", color);
  });

  rect.on("click", function (){
    var r = function (){ return Math.floor(Math.random() * 256); };
    my.backgroundRectColor = "rgb(" + r() + "," + r() + "," + r() + ")";
  });
}

function marginConvention(my, svg){
  var g = svg.append("g");

  my.addPublicProperty("margin", {top: 20, right: 20, bottom: 50, left: 20});

  my.when(["box", "margin"], function (box, margin){
    my.width = box.width - margin.left - margin.right;
    my.height = box.height - margin.top - margin.bottom;
    g.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  });

  return g;
}

function marginRect(my, g){
  my.addPublicProperty("marginRectColor", "lightgray");
  var rect = g.append("rect");

  my.when(["width", "height"], function (width, height){
    rect.attr("width", width).attr("height", height);
  });

  my.when("marginRectColor", function (color){
    rect.attr("fill", color);
  });

  rect.on("click", function (){
    var r = function (){ return Math.floor(Math.random() * 256); };
    my.marginRectColor = "rgb(" + r() + "," + r() + "," + r() + ")";
  });
}

function xScaleLinear(my){
  var scale = d3.scale.linear();
  my.addPublicProperty("xScaleDomain", [0, 1000]);
  my.when(["xScaleDomain", "width"], function (xScaleDomain, width){
    my.xScale = scale.domain(xScaleDomain).range([0, width]);
  });
}

function xAxis(my, g){
  var axisG = g.append("g").attr("class", "x axis");
  var axis = d3.svg.axis();

  my.addPublicProperty("xAxisTickDensity", 70);

  my.when(["xScale", "xAxisTickDensity", "width"], function (xScale, xAxisTickDensity, width){
    axis.scale(xScale).ticks(width / xAxisTickDensity)
    axisG.call(axis);
  });

  my.when("height", function (height){
    axisG.attr("transform", "translate(0," + height + ")");
  });

  return axisG;
}

function xAxisLabel(my, xAxisG){
  var label = xAxisG.append("text").attr("class", "x axis-label");
  my.addPublicProperty("xAxisLabelText", "X Axis Label");
  my.addPublicProperty("xAxisLabelTextOffset", 43);

  my.when("xAxisLabelText", function (xAxisLabelText){
    label.text(xAxisLabelText);
  });

  my.when("xAxisLabelTextOffset", function (xAxisLabelTextOffset){
    label.attr("y", xAxisLabelTextOffset);
  });

  my.when("width", function (width){
    label.attr("x", width / 2);
  });
}

function MyComponent(){

  var my = new ChiasmComponent();
  var svg = d3.select(my.initSVG());
  backgroundRect(my, svg);
  var g = marginConvention(my, svg);
  marginRect(my, g);

  xScaleLinear(my);

  var xAxisG = xAxis(my, g);
  xAxisLabel(my, xAxisG);
  
  return my;
}

module.exports = MyComponent;
