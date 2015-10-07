var Model = require("model-js");
var d3 = require("d3");
var Chiasm = require("chiasm");

function MyComponent(){

  var my = new Model({
    publicProperties: ["color"],
    color: "green"
  });

  my.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var svg = d3.select(my.el);
  var rect = svg.append("rect");

  my.when("box", function (box){
    svg .attr("width", box.width).attr("height", box.height);
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

var chiasm = new Chiasm();

chiasm.plugins.myPlugin = MyComponent;

chiasm.setConfig({
  "myComponent": {
    "plugin": "myPlugin",
    "state": {
      "color": "blue"
    }
  }
});

chiasm.getComponent("myComponent").then(function (myComponent){

  var containerDiv = document.getElementById("container");
  containerDiv.appendChild(myComponent.el);

  function updateBox(){
    myComponent.box = {
      width:  containerDiv.clientWidth,
      height: containerDiv.clientHeight
    };
  }

  updateBox();
  window.addEventListener("resize", updateBox);
});
