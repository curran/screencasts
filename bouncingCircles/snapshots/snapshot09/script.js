(function(){
  var canv = document.getElementById('myCanvas'),
      c = canv.getContext('2d'),
      gravity = 0.1;
      
  var circle = {
    x: 50,
    y: 50,
    // (vx, vy) = Velocity vector
    vx: 0,
    vy: 0,
    radius: 20
  };


  function executeFrame(){
    // Increment location by velocity
    circle.x += circle.vx;
    circle.y += circle.vy;

    circle.vy += gravity;

    c.clearRect(0, 0, canv.width, canv.height);

    c.beginPath();
    c.arc(circle.x, circle.y, circle.radius,
          0, 2*Math.PI);
    c.closePath();
    c.fill();

    requestAnimFrame(executeFrame);
  }

  // Start animation
  executeFrame();

})();

