var ChiasmComponent = require("chiasm-component");
var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){

  var my = new ChiasmComponent({
    color: "white"
  });

  var svg = d3.select(my.initSVG());
  var rect = svg.append("rect");

  my.when("box", function (box){
    rect.attr("width", box.width).attr("height", box.height);
  });

  my.when("color", function (color){
    rect.attr("fill", color);
  });

  rect.on("click", function (){
    var r = function (){ return Math.floor(Math.random() * 256); };
    my.color = "rgb(" + r() + "," + r() + "," + r() + ")";
  });
  
  return my;
}

module.exports = MyComponent;
