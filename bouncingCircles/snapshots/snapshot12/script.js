(function(){
  var canv = document.getElementById('myCanvas'),
      c = canv.getContext('2d'),
      gravity = 0.1,
      dampening = 0.99,
      pullStrength = 0.01;
      
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

    // Increment Gravity
    circle.vy += gravity;

    // Slow it down
    circle.vy *= dampening;
    circle.vx *= dampening;

    // Bounce
    if(circle.y + circle.radius > canv.height){
      circle.y = canv.height - circle.radius;
      circle.vy = -Math.abs(circle.vy);
    }

    c.clearRect(0, 0, canv.width, canv.height);

    c.beginPath();
    c.arc(circle.x, circle.y, circle.radius,
          0, 2*Math.PI);
    c.closePath();
    c.fill();

    requestAnimFrame(executeFrame);
  }

  canv.addEventListener('mousedown', function(e){
    var dx = e.pageX - circle.x,
        dy = e.pageY - circle.y;

    circle.vx += dx * pullStrength;
    circle.vy += dy * pullStrength;

  });

  // Start animation
  executeFrame();

})();

