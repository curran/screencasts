var Chiasm = require("chiasm");

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.layout = require("chiasm-layout");
  chiasm.plugins.links = require("chiasm-links");
  chiasm.plugins.dsvDataset = require("chiasm-dsv-dataset");

  chiasm.plugins.myPlugin = require("./myComponent");

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
        "xAxisLabelText": "Time",
        "xColumn": "timestamp",
        "yAxisLabelText": "Temperature",
        "yAxisLabelTextOffset": 40,
        "yColumn": "temperature",
        "margin": { top: 20, right: 20, bottom: 50, left: 70}
      }
    },
    "myDataLoader": {
      "plugin": "dsvDataset",
      "state": {
        "path": "lineChartData"
      }
    },
    "myLinks": {
      "plugin": "links",
      "state": {
        "bindings": ["myDataLoader.data -> myComponent.data"]
      }
    }
  });
}
myApp();
