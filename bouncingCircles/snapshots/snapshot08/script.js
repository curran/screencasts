(function(){
  var canv = document.getElementById('myCanvas'),
      c = canv.getContext('2d');
      
  var circle = {
    x: 50,
    y: 50,
    radius: 20
  };


  function executeFrame(){
    circle.y += 0.1;

    c.clearRect(0, 0, canv.width, canv.height);

    c.beginPath();
    c.arc(circle.x, circle.y, circle.radius,
          0, 2*Math.PI);
    c.closePath();
    c.fill();

    if(circle.y < canv.height - circle.radius)
      requestAnimFrame(executeFrame);
  }

  // Start animation
  executeFrame();

})();

