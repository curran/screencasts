(function (){
  var div = document.getElementById('barChartContainer'),
      barChart = BarChart(div);

  d3.tsv("data.tsv", function (d) {
    d.frequency = +d.frequency;
    return d;
  }, function(error, data) {

    // Reset data each second
    setInterval(function () {

      // Include each element with a 50% chance.
      var randomSample = data.filter(function(d){
        return Math.random() < 0.5;
      });

      barChart.setData(randomSample);
    }, 1000);
  });

  // Set size once to initialize
  setSizeFromDiv();

  // Set size on resize
  window.addEventListener('resize', setSizeFromDiv);

  function setSizeFromDiv(){
    barChart.setSize(div.clientWidth, div.clientHeight);
  }

}());
