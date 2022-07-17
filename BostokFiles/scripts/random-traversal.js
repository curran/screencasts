var direction = require("./direction");

module.exports = function(width, height) {
  var cells = new Array(width * height),
      frontier = [],
      startIndex = (height - 1) * width;

  cells[startIndex] = 0;
  frontier.push({index: startIndex, direction: direction.N});
  frontier.push({index: startIndex, direction: direction.E});

  while ((edge = popRandom(frontier)) != null) {
    var edge,
        i0 = edge.index,
        d0 = edge.direction,
        i1 = i0 + (d0 === direction.N ? -width : d0 === direction.S ? width : d0 === direction.W ? -1 : +1),
        x0 = i0 % width,
        y0 = i0 / width | 0,
        x1,
        y1,
        d1,
        open = cells[i1] == null; // opposite not yet part of the maze

    if (d0 === direction.N) x1 = x0, y1 = y0 - 1, d1 = direction.S;
    else if (d0 === direction.S) x1 = x0, y1 = y0 + 1, d1 = direction.N;
    else if (d0 === direction.W) x1 = x0 - 1, y1 = y0, d1 = direction.E;
    else x1 = x0 + 1, y1 = y0, d1 = direction.W;

    if (open) {
      cells[i0] |= d0, cells[i1] |= d1;
      if (y1 > 0 && cells[i1 - width] == null) frontier.push({index: i1, direction: direction.N});
      if (y1 < height - 1 && cells[i1 + width] == null) frontier.push({index: i1, direction: direction.S});
      if (x1 > 0 && cells[i1 - 1] == null) frontier.push({index: i1, direction: direction.W});
      if (x1 < width - 1 && cells[i1 + 1] == null) frontier.push({index: i1, direction: direction.E});
    }
  }

  return cells;

  function popRandom(array) {
    if (!array.length) return;
    var n = array.length, i = Math.random() * n | 0, t;
    t = array[i], array[i] = array[n - 1], array[n - 1] = t;
    return array.pop();
  }
};
