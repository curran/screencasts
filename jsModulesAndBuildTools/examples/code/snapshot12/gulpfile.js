// This is a Gulpfile, which can be exeuted by the gulp command:
// npm install gulp -g
// gulp

// Requires dependencies listed in package.json to be installed, with the command:
// npm install

var gulp = require("gulp");
var amdOptimize = require("amd-optimize");
var concat = require("gulp-concat");
var eventStream = require("event-stream");
var order = require("gulp-order");

gulp.task("default", function() {
  eventStream
    .merge(
      gulp.src("almond.js"),
      gulp
        .src("*.js")
        .pipe(amdOptimize("main"))
        .pipe(concat("main-bundle-modules.js"))
    )
    .pipe(order(["almond.js", "main-bundle-modules.js"]))
    .pipe(concat("main-bundle.js"))
    .pipe(gulp.dest("."));
});
