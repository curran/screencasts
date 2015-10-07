var Model = require("model-js");
var d3 = require("d3");
var Chiasm = require("chiasm");
var ChiasmComponent = require("chiasm-component");
var ChiasmLayout = require("chiasm-layout");

function MyComponent(){

  var my = new ChiasmComponent({
    color: "green"
  });

  my.el = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  var svg = d3.select(my.el);
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

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.myPlugin = MyComponent;
  chiasm.plugins.layout = ChiasmLayout;

  chiasm.setConfig({
    "myComponent": {
      "plugin": "myPlugin",
      "state": {
        "color": "blue"
      }
    },
    "myLayout": {
      "plugin": "layout",
      "state": {
        "containerSelector": "#container",
        "layout": "myComponent"
      }
    }
  });
}
myApp();
