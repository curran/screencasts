var canvas = document.getElementById("canvas"),
    c = canvas.getContext("2d");

function color(r, g, b){
  r = Math.floor(r);
  g = Math.floor(g);
  b = Math.floor(b);
  return 'rgb('+r+','+g+','+b+')';
}

function drawCircle(x, y, radius){
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI * 2);
  c.closePath();
  c.fill();
}

(function executeFrame(){
  c.clearRect(0, 0, canvas.width, canvas.height);
  render();
  requestAnimationFrame(executeFrame);
})();

function render(){
  var x = Math.random() * canvas.width,
      y = Math.random() * canvas.height,
      radius = 10;
  drawCircle(x, y, radius);
}

//c.fillStyle = color(255, 0, 0);
drawCircle(50, 50, 20);
