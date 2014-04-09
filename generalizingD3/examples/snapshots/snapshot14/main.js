(function (){
  var div = document.getElementById('barChartContainer'),
      barChart = BarChart(div);

  d3.tsv("data.tsv", function (d) {
    d.frequency = +d.frequency;
    return d;
  }, function(error, data) {
    barChart.setData(data);
  });

  window.addEventListener('resize', barChart.update);

}());
