d3.json("us-counties.json", function(error, topology) {
  if (error) throw error;

  var infoByArc = {},
      arcsByState = {};

  topology.objects[0].geometries.forEach(function(object) {
    object.arcs.forEach(object.type === "MultiPolygon"
        ? function(polygon) { polygon.forEach(function(ring) { ring.forEach(info); }); }
        : function(ring) { ring.forEach(info); });

    function info(arc) {
      if (arc < 0) arc = ~arc;
      var info = infoByArc[arc] || (infoByArc[arc] = {count: 0, states: {}});
      info.states[Math.floor(object.id / 1000)] = 1;
      ++info.count;
    }
  });

  topology.arcs.forEach(function(arc, i) {
    var info = infoByArc[arc.index = i];
    if (info.count === d3.keys(info.states).length) {
      d3.keys(info.states).forEach(function(state) {
        (arcsByState[state] || (arcsByState[state] = [])).push(arc);
      });
    }
  });

  for (var state in arcsByState) {
    var arcs = arcsByState[state],
        arcsByEnd = {},
        fragmentsByStart = {},
        fragmentsByEnd = {};

    arcs.forEach(function(arc) {
      var e = ends(arc);
      (arcsByEnd[e[0]] || (arcsByEnd[e[0]] = [])).push(arc.index);
      (arcsByEnd[e[1]] || (arcsByEnd[e[1]] = [])).push(~arc.index);
    });

    arcs.forEach(function(arc) {
      var e = ends(arc),
          start = e[0],
          end = e[1],
          f, g;

      if (f = fragmentsByEnd[start]) { // add to end of existing fragment
        delete fragmentsByStart[f.start];
        delete fragmentsByEnd[f.end];
        f.push(arc.index);
        f.end = end;
        if (g = fragmentsByStart[end]) { // stitch together existing fragments f:g
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var fg = f.concat(g);
          fragmentsByStart[fg.start = f.start] = fragmentsByEnd[fg.end = g.end] = fg;
        } else if (g = fragmentsByEnd[end]) { // stitch together existing fragments f:~g
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var fg = f.concat(g.map(function(i) { return ~i; }).reverse());
          fragmentsByStart[fg.start = f.start] = fragmentsByEnd[fg.end = g.start] = fg;
        } else {
          fragmentsByStart[f.start] = fragmentsByEnd[f.end] = f;
        }
      } else if (f = fragmentsByStart[end]) { // add to start of existing fragment
        delete fragmentsByStart[f.start];
        delete fragmentsByEnd[f.end];
        f.unshift(arc.index);
        f.start = start;
        if (g = fragmentsByEnd[start]) { // stitch together existing fragments g:f
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var gf = g.concat(f);
          fragmentsByStart[gf.start = g.start] = fragmentsByEnd[gf.end = f.end] = gf;
        } else if (g = fragmentsByStart[start]) { // stitch together existing fragments ~g:f
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var gf = g.map(function(i) { return ~i; }).reverse().concat(f);
          fragmentsByStart[gf.start = g.end] = fragmentsByEnd[gf.end = f.end] = gf;
        } else {
          fragmentsByStart[f.start] = fragmentsByEnd[f.end] = f;
        }
      } else if (f = fragmentsByStart[start]) { // add reverse to start of existing fragment
        delete fragmentsByStart[f.start];
        delete fragmentsByEnd[f.end];
        f.unshift(~arc.index);
        f.start = end;
        if (g = fragmentsByEnd[end]) { // stitch together existing fragments g:f
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var gf = g.concat(f);
          fragmentsByStart[gf.start = g.start] = fragmentsByEnd[gf.end = f.end] = gf;
        } else if (g = fragmentsByStart[end]) { // stitch together existing fragments ~g:f
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var gf = g.map(function(i) { return ~i; }).reverse().concat(f);
          fragmentsByStart[gf.start = g.end] = fragmentsByEnd[gf.end = f.end] = gf;
        } else {
          fragmentsByStart[f.start] = fragmentsByEnd[f.end] = f;
        }
      } else if (f = fragmentsByEnd[end]) { // add reverse to end of existing fragment
        delete fragmentsByStart[f.start];
        delete fragmentsByEnd[f.end];
        f.push(~arc.index);
        f.end = start;
        if (g = fragmentsByEnd[start]) { // stitch together existing fragments f:g
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var fg = f.concat(g);
          fragmentsByStart[fg.start = f.start] = fragmentsByEnd[fg.end = g.end] = fg;
        } else if (g = fragmentsByStart[start]) { // stitch together existing fragments f:~g
          delete fragmentsByStart[g.start];
          delete fragmentsByEnd[g.end];
          var fg = f.concat(g.map(function(i) { return ~i; }).reverse());
          fragmentsByStart[fg.start = f.start] = fragmentsByEnd[fg.end = g.start] = fg;
        } else {
          fragmentsByStart[f.start] = fragmentsByEnd[f.end] = f;
        }
      } else {
        f = [arc.index];
        fragmentsByStart[f.start = start] = fragmentsByEnd[f.end = end] = f;
      }
    });

    if (state == 6) {
      console.log(fragmentsByEnd);
    }

    arcs.multiPolygon = d3.values(fragmentsByEnd).map(function(arcs) { return [arcs]; });
    arcs.multiLineString = arcs.map(function(arc) { return [arc.index]; });
  }

  function ends(arc) {
    var p0 = arc[0], p1 = [0, 0];
    arc.forEach(function(dp) { p1[0] += dp[0], p1[1] += dp[1]; });
    return [p0, p1];
  }

  console.log(arcsByState);
});
