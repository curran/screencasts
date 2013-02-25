(function(){
  var canv = document.getElementById('myCanvas'),
      c = canv.getContext('2d'),
      gravity = 0.1,
      dampening = 0.99,
      pullStrength = 0.01,
      circles = [ ],
      i, numCircles = 10,
      repulsion = 1;

  for(i = 0; i < numCircles; i++){
    circles.push({
      x: Math.random() * canv.width,
      y: Math.random() * canv.height,
      // (vx, vy) = Velocity vector
      vx: 0,
      vy: 0,
      radius: 20
    });
  }


  function executeFrame(){
    var i, j, circle;
    for(i = 0; i < numCircles; i++){
      circle = circles[i];

      // Increment location by velocity
      circle.x += circle.vx;
      circle.y += circle.vy;

      // Increment Gravity
      circle.vy += gravity;

      // Slow it down
      circle.vy *= dampening;
      circle.vx *= dampening;

      // Bounce
      // bottom
      if(circle.y + circle.radius > canv.height){
        circle.y = canv.height - circle.radius;
        circle.vy = -Math.abs(circle.vy);
      }
      // right
      if(circle.x + circle.radius > canv.width){
        circle.x = canv.width - circle.radius;
        circle.vx = -Math.abs(circle.vx);
      }

      // Collision
      for(j = i+1; j < numCircles; j++){
        collide(circle, circles[j]);
      }


      c.beginPath();
      c.arc(circle.x, circle.y, circle.radius,
            0, 2*Math.PI);
      c.closePath();
      c.fillStyle = 'black';
      c.fill();

    }

    c.fillStyle = 'rgba(255,255,255,0.05)';
    c.fillRect(0, 0, canv.width, canv.height);

    executeInteraction();

    requestAnimFrame(executeFrame);
  }

  function collide(a, b){
    var dx = b.x - a.x,
        dy = b.y - a.y,
        d = Math.sqrt(dx*dx + dy*dy),
        ux = dx / d,
        uy = dy / d;

    if(d < a.radius + b.radius){
      a.vx -= ux * repulsion;
      a.vy -= uy * repulsion;
      b.vx += ux * repulsion;
      b.vy += uy * repulsion;
    }
  }

  var mouseDown = false,
      mouseX, mouseY;
  canv.addEventListener('mousedown', function(e){
    mouseDown = true;
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  canv.addEventListener('mouseup', function(e){
    mouseDown = false;
  });
  canv.addEventListener('mousemove', function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  function executeInteraction(){
    if(mouseDown){
      var dx, dy, i, circle;

      for(i = 0; i < numCircles; i++){
        circle = circles[i];
        dx = mouseX - circle.x;
        dy = mouseY - circle.y;
        circle.vx += dx * pullStrength;
        circle.vy += dy * pullStrength;
      }
    }

  }

  // Start animation
  executeFrame();

})();

