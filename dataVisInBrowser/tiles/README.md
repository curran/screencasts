Ever since I found out about Nasa's "Earth at Night" imagery, I wanted to make a map that puts the splotches of light into context. With this layered visualization, you can clearly see which splotches of light correspond to which cities, and into which states or countries they fall.

Click to start and stop the motion.

You can explore the whole world by panning and zooming.

This visualization uses [d3-tile](https://github.com/d3/d3-tile) to show 4 layers:

 * (raster) Nasa's "Earth at Night" map tiles from <a href="https://earthdata.nasa.gov">ESDIS</a>. The light emitted from earth at night can be thought of as a proxy for population density.
 * (vector) World Country borders (world-50m.json) from [TopoJSON Examples](https://github.com/mbostock/topojson/tree/master/examples)
 * (vector) US State borders (us-states.json) from [alignedleft/d3-book/chapter_12](https://github.com/alignedleft/d3-book/tree/master/chapter_12) via [Michelle Chandra’s Block Basic US State Map - D3](http://bl.ocks.org/michellechandra/0b2ce4923dc9b5809922).
 * (raster) Labels for cities, states and more. These are the <a href="http://stamen.com">Stamen Design</a> "Toner Labels" map tiles. Tiles copyright [OpenStreetMap contributors](https://www.openstreetmap.org/copyright).

Derived from <a href='http://bl.ocks.org/mbostock/'>mbostock</a>'s block: <a href='http://bl.ocks.org/mbostock/5914438'>Raster & Vector III</a>.

<!-- Start of SimpleHitCounter Code -->
<div align="center"><a href="http://www.simplehitcounter.com" target="_blank"><img src="http://simplehitcounter.com/hit.php?uid=2130839&f=16777215&b=0" border="0" height="18" width="83" alt="web counter"></a></div>
<!-- End of SimpleHitCounter Code -->
