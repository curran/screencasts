var direction = require("./direction");

module.exports = function(width, height) {
  var cells = new Array(width * height),
      frontier = minHeap(function(a, b) { return a.weight - b.weight; }),
      startIndex = (height - 1) * width;

  cells[startIndex] = 0;
  frontier.push({index: startIndex, direction: direction.N, weight: Math.random()});
  frontier.push({index: startIndex, direction: direction.E, weight: Math.random()});

  while ((edge = frontier.pop()) != null) {
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
      if (y1 > 0 && cells[i1 - width] == null) frontier.push({index: i1, direction: direction.N, weight: Math.random()});
      if (y1 < height - 1 && cells[i1 + width] == null) frontier.push({index: i1, direction: direction.S, weight: Math.random()});
      if (x1 > 0 && cells[i1 - 1] == null) frontier.push({index: i1, direction: direction.W, weight: Math.random()});
      if (x1 < width - 1 && cells[i1 + 1] == null) frontier.push({index: i1, direction: direction.E, weight: Math.random()});
    }
  }

  return cells;

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
};
