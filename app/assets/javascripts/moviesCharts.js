google.load("visualization", "1.1", {packages:["bar"]});
google.setOnLoadCallback(drawCharts);

function drawCharts(){

  // Init data
  var data = [];

  var getData = $.get( "movies", function( response ) {},
                       "json").success(function(response){
                          data = response;
                          drawCriticSkew(data);
                          drawViewerSkew(data);

                  })
}


function drawCriticSkew(data){
  //Sort function
  function compareCriticSkew(a,b) {
    if (a.difference > b.difference)
       return -1;
    if (a.difference < b.difference)
      return 1;
    return 0;
  }

  var rawSkewData = data.sort(compareCriticSkew).slice(0, 5);
  var tableData = [['Title', 'Metascore', 'IMDB Rating']]

  for (var i = 0; i < rawSkewData.length; i++) {
    tableData.push([rawSkewData[i].title, rawSkewData[i].metascore, (rawSkewData[i].imdb_rating * 10)])
  }

  console.log(tableData)

  var d = google.visualization.arrayToDataTable(tableData)

  var chart = new google.charts.Bar(document.getElementById('criticSkew'))

  chart.draw(d)


}

function drawViewerSkew(data){
  //Sort function
  function compareCriticSkew(a,b) {
    if (a.difference < b.difference)
       return -1;
    if (a.difference > b.difference)
      return 1;
    return 0;
  }

  var rawSkewData = data.sort(compareCriticSkew).slice(0, 5);
  var tableData = [['Title', 'Metascore', 'IMDB Rating']]

  for (var i = 0; i < rawSkewData.length; i++) {
    tableData.push([rawSkewData[i].title, rawSkewData[i].metascore, (rawSkewData[i].imdb_rating * 10)])
  }

  console.log(tableData)

  var d = google.visualization.arrayToDataTable(tableData)

  var chart = new google.charts.Bar(document.getElementById('viewerSkew'))

  chart.draw(d)


}

