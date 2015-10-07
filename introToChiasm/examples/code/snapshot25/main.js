var Chiasm = require("chiasm");
var d3 = require("d3");

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.myPlugin = require("./myComponent");
  chiasm.plugins.layout = require("chiasm-layout");

  chiasm.setConfig({
    "layout": {
      "plugin": "layout",
      "state": {
        "containerSelector": "#container",
        "layout": "myComponent"
      }
    },
    "myComponent": {
      "plugin": "myPlugin",
      "state": {
        "xAxisLabelText": "Sepal Length",
        "xColumn": "sepal_length",
        "yAxisLabelText": "Petal Length",
        "yColumn": "petal_length",
      }
    }
  });

  function type(d){
    d.sepal_length = +d.sepal_length;
    d.sepal_width  = +d.sepal_width;
    d.petal_length = +d.petal_length;
    d.petal_width  = +d.petal_width;
    return d;
  }

  d3.csv("scatterPlotData.csv", type, function (data){
    chiasm.getComponent("myComponent").then(function (myComponent){
      myComponent.data = data;
    });
  });
}
myApp();
