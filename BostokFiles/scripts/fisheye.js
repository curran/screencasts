(function() {
  d3.fisheye = function() {
    var radius = 200,
        power = 2,
        k0,
        k1,
        center = [0, 0];

    function fisheye(d) {
      var x = d[0] - center[0],
          y = d[1] - center[1],
          dx = Math.abs(x),
          dy = Math.abs(y),
          kx = !x || dx >= radius ? 1 : k0 * (1 - Math.exp(-dx * k1)) / dx * .75 + .25,
          ky = !y || dy >= radius ? 1 : k0 * (1 - Math.exp(-dy * k1)) / dy * .75 + .25;
      return [center[0] + x * kx, center[1] + y * ky];
    }

    function rescale() {
      k0 = Math.exp(power);
      k0 = k0 / (k0 - 1) * radius;
      k1 = power / radius;
      return fisheye;
    }

    fisheye.radius = function(_) {
      if (!arguments.length) return radius;
      radius = +_;
      return rescale();
    };

    fisheye.power = function(_) {
      if (!arguments.length) return power;
      power = +_;
      return rescale();
    };

    fisheye.center = function(_) {
      if (!arguments.length) return center;
      center = _;
      return fisheye;
    };

    return rescale();
  };
})();