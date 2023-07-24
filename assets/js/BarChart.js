var xValues = ["Italy", "France", "Spain", "USA", "Argentina"];
var yValues = [55, 49, 12, 45, 89];
var barColors = ["red", "green","blue","orange","brown"];

new Chart("BarChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  
});
