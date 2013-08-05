var c = canvas.getContext('2d');

var i, j, u, v, x, y,
    m = 30,
    n = 30,
    size = 3,
    t = 0;

function draw(){
  var sin = Math.sin,
      cos = Math.cos;
  
  c.clearRect(0, 0, canvas.width, canvas.height);
  for(i = 0; i < m; i++){
    for(j = 0; j < n; j++){
      u = i/(m-1); 
      v = j/(n-1);
      x = u * canvas.width + sin(t+j)*4;
      y = v * canvas.height;
      
      size = (sin(u*30+t)+1)*2;
    
      c.beginPath();
      c.arc(x, y, size, 0, 2 * Math.PI);
      if(size > 2){
        c.fillStyle = "blue";
      }
      else{
        c.fillStyle = "red";
      }
      c.fill();
    }
  }
  t = t + 0.1;
  requestAnimationFrame(draw);
}

draw();