require(['d3', 'barChart'], function (d3, BarChart) {
  var barChart = BarChart();

  d3.tsv("../../exampleData/letterByFrequency.tsv", type, function(error, data) {
    barChart.set({
      xAttribute: "letter",
      yAttribute: "frequency",
      data: data
    });
    setInterval(function () {
      barChart.data = data.filter(function(){ return Math.random() < 0.5 });
    }, 1000);
  });

  function type(d) {
    d.frequency = +d.frequency;
    return d;
  }
});
