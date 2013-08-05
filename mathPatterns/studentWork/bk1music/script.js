// DNA like thing - jsFiddle demo by B1KMusic
var canvas = document.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    i,j,u,v,
    m = 20,n = 20,
    x,y,W,H,s,
    t = 0;
canvas.width = W = window.innerWidth;
canvas.height = H = window.innerHeight;

document.body.appendChild(canvas);
ctx.fillStyle = 'rgba(0,0,0,0.5)';
(function draw(){
    ctx.clearRect(0,0,W,H);
    for(i = 0; i < m; i ++){
        for(j = 0; j < n; j++){
            u = i/(m-1);
            v = j/(n-1);
            x = u * W + Math.sin(t+j)*64;
            y = v * H + Math.cos(t+i)*64;
            s = (Math.sin(u*t)+1)*16;
            ctx.beginPath();
            ctx.arc(x+s,y+s,s,Math.PI*2,false);
            ctx.fill();
            ctx.closePath();
        }
    }
    t += 0.04;
    requestAnimationFrame(draw);
})();
