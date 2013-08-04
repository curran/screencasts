var c = canvas.getContext("2d"),
    xOffset = 0,
    yOffset = 0,
    w = canvas.width,
    h = canvas.height,
    gridSize = 30,
    n = gridSize,
    m = gridSize,
    margin = 10,
    time = 4.3,
    timeIncrement = 0.0002,
    animate = false;

function redraw(){
  var i, u, v, x, y, z, r, theta, q, speed,
      radius = 4;
  
  updateSizeIfNecessary();
  
  c.fillStyle = 'rgba(0,0,0,0.05)';
  c.fillRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < n; i++){
    for(j = 0; j < n; j++){
      u = i/(n-1);
      v = j/(m-1);
      theta = u * Math.PI * 2 + j;
      speed = 30 + (Math.sin(time)/2+0.5)*3 ;
      r = v - 0.2 + (Math.sin(time * speed)) * 0.5;
      
      x = (Math.sin(theta + time *i)) * r * w/2 + w/2;
      y = (Math.cos(theta + time * i)) * r * h/2 + h/2;
      
      q = 8 + Math.sin(time*80)*2;
      radius = (Math.sin(i + time*800)+1) * (n-j)/q;
      
      c.fillStyle = rgb(
        (Math.sin(j/4-time*200)/2+0.5)*255,
        (Math.sin(j/3-time*200)/2+0.5)*255,
        (Math.sin(j/5-time*200)/2+0.5)*100
      );
      
      drawCircle(x + xOffset, y + yOffset, radius);
    }
  }
  
  time += timeIncrement;
  
  if(animate){
    requestAnimationFrame(redraw);
  }
}

function updateSizeIfNecessary(){
  if(   canvas.width != window.innerWidth
     || canvas.height != window.innerHeight ){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    size = (canvas.width + canvas.height) / 2;
    w = size;
    h = size;
    
      xOffset = (canvas.width - size) / 2;
      yOffset = (canvas.height - size) / 2;
    
  }
}

function drawCircle(x, y, radius, arcAngle){
  arcAngle = arcAngle || Math.PI * 2;
  c.beginPath();
  c.arc(x, y, radius, 0, arcAngle);
  c.closePath();
  c.fill();
}
function rgb(r, g, b){
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return ["rgb(",r,",",g,",",b,")"].join("");
}

redraw();
canvas.addEventListener('mouseover', function(){
  animate = true;
  redraw();
});

canvas.addEventListener('mouseout', function(){
  animate = false;
});