var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 12, 45, 19];
var barColors = ["yellow", "#d67733","#898989","#29a9be","#bb2d3b"];

new Chart("StactBarChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  
});
