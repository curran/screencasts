define(['app/Vertex'], function(Vertex){
  var Vertices = Backbone.Collection.extend({
    model: Vertex
  });
  return new Vertices();
});
