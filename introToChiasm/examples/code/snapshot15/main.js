var Model = require("model-js");
var d3 = require("d3");
var Chiasm = require("chiasm");
var ChiasmComponent = require("chiasm-component");
var ChiasmLayout = require("chiasm-layout");

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

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.myPlugin = MyComponent;
  chiasm.plugins.layout = ChiasmLayout;

  chiasm.setConfig({
    "layout": {
      "plugin": "layout",
      "state": {
        "containerSelector": "#container",
        "layout": {
          "orientation": "vertical",
          "children": [
            "A", {
              "orientation": "horizontal",
              "children": [
                "B", {
                  "orientation": "vertical",
                  "children": [ "C", "D" ]
                },
                "E"
              ]
            }
          ]
        }
      }
    },
    "A": { "plugin": "myPlugin" },
    "B": {
      "plugin": "myPlugin",
      "state": { "color": "#a8f0ff" }
    },
    "C": {
      "plugin": "myPlugin",
      "state": { "color": "#ffe2a8" }
    },
    "D": {
      "plugin": "myPlugin",
      "state": { "color": "#99e2c8" }
    },
    "E": {
      "plugin": "myPlugin",
      "state": { "color": "#a8ffd0" }
    }
  });
}
myApp();
