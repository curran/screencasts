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
        "xAxisLabelText": "Name",
        "xColumn": "name",
        "yAxisLabelText": "Amount",
        "yColumn": "amount"
      }
    },
    "myDataLoader": {
      "plugin": "dsvDataset",
      "state": {
        "path": "barChartData"
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
