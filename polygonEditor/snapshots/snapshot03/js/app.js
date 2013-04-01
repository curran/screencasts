require(['app/model', 'app/view', 'app/Vertex'], 
    function(model, view, Vertex){

  model.add(new Vertex({
    x: 100,
    y: 100
  }));

  setTimeout(function(){
    model.add(new Vertex({
      x: 200,
      y: 200
    }));
  }, 1000 );
});
