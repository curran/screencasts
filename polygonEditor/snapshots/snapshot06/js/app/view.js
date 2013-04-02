define(['app/model'], function(model){
  var c = canvas.getContext('2d');

  function render(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.beginPath();
    var prev = model.last();
    c.moveTo(prev.get('x'), prev.get('y'));
    model.each(function(vertex){
      c.lineTo(vertex.get('x'), vertex.get('y'));
    });
    c.closePath();
    c.fillStyle = 'gray';
    c.fill();
    c.stroke();
    model.each(renderVertex);
  }

  function renderVertex(vertex){
    var x = vertex.get('x'),
        y = vertex.get('y'),
        radius = vertex.radius;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.closePath();
    c.fillStyle = 'black';
    c.fill();
  }

  model.on('add', render);
  model.on('remove', render);
  model.on('change', render);
});
