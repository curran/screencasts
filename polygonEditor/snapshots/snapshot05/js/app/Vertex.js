define([], function(){
  var radius = 10;
  return Backbone.Model.extend({
    contains: function(x, y){
      var dx = x - this.get('x'),
          dy = y - this.get('y'),
          distance = Math.sqrt(dx*dx + dy*dy);
      return distance <= radius;
    },
    radius: radius
  });
});
