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

function SimpleLayout(chiasm){

  var my = new Model({
    publicProperties: ["containerSelector", "componentAlias"],
    containerSelector: Model.None,
    componentAlias: Model.None
  });

  my.when(["containerSelector", "componentAlias"], function (selector, alias){
    if(selector !== Model.None && alias !== Model.None){
      chiasm.getComponent(alias).then(function (component){
        var containerDiv = document.querySelector(selector);
        containerDiv.appendChild(component.el);

        function updateBox(){
          component.box = {
            width:  containerDiv.clientWidth,
            height: containerDiv.clientHeight
          };
        }
        updateBox();
        window.addEventListener("resize", updateBox);
      });
    }
  });

  return my;
}

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.myPlugin = MyComponent;
  chiasm.plugins.simpleLayout = SimpleLayout;

  chiasm.setConfig({
    "myComponent": {
      "plugin": "myPlugin",
      "state": {
        "color": "blue"
      }
    },
    "myLayout": {
      "plugin": "simpleLayout",
      "state": {
        "containerSelector": "#container",
        "componentAlias": "myComponent"
      }
    }
  });
}
myApp();
