var N = 1 << 0,
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;

self.addEventListener("message", function(event) {
  postMessage(generateMaze(event.data.width, event.data.height));
});

function generateMaze(cellWidth, cellHeight) {
  var cells = new Array(cellWidth * cellHeight),
      frontier = [],
      startIndex = (cellHeight - 1) * cellWidth;

  cells[startIndex] = 0;
  frontier.push({index: startIndex, direction: N});
  frontier.push({index: startIndex, direction: E});

  while ((edge = popRandom(frontier)) != null) {
    var edge,
        i0 = edge.index,
        d0 = edge.direction,
        i1 = i0 + (d0 === N ? -cellWidth : d0 === S ? cellWidth : d0 === W ? -1 : +1),
        x0 = i0 % cellWidth,
        y0 = i0 / cellWidth | 0,
        x1,
        y1,
        d1,
        open = cells[i1] == null; // opposite not yet part of the maze

    if (d0 === N) x1 = x0, y1 = y0 - 1, d1 = S;
    else if (d0 === S) x1 = x0, y1 = y0 + 1, d1 = N;
    else if (d0 === W) x1 = x0 - 1, y1 = y0, d1 = E;
    else x1 = x0 + 1, y1 = y0, d1 = W;

    if (open) {
      cells[i0] |= d0, cells[i1] |= d1;
      if (y1 > 0 && cells[i1 - cellWidth] == null) frontier.push({index: i1, direction: N});
      if (y1 < cellHeight - 1 && cells[i1 + cellWidth] == null) frontier.push({index: i1, direction: S});
      if (x1 > 0 && cells[i1 - 1] == null) frontier.push({index: i1, direction: W});
      if (x1 < cellWidth - 1 && cells[i1 + 1] == null) frontier.push({index: i1, direction: E});
    }
  }

  return cells;
}

function popRandom(array) {
  if (!array.length) return;
  var n = array.length, i = Math.random() * n | 0, t;
  t = array[i], array[i] = array[n - 1], array[n - 1] = t;
  return array.pop();
}
