function intersections(a, b) {
  var R = a.r,
      r = b.r,
      dx = b.x - a.x,
      dy = b.y - a.y,
      d = Math.sqrt(dx * dx + dy * dy),
      x = (d * d - r * r + R * R) / (2 * d),
      y = Math.sqrt(R * R - x * x);
  dx /= d;
  dy /= d;
  return [
    [a.x + dx * x - dy * y, a.y + dy * x + dx * y],
    [a.x + dx * x + dy * y, a.y + dy * x - dx * y]
  ];
}
