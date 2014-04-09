(function (){
  var div = document.getElementById('barChartContainer'),
      barChart = BarChart(div);
  window.addEventListener('resize', barChart.update);
}());
