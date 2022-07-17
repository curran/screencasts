<!DOCTYPE html>
<meta charset="utf-8">
<style>

path {
  fill: #3182bd;
}

text {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 24px;
}

</style>
<body>
<script src="//d3js.org/d3.v3.min.js"></script>
<script>

var arc = d3.svg.arc()
    .innerRadius(180)
    .outerRadius(220)
    .startAngle(0)
    .endAngle(function(t) { return t * 2 * Math.PI / 3; });

var svg = d3.select("body").append("svg")
    .attr("width", 960)
    .attr("height", 500)
  .append("g")
    .attr("transform", "translate(480,250)");

svg.append("defs").append("path")
    .attr("id", "text-path")
    .attr("d", arc(1));

svg.append("path")
    .attr("id", "path");

svg.append("clipPath")
    .attr("id", "text-clip")
  .append("use")
    .attr("xlink:href", "#path");

svg.append("text")
    .attr("clip-path", "url(#text-clip)")
    .attr("x", 8)
    .attr("dy", 28)
  .append("textPath")
    .attr("xlink:href", "#text-path")
    .text("Hello, curved textPath!");

d3.select("#path").transition()
    .duration(5000)
    .attrTween("d", function() { return arc; });

</script>
