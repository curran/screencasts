var canv = document.getElementById('myCanvas'),
    c = canv.getContext('2d');

var x = 50,
    y = 50,
    radius = 20;

c.beginPath();
c.arc(x, y, radius, 0, 2*Math.PI);
c.closePath();
c.fill();
