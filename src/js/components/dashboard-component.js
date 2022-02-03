import Chart from 'chart.js/auto';




let canvas = document.createElement("canvas")
canvas.setAttribute('id', 'chart_1');
canvas.setAttribute('height', '400');
canvas.setAttribute('width', '400');
canvas.className = 'mt-3  mb-3 d-none'

document.getElementById('container').appendChild(canvas);




var xValues = ["Italy", "France", "Spain", "USA", "Argentina","X", 'XXX', 'SSSSS',"LLLLL", '10'];
var yValues = [55, 49, 44, 24, 15, 7, 5, 10, 23, 11];
var barColors = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(255, 159, 64, 0.2)',
    'rgba(255, 205, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(201, 203, 207, 0.2)',
    //'rgba(5, 247, 5, 0.2)'
  ];
//["red", "green","blue","orange","brown"];


var myChart = new Chart("chart_1", {
    type: "bar",
    data: {
        labels: xValues,
        datasets: [{
          label: 'Value ',
          data: yValues,
          backgroundColor: barColors,
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)'
          ],
          borderWidth: 1
        }]
    },
    options: {
        title: {
          display: true,
          text: "World Wide Wine Production"
        }
      }
});