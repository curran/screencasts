var Chiasm = require("chiasm");

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
    "myComponent": { "plugin": "myPlugin" }
  });
}
myApp();
