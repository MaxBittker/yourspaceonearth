var sPop = 7333974287;
var ePop = 7334194401;
var landMass = 36850000000;

var start = Date.now();



$.ajax({
    url: "http://api.population.io:80/1.0/population/World/today-and-tomorrow/",
    type: "GET",
    crossDomain: true,
    dataType: "json",
    success: function(response) {
        sPop = response.total_population[0].population;
        ePop = response.total_population[1].population;
        update();
    },
    error: function(xhr, status) {
        update();

    }
});


function update() {
	elapsed = (Date.now()-start)/86400000;
	cPop  = sPop + (ePop - sPop)*elapsed;
    $("#space").text( (landMass / cPop).toFixed(8) + " acres per person ");
 window.setTimeout(update, 1000);

};
