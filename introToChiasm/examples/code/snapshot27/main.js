var Chiasm = require("chiasm");
var d3 = require("d3");

var ChiasmComponent = require("chiasm-component");
var Model = require("model-js");

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.myPlugin = require("./myComponent");
  chiasm.plugins.layout = require("chiasm-layout");

  chiasm.plugins.dataLoader = function DataLoader (){

    var my = ChiasmComponent({
      path: Model.None
    });

    my.when("path", function (path){
      if(path !== Model.None){
        d3.json(path + ".json", function(error, schema) {

          var numericColumns = schema.columns.filter(function (column){
            return column.type === "number";
          });

          var type = function (d){
            numericColumns.forEach(function (column){
              d[column.name] = +d[column.name];
            });
            return d;
          }

          d3.csv(path + ".csv", type, function(error, data) {
            my.data = data;
          });
        });
      }
    });

    return my;
  };

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
    },
    "myDataLoader": {
      "plugin": "dataLoader",
      "state": {
        "path": "scatterPlotData"
      }
    }
  });

  chiasm.getComponent("myDataLoader").then(function (myDataLoader){
    chiasm.getComponent("myComponent").then(function (myComponent){
      myDataLoader.when("data", function (data){
        myComponent.data = data;
      });
    });
  });
}
myApp();
