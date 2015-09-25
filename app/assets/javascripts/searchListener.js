$(document).on('change', '.search-input', function() {
    var val = $('.search-input').val();
    console.log("WORK IT");
    window.location.href = "movies/" + val

    // $.ajax({
    //     url: "stations",
    //     dataType: "json",
    //     data: {
    //         "station": val
    //     },
    //     type: "GET",
    //     success: function(response) {
    //       $('.table-section').empty();
    //       createTables(response, function(){
    //         StationsModule.statusColor();
    //       });

    //     },
    //     error: function(xhr) {
    //       console.log("FAIL")
    //     }
    // });
});