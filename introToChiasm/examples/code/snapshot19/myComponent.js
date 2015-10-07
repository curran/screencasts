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

  my.addPublicProperty("margin", {top: 20, right: 20, bottom: 20, left: 20});

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

function MyComponent(){

  var my = new ChiasmComponent();
  var svg = d3.select(my.initSVG());

  backgroundRect(my, svg);

  var g = marginConvention(my, svg);

  marginRect(my, g);
  
  return my;
}

module.exports = MyComponent;
