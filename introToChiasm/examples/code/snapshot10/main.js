var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){
  var my = new Model({
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
    my.color = randomColor();
  });
  function randomColor(){
    return "rgb(" + rand() + "," + rand() + "," + rand() + ")";
  }
  function rand(){
    return Math.floor(Math.random() * 256);
  }
  
  return my;
}

var myComponent = new MyComponent();

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
