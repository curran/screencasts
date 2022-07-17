var direction = require("./direction");

module.exports = function(width, height) {
  var cells = new Array(width * height), // each cell’s edge bits
      frontier = [];

  var start = (height - 1) * width;
  cells[start] = 0;
  frontier.push({index: start, direction: direction.N});
  frontier.push({index: start, direction: direction.E});
  shuffle(frontier, 0, 2);
  while (!exploreFrontier());
  return cells;

  function exploreFrontier() {
    if ((edge = frontier.pop()) == null) return true;

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

      var m = 0;
      if (y1 > 0 && cells[i1 - width] == null) frontier.push({index: i1, direction: direction.N}), ++m;
      if (y1 < height - 1 && cells[i1 + width] == null) frontier.push({index: i1, direction: direction.S}), ++m;
      if (x1 > 0 && cells[i1 - 1] == null) frontier.push({index: i1, direction: direction.W}), ++m;
      if (x1 < width - 1 && cells[i1 + 1] == null) frontier.push({index: i1, direction: direction.E}), ++m;
      shuffle(frontier, frontier.length - m, frontier.length);
    }
  }

  function shuffle(array, i0, i1) {
    var m = i1 - i0, t, i, j;
    while (m) {
      i = Math.random() * m-- | 0;
      t = array[m + i0], array[m + i0] = array[i + i0], array[i + i0] = t;
    }
    return array;
  }
};
