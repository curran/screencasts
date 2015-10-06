var Model = require("model-js");
var my = new Model();

my.when("count", function (count){
  document.getElementById("output").innerHTML = count;
});

my.count = 0;
setInterval(function (){
  my.count++;
}, 1000);
