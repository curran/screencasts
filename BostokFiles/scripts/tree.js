(function() {

  // TODO support quantized, delta-encoded arcs
  // TODO group arcs based on connectedness!
  tree = function(topology) {
    return group(topology.arcs.map(function(arc) {
      var i = 0,
          n = arc.length,
          p0,
          p1 = arc[0],
          children = new Array(n - 1);

      while (++i < n) {
        p0 = p1, p1 = arc[i];
        children[i - 1] = new Leaf(p0, p1);
      }

      return group(children);
    }));
  };

  function group(children) {
    var i0,
        i1,
        n0,
        n1,
        child0,
        child1,
        children1;

    while ((n0 = children.length) > 1) {
      children1 = new Array(n1 = Math.ceil(n0 / 2));

      for (i0 = 0, i1 = 0; i0 < n0 - 1; i0 += 2, i1 += 1) {
        child0 = children[i0];
        child1 = children[i0 + 1];
        children1[i1] = new Node(child0, child1);
      }

      if (i0 < n0) {
        children1[i1] = children[i0];
      }

      children = children1;
    }

    return children[0];
  }

  function Node(child0, child1) {
    var e0 = child0.extent,
        e1 = child1.extent;
    this.children = [child0, child1];
    this.extent = [
      [Math.min(e0[0][0], e1[0][0]), Math.min(e0[0][1], e1[0][1])],
      [Math.max(e0[1][0], e1[1][0]), Math.max(e0[1][1], e1[1][1])]
    ];
  }

  function node_nearest(point) {
    var minNode,
        minDistance = Infinity,
        heap = minHeap(compareDistance),
        node = this,
        distance = node.distance(point),
        candidate = {distance: distance, node: node};

    do {
      node = candidate.node;
      if (node.children) {
        heap.push({distance: node.children[0].distance(point), node: node.children[0]});
        heap.push({distance: node.children[1].distance(point), node: node.children[1]});
      } else {
        distance = node.distance(point);
        if (distance < minDistance) minDistance = distance, minNode = node;
      }

    } while ((candidate = heap.pop()) && (distance = candidate.distance) <= minDistance);

    return minNode;
  }

  function node_distance(point) {
    var x = point[0],
        y = point[1],
        x0 = this.extent[0][0],
        y0 = this.extent[0][1],
        x1 = this.extent[1][0],
        y1 = this.extent[1][1];
    return x < x0 ? pointLineSegmentDistance(point, [x0, y0], [x0, y1])
         : x > x1 ? pointLineSegmentDistance(point, [x1, y0], [x1, y1])
         : y < y0 ? y0 - y
         : y > y1 ? y - y1
         : 0;
  }

  Node.prototype = {
    extent: null,
    children: null,
    distance: node_distance,
    nearest: node_nearest
  };

  function Leaf(point0, point1) {
    this.coordinates = [point0, point1];
    this.extent = [
      [Math.min(point0[0], point1[0]), Math.min(point0[1], point1[1])],
      [Math.max(point0[0], point1[0]), Math.max(point0[1], point1[1])]
    ];
  }

  function leaf_distance(point) {
    return pointLineSegmentDistance(point, this.coordinates[0], this.coordinates[1]);
  }

  function pointLineSegmentDistance(c, a, b) {
    var dx = b[0] - a[0],
        dy = b[1] - a[1],
        d2 = dx * dx + dy * dy,
        t = d2 && ((c[0] - a[0]) * dx + (c[1] - a[1]) * (b[1] - a[1])) / d2;
    return pointDistance(c, t <= 0 ? a : t >= 1 ? b : [a[0] + t * dx, a[1] + t * dy]);
  }

  function pointDistance(a, b) {
    var dx = a[0] - b[0],
        dy = a[1] - b[1];
    return dx * dx + dy * dy;
  }

  Leaf.prototype = {
    extent: null,
    coordinates: null,
    distance: leaf_distance
  };

  function compareDistance(a, b) {
    return a.distance - b.distance;
  }

  function minHeap(compare) {
    var heap = {},
        array = [],
        size = 0;

    heap.size = function() { return size; };

    heap.push = function(object) {
      up(array[object._ = size] = object, size++);
      return size;
    };

    heap.pop = function() {
      if (size <= 0) return;
      var removed = array[0], object;
      if (--size > 0) object = array[size], down(array[object._ = 0] = object, 0);
      return removed;
    };

    heap.remove = function(removed) {
      var i = removed._, object;
      if (array[i] !== removed) return; // invalid request
      if (i !== --size) object = array[size], (compare(object, removed) < 0 ? up : down)(array[object._ = i] = object, i);
      return i;
    };

    function up(object, i) {
      while (i > 0) {
        var j = ((i + 1) >> 1) - 1,
            parent = array[j];
        if (compare(object, parent) >= 0) break;
        array[parent._ = i] = parent;
        array[object._ = i = j] = object;
      }
    }

    function down(object, i) {
      while (true) {
        var r = (i + 1) << 1,
            l = r - 1,
            j = i,
            child = array[j];
        if (l < size && compare(array[l], child) < 0) child = array[j = l];
        if (r < size && compare(array[r], child) < 0) child = array[j = r];
        if (j === i) break;
        array[child._ = i] = child;
        array[object._ = i = j] = object;
      }
    }

    return heap;
  }
})();
