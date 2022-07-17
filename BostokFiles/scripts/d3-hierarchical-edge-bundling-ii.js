// URL: https://beta.observablehq.com/@mbostock/d3-hierarchical-edge-bundling-ii
// Title: D3 Hierarchical Edge Bundling II
// Author: Mike Bostock (@mbostock)
// Version: 221
// Runtime version: 1

const m0 = {
  id: "bf952a31f8e5b7bd@221",
  variables: [
    {
      inputs: ["md"],
      value: (function(md){return(
md`# D3 Hierarchical Edge Bundling II`
)})
    },
    {
      name: "chart",
      inputs: ["tree","d3","data","DOM","width","line"],
      value: (function(tree,d3,data,DOM,width,line)
{
  const root = tree(d3.hierarchy(data));

  const map = new Map(root.leaves().map(d => [d.data.id, d]));

  const svg = d3.select(DOM.svg(width, width))
      .attr("viewBox", `${-width / 2} ${-width / 2} ${width} ${width - 40}`)
      .style("max-width", "100%")
      .style("height", "auto")
      .style("display", "block")
      .style("margin", "auto")
      .style("font", "10px sans-serif");

  svg.append("g")
      .attr("fill", "none")
      .attr("stroke", "steelblue")
      .attr("stroke-opacity", 0.5)
    .selectAll("path")
    .data(d3.merge(root.leaves().map(d => d.data.targets.map(i => d.path(map.get(i))))))
    .enter().append("path")
      .style("mix-blend-mode", "multiply")
      .attr("d", line);

  svg.append("g")
    .selectAll("text")
    .data(root.leaves())
    .enter().append("text")
      .attr("transform", d => `
        rotate(${d.x * 180 / Math.PI - 90})
        translate(${d.y},0)${d.x >= Math.PI ? `
        rotate(180)` : ""}
      `)
      .attr("dy", "0.31em")
      .attr("x", d => d.x < Math.PI ? 3 : -3)
      .attr("text-anchor", d => d.x < Math.PI ? "start" : "end")
      .text(d => d.data.id);

  return svg.node();
}
)
    },
    {
      inputs: ["md"],
      value: (function(md){return(
md`This variation of [hierarchical edge bundling](/@mbostock/d3-hierarchical-edge-bundling) constructs a simple two-level hierarchy using numbered groups. See this same dataset as a [force-directed graph](/@mbostock/d3-force-directed-graph).`
)})
    },
    {
      name: "data",
      inputs: ["require"],
      value: (async function(require)
{
  const {nodes, links} = await require("@observablehq/miserables@0.0");
  const map = new Map;

  for (const node of nodes) {
    let group = map.get(node.group);
    if (!group) map.set(node.group, group = {name: node.group, children: []});
    group.children.push(node);
    node.targets = [];
  }

  for (const {source, target} of links) {
    source.targets.push(target.id);
  }

  return {name: "miserables", children: [...map.values()]};
}
)
    },
    {
      name: "width",
      value: (function(){return(
640
)})
    },
    {
      name: "radius",
      inputs: ["width"],
      value: (function(width){return(
width / 2
)})
    },
    {
      name: "line",
      inputs: ["d3"],
      value: (function(d3){return(
d3.radialLine()
    .curve(d3.curveBundle.beta(0.85))
    .radius(d => d.y)
    .angle(d => d.x)
)})
    },
    {
      name: "tree",
      inputs: ["d3","radius"],
      value: (function(d3,radius){return(
d3.cluster().size([2 * Math.PI, radius - 100])
)})
    },
    {
      name: "d3",
      inputs: ["require"],
      value: (function(require){return(
require("https://d3js.org/d3.v5.min.js")
)})
    }
  ]
};

const notebook = {
  id: "bf952a31f8e5b7bd@221",
  modules: [m0]
};

export default notebook;
