define(['app/model'], function(model){
  var c = canvas.getContext('2d');

  function render(){
    var prev = model.last();
    c.clearRect(0, 0, canvas.width, canvas.height);
    model.each(function(curr){
      if(prev){
        c.beginPath();
        c.moveTo(prev.get('x'), prev.get('y'));
        c.lineTo(curr.get('x'), curr.get('y'));
        c.closePath();
        c.stroke();
      }
      prev = curr;
    });
    model.each(renderVertex);
  }

  function renderVertex(vertex){
    var x = vertex.get('x'),
        y = vertex.get('y'),
        radius = vertex.radius;
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }

  model.on('add', render);
  model.on('remove', render);
  model.on('change', render);
});
