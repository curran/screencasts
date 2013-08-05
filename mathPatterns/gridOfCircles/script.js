var c = canvas.getContext('2d');

var i, j, u, v, x, y,
    m = 10,
    n = 10,
    size = 10;

for(i = 0; i < m; i++){
  for(j = 0; j < n; j++){
    u = i/(m-1);
    v = j/(n-1);
    x = u * canvas.width;
    y = v * canvas.height;
    
    c.beginPath();
    c.arc(x, y, size, 0, 2 * Math.PI);
    c.fill();
  }
}