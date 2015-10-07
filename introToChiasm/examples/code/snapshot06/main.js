var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){
  var my = new Model();

  my.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  var svg = d3.select(my.el)
    .attr("width", 200)
    .attr("height", 200);

  var rect = svg.append("rect")
    .attr("width", 200)
    .attr("height", 200);
  
  return my;
}

var myComponent = new MyComponent();

document.getElementById("container").appendChild(myComponent.el);
