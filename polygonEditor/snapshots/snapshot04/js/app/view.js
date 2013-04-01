define(['app/model'], function(model){
  var c = canvas.getContext('2d'),
      radius = 10;

  function render(){
    var prev;
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
        y = vertex.get('y');
    c.beginPath();
    c.arc(x, y, radius, 0, 2 * Math.PI);
    c.closePath();
    c.fill();
  }

  model.on('add', render);
  model.on('change', render);
});
