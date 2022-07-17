var fs = require("fs");

var roundPrecision = 1e6;

fs.readFile("/dev/stdin", "utf-8", function(error, input) {
  var collection = JSON.parse(input);
  switch (collection.type) {
    case "FeatureCollection": return cleanupFeatureCollection(collection);
    case "GeometryCollection": return cleanupGeometryCollection(collection);
    default: throw "unknown type: " + collection.type;
  }
});

function cleanupFeatureCollection(collection) {
  console.log("{\"type\":\"FeatureCollection\",\"features\":[");
  console.log(collection.features.map(cleanupFeature).map(stringify).join(",\n"));
  console.log("]}");
}

function cleanupGeometryCollection(collection) {
  console.log("{\"type\":\"GeometryCollection\",\"features\":[");
  console.log(collection.features.map(cleanupGeometry).map(stringify).join(",\n"));
  console.log("]}");
}

function cleanupFeature(feature) {
  if (feature.properties.ISO_A3) {
    if (/[A-Z]{3}/.test(feature.properties.ISO_A3)) {
      feature.id = feature.properties.ISO_A3;
    } else {
      console.warn("ignoring invalid ISO code for " + feature.properties.NAME + ": " + feature.properties.ISO_A3);
    }
  } else if (feature.properties.FIPS) {
    if (/[0-9]{2}/.test(feature.properties.FIPS)) {
      feature.id = feature.properties.FIPS;
    } else {
      console.warn("ignoring invalid FIPS code for " + feature.properties.NAME + ": " + feature.properties.FIPS);
    }
  }
  feature.properties = {name: feature.properties.NAME};
  cleanupGeometry(feature.geometry);
  return feature;
}

function cleanupGeometry(geometry) {
  switch (geometry.type) {
    case "Polygon": geometry.coordinates = roundPolygon(geometry.coordinates); break;
    case "MultiPolygon": geometry.coordinates = roundMultiPolygon(geometry.coordinates); break;
    case "LineString": geometry.coordinates = roundLineString(geometry.coordinates); break;
    default: throw "unknown type: " + geometry.type;
  }
  return geometry;
}

function roundMultiPolygon(coordinates) {
  return coordinates.map(roundPolygon);
}

function roundPolygon(coordinates) {
  return coordinates.map(roundLineString);
}

function roundLineString(coordinates) {
  return coordinates.map(roundCoordinate);
}

function roundCoordinate(coordinate) {
  return coordinate.map(round);
}

function round(x) {
  return Math.round(x * roundPrecision) / roundPrecision;
}

function stringify(o) {
  return JSON.stringify(o);
}
