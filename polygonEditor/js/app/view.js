define(['app/model'], function(model){
  var c = canvas.getContext('2d'),
      radius = 20;

  function render(){
    model.each(renderVertex);
  }

  function renderVertex(vertex){
    var x = vertex.get('x'),
        y = vertex.get('y');
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }

  model.on('add', render);
  model.on('change', render);
});
