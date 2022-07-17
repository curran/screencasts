function d3_geo_pathContext(context) {
  var pointRadius = 4.5,
      state = 0;

  // state bit 0: not-first point?
  // state bit 1: inside line?
  // state bit 2: inside polygon?

  function point(x, y) {
    if (state) {
      if (state & 1) {
        context.lineTo(x, y);
      } else {
        context.moveTo(x, y);
        state |= 1;
      }
    } else {
      context.moveTo(x, y);
      context.arc(x, y, pointRadius, 0, 2 * π);
    }
  }

  return {
    point: point,
    lineStart: function() { state |= 2; },
    lineEnd: function() { state &= ~3; if (state) context.closePath(); },
    polygonStart: function() { state |= 4; },
    polygonEnd: function() { state &= ~4; },
    pointRadius: function(_) { pointRadius = _; return this; },
    result: d3_noop
  };
}
