projection.line = function(coordinates, context) {
  if (!(n = coordinates.length)) return;
  context = radiansAndRotateContext(projectAndTransformContext(context));
  var i = 0,
      n = coordinates.length,
      p = coordinates[0];
  context.moveTo(p[0], p[1]);
  while (++i < n) context.lineTo((p = coordinates[i])[0], p[1]);
};

function radiansAndRotateContext(context) {
  return {
    moveTo: function() {
      var p = arguments;
      radians(p);
      rotate(p);
      context.moveTo(p[0], p[1]);
    },
    lineTo: function() {
      var p = arguments;
      radians(p);
      rotate(p);
      context.lineTo(p[0], p[1]);
    },
    closePath: function() {
      context.closePath();
    }
  };
}

function intersectAntemeridian(context) {
  var λ0, φ0, sλ0;
  return {
    moveTo: function(λ, φ) {
      sλ0 = λ > 0 ? π : -π;
      context.moveTo(λ0 = λ, φ0 = φ);
    },
    lineTo: function(λ, φ) {
      var sλ = λ > 0 ? π : -π;
      if (sλ0 !== sλ && Math.abs(λ - λ0) >= π) {
        context.lineTo(sλ0, φ0 = d3_geo_projectionIntersectAntemeridian(λ0, φ0, λ, φ));
        context.moveTo(sλ0 = sλ, φ0);
      }
      context.lineTo(λ0 = λ, φ0 = φ);
    },
    closePath: function() {
      context.closePath();
    }
  };
}

function projectAndTransformContext(context) {
  return {
    moveTo: function() {
      var p = arguments;
      project(p);
      transform(p);
      context.moveTo(p[0], p[1]);
    },
    lineTo: function() {
      var p = arguments;
      project(p);
      transform(p);
      context.lineTo(p[0], p[1]);
    },
    closePath: function() {
      context.closePath();
    }
  };
}
