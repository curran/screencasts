import npm from "rollup-plugin-npm";

export default {
  entry: "d3.js",
  plugins: [npm({jsnext: true})],
  moduleId: "d3",
  moduleName: "d3",
  format: "umd"
};
