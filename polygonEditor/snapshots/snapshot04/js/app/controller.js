define(['app/model', 'app/Vertex'], 
    function(model, Vertex){
  canvas.addEventListener('mousedown', function(e){
    model.add(new Vertex({
      x: e.pageX,
      y: e.pageY
    }));
  });
});
