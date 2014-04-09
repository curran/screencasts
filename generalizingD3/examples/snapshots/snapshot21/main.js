(function (){
  var div = document.getElementById('barChartContainer'),
      barChart = BarChart(div);

  d3.tsv("data.tsv", function (d) {
    d.frequency = +d.frequency;
    return d;
  }, function(error, data) {

    // Set the data
    barChart.set('data', data);

    // Set size once to initialize
    setSizeFromDiv();

    // Set size on resize
    window.addEventListener('resize', setSizeFromDiv);
  });

  function setSizeFromDiv(){
    barChart.set('size', {
      width: div.clientWidth,
      height: div.clientHeight
    });
  }

}());
