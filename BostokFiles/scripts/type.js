function d3_geo_type(types) {
  for (var type in d3_geo_typeDefaults) {
    if (!(type in types)) {
      types[type] = d3_geo_typeDefaults[type];
    }
  }
  return types;
}

var d3_geo_typeDefaults = {

  Feature: function(o) {
    var g = this.geometry(o.geometry);
    return g && (o = Object.create(o), o.geometry = g);
  },

  FeatureCollection: function(o) {
    var a = [], f, features = o.features, i = -1, n = features.length;
    while (++i < n) if (f = this.Feature(features[i])) a.push(f);
    return a.length ? (o = Object.create(o), o.features = a) : null;
  },

  GeometryCollection: function(o) {
    var a = [], g, geometries = o.geometries, i = -1, n = geometries.length;
    while (++i < n) if (g = this.geometry(geometries[i])) a.push(g);
    return a.length ? (o = Object.create(o), o.geometries = a) : null;
  },

  LineString: function(o) {
    var c = this.line(o.coordinates);
    return c && (o = Object.create(o), o.coordinates = c);
  },

  MultiLineString: function(o) {
    var a = [], c, coordinates = o.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if(c = this.line(coordinates[i])) a.push(c);
    return a.length ? (o = Object.create(o), o.coordinates = a) : null;
  },

  MultiPoint: function(o) {
    var a = [], c, coordinates = o.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if(c = this.point(coordinates[i])) a.push(c);
    return a.length ? (o = Object.create(o), o.coordinates = a) : null;
  },

  MultiPolygon: function(multiPolygon) {
    var a = [], c, coordinates = o.coordinates, i = -1, n = coordinates.length;
    while (++i < n) if(c = this.polygon(coordinates[i])) a.push(c);
    return a.length ? (o = Object.create(o), o.coordinates = a) : null;
  },

  Point: function(point) {
    var c = this.point(o.coordinates);
    return c && (o = Object.create(o), o.coordinates = c);
  },

  Polygon: function(polygon) {
    var c = this.polygon(o.coordinates);
    return c && (o = Object.create(o), o.coordinates = c);
  },

  Sphere: d3_noop,

  object: function(object) {
    return d3_geo_typeObjects.hasOwnProperty(object.type)
        ? this[object.type](object)
        : this.geometry(object);
  },

  geometry: function(geometry) {
    return d3_geo_typeGeometries.hasOwnProperty(geometry.type)
        ? this[geometry.type](geometry)
        : null;
  },

  point: d3_noop,

  line: function(coordinates) {
    var a = [], c, i = -1, n = coordinates.length;
    while (++i < n) if(c = this.point(coordinates[i])) a.push(c);
    return a.length ? a : null;
  },

  polygon: function(coordinates) {
    var a = [], c, i = -1, n = coordinates.length;
    while (++i < n) if(c = this.line(coordinates[i])) a.push(c);
    return a.length ? a : null;
  }
};

var d3_geo_typeGeometries = {
  LineString: 1,
  MultiLineString: 1,
  MultiPoint: 1,
  MultiPolygon: 1,
  Point: 1,
  Polygon: 1,
  Sphere: 1
};

var d3_geo_typeObjects = {
  Feature: 1,
  FeatureCollection: 1,
  GeometryCollection: 1
};
