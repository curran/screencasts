<!DOCTYPE html>
<meta charset="utf-8">
<style>

form,
svg {
  position: absolute;
}

</style>

<svg width="960" height="500">
  <defs>
    <marker id="arrow-start" viewBox="0 0 10 10" refX="0" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M10,0l-10,5l10,5z"></path>
    </marker>
    <marker id="arrow-end" viewBox="0 0 10 10" refX="10" refY="5" markerWidth="7" markerHeight="7" orient="auto">
      <path d="M0,0l10,5l-10,5z"></path>
    </marker>
    <clipPath id="clip">
      <rect x="-240" y="-240" width="480" height="480"></rect>
    </clipPath>
  </defs>
  <g transform="translate(480,250)">
    <line x1="280" y1="240" y2="240" stroke="#aaa" stroke-dasharray="2,2"></line>
    <line id="line" x1="280" stroke="#aaa" stroke-dasharray="2,2"></line>
    <path id="path" stroke="black" d="M280,0V240" marker-start="url(#arrow-start)" marker-end="url(#arrow-end)"></path>
    <g id="text" transform="translate(280,0)">
      <rect fill="white" x="-36" y="-12" height="24" width="72"></rect>
      <text dy=".35em" text-anchor="middle">
        <tspan style="font-style:oblique;">h</tspan> = <tspan id="height">0.125</tspan>
      </text>
    </g>
    <circle fill="steelblue" clip-path="url(#clip)" r="240"></circle>
    <circle fill="none" stroke="black" stroke-width="1.5" r="240"></circle>
  </g>
</svg>

<form oninput="output.value = (input.value / 240).toFixed(3)" style="top:10px;left:10px;">
  <input id="input" type="range" min="0" max="240" value="60" style="width:240px;">
  <i>k</i> = <output name="output" for="input">0.250</output>
</form>

<script src="//d3js.org/d3.v3.min.js"></script>
<script>

var r = 240;

var line = d3.select("#line"),
    path = d3.select("#path"),
    text = d3.select("#text"),
    textValue = d3.select("#height"),
    clip = d3.select("#clip rect");

d3.select("form")
    .on("input", function() { change(+this.output.value); });

change(.25);

function change(k) {
  var t0, t1 = k * 2 * Math.PI;

  // Solve for theta numerically.
  if (k > 0 && k < 1) {
    t1 = Math.pow(12 * k * Math.PI, 1 / 3);
    for (var i = 0; i < 10; ++i) {
      t0 = t1;
      t1 = (Math.sin(t0) - t0 * Math.cos(t0) + 2 * k * Math.PI) / (1 - Math.cos(t0));
    }
    k = (1 - Math.cos(t1 / 2)) / 2;
  }

  var h = 2 * r * k,
      y = r - h,
      a = (Math.PI - t1) / 2;

  clip
      .attr("y", y)
      .attr("height", h);

  line
      .attr("x2", -r * Math.cos(a))
      .attr("y1", y)
      .attr("y2", y);

  text
      .attr("transform", "translate(280," + (r - h / 2) + ")");

  textValue
      .text((h / (2 * r)).toFixed(3));

  path
      .attr("d", "M280," + r + "V" + y);
}

</script>
