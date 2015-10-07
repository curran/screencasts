var Model = require("model-js");
var d3 = require("d3");

function MyComponent(){
  var my = new Model();

  my.el = document.createElement("h1");
  my.count = 0;

  my.when("count", function (count){
    d3.select(my.el).text(count);
  });

  setInterval(function (){
    my.count++;
  }, 1000);
  
  return my;
}

var myComponent = new MyComponent();

document.getElementById("container").appendChild(myComponent.el);
