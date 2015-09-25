google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(getData);

var data = [];

var actors = [];

function getData() {
  var id = $(".movie-id").text()[0]
  $.ajax({
            url: id,
            dataType: "json",
            // data: {
            //     "movie": id
            // },
            type: "GET",
            success: function(response) {
              console.log(response)
              data = response;
              actors = response.actors
              drawChart()
            },
            error: function(xhr) {
              console.log("FAIL")
            }
        });
}

function drawChart() {

  console.log(actors)

  var scatterData = google.visualization.arrayToDataTable([
    ['Age', 'Weight'],
    [ 8,      12],
    [ 4,      5.5],
    [ 11,     14],
    [ 4,      5],
    [ 3,      3.5],
    [ 6.5,    7]
  ]);

  var options = {
    title: 'Age vs. Weight comparison',
    hAxis: {title: 'Age', minValue: 0, maxValue: 15},
    vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
    legend: 'none'
  };

  var chart = new google.visualization.ScatterChart(document.getElementById('chart_div'));

  chart.draw(data, options);
}