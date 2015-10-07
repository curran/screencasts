var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){

  var my = new Model();
  my.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");

  var svg = d3.select(my.el);
  var rect = svg.append("rect");

  my.when("box", function (box){

    svg
      .attr("width", box.width)
      .attr("height", box.height);

    rect
      .attr("width", box.width)
      .attr("height", box.height);

  });
  
  return my;
}

var myComponent = new MyComponent();

myComponent.box = {
  width: 200,
  height: 50
};

document.getElementById("container").appendChild(myComponent.el);
