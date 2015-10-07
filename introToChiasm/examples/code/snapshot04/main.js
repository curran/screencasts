var Model = require("model-js");
var d3 = require("d3");
var my = new Model();

my.when("count", function (count){
  d3.select("#output").text(count);
});

my.count = 0;
setInterval(function (){
  my.count++;
}, 1000);
