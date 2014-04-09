Backbone.Model.prototype.when = function(dependencies, func, thisArg){
  var model = this;
  if(!(dependencies instanceof Array)) {
    dependencies = [dependencies];
  }
  var callFunc = _.debounce(function () {
    var args = dependencies.map(model.get, model);
    if(!_.some(args, _.isUndefined)){
      func.apply(thisArg, args);
    }
  }, 0);
  callFunc();
  dependencies.forEach(function (property) {
    model.on('change:' + property, callFunc);
  });
}
