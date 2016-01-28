var rollup = require("rollup");
var babel = require("rollup-plugin-babel");

rollup.rollup({
  entry: "src/main.js",
  plugins: [
  
    // The Babel plugin compiles the JSX code.
    // This is specified in the file .babelrc .
    babel()
  
  ]
}).then(function (bundle) {
  bundle.write({
    dest: "dist/main-build.js",
    format: "iife"
  });
}).catch(function (err){
  console.log(err);
});
