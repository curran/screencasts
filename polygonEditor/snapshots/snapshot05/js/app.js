require(['app/model', 'app/view', 'app/controller', 'app/Vertex'], 
    function(model, view, controller, Vertex){

  model.add(new Vertex({
    x: 100,
    y: 100
  }));
});
