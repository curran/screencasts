var Chiasm = require("chiasm");

function myApp(){
  var chiasm = new Chiasm();

  chiasm.plugins.layout = require("chiasm-layout");
  chiasm.plugins.links = require("chiasm-links");
  chiasm.plugins.dsvDataset = require("chiasm-dsv-dataset");

  chiasm.plugins.lineChart = require("./lineChart");

  chiasm.setConfig({
    "layout": {
      "plugin": "layout",
      "state": {
        "containerSelector": "#container",
        "layout": {
          "orientation": "vertical",
          "children": [
            "focusLineChart",
            "contextLineChart"
          ]
        },
        "sizes": {
          "focusLineChart": {
            "size": 2
          }
        }
      }
    },
    "lineChartDataLoader": {
      "plugin": "dsvDataset",
      "state": {
        "path": "lineChartData"
      }
    },
    "focusLineChart": {
      "plugin": "lineChart",
      "state": {
        "xAxisLabelText": "Time",
        "xColumn": "timestamp",
        "yAxisLabelText": "Temperature",
        "yColumn": "temperature",
        "xAxisLabelTextOffset": 32,
        "yAxisLabelTextOffset": 30,
        "margin": { top: 0, right: 20, bottom: 35, left: 50 }
      }
    },
    "contextLineChart": {
      "plugin": "lineChart",
      "state": {
        "xAxisLabelText": "Time",
        "xColumn": "timestamp",
        "yAxisLabelText": "Temperature",
        "yColumn": "temperature",
        "xAxisLabelTextOffset": 32,
        "yAxisLabelTextOffset": 30,
        "margin": { top: 0, right: 20, bottom: 35, left: 50 },
        "brushEnabled": true
      }
    },
    "myLinks": {
      "plugin": "links",
      "state": {
        "bindings": [
          "lineChartDataLoader.data -> focusLineChart.data",
          "lineChartDataLoader.data -> contextLineChart.data",
          "contextLineChart.brushIntervalX -> focusLineChart.xScaleDomain"
        ]
      }
    }
  });
}
myApp();
