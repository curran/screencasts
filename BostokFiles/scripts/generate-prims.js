var N = 1 << 0,
    S = 1 << 1,
    W = 1 << 2,
    E = 1 << 3;

self.addEventListener("message", function(event) {
  postMessage(generateMaze(event.data.width, event.data.height));
});

function generateMaze(cellWidth, cellHeight) {
  var cells = new Array(cellWidth * cellHeight),
      frontier = minHeap(function(a, b) { return a.weight - b.weight; }),
      startIndex = (cellHeight - 1) * cellWidth;

  cells[startIndex] = 0;
  frontier.push({index: startIndex, direction: N, weight: Math.random()});
  frontier.push({index: startIndex, direction: E, weight: Math.random()});

  while ((edge = frontier.pop()) != null) {
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
      if (y1 > 0 && cells[i1 - cellWidth] == null) frontier.push({index: i1, direction: N, weight: Math.random()});
      if (y1 < cellHeight - 1 && cells[i1 + cellWidth] == null) frontier.push({index: i1, direction: S, weight: Math.random()});
      if (x1 > 0 && cells[i1 - 1] == null) frontier.push({index: i1, direction: W, weight: Math.random()});
      if (x1 < cellWidth - 1 && cells[i1 + 1] == null) frontier.push({index: i1, direction: E, weight: Math.random()});
    }
  }

  return cells;
}

function minHeap(compare) {
  var heap = {},
      array = [],
      size = 0;

  heap.empty = function() {
    return !size;
  };

  heap.push = function(value) {
    up(array[size] = value, size++);
    return size;
  };

  heap.pop = function() {
    if (size <= 0) return;
    var removed = array[0], value;
    if (--size > 0) value = array[size], down(array[0] = value, 0);
    return removed;
  };

  function up(value, i) {
    while (i > 0) {
      var j = ((i + 1) >> 1) - 1,
          parent = array[j];
      if (compare(value, parent) >= 0) break;
      array[i] = parent;
      array[i = j] = value;
    }
  }

  function down(value, i) {
    while (true) {
      var r = (i + 1) << 1,
          l = r - 1,
          j = i,
          child = array[j];
      if (l < size && compare(array[l], child) < 0) child = array[j = l];
      if (r < size && compare(array[r], child) < 0) child = array[j = r];
      if (j === i) break;
      array[i] = child;
      array[i = j] = value;
    }
  }

  return heap;
}
