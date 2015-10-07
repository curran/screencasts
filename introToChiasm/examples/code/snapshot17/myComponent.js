var ChiasmComponent = require("chiasm-component");
var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){

  var my = new ChiasmComponent();
  var svg = d3.select(my.initSVG());


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

  
  return my;
}

module.exports = MyComponent;
