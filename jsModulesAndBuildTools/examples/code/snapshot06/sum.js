var reduce = require("./reduce");
var add = require("./add");

function sum(list){
  return reduce(list, add, 0);
};

module.exports = sum;
