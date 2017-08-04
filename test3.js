// get data from API for between specified dates
$.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2017-07-23&end_date=2017-07-30&api_key=CyVHllQ3d29H7WoD5eWXGS27qWkx6y0ANT6QeHjb').then(function(data){
    // create a variable for the dataset 
    var near = data.near_earth_objects
    
    // create an array to hold all the information about the asteroids that are considered potentially hazardous
    var tableArrayOrig = []

    // create a function to populate the tableArray array
    var ourFunction = function(obj){
        // loop over the obj OBJECT for each KEY representing the dates
        for (var dateArray in obj){
            // loop over the KEY for each asteroid OBJECT
            for (var i in obj[dateArray]){
                // define variables for each characteristic of the asteroids so that they are easier to call
                var asteroidName = obj[dateArray][i].name
                var asteroidDate = '2017'
                var asteroidVelocity = Math.round(obj[dateArray][i].close_approach_data["0"].miss_distance.miles)
                var asteroidDiameter = Math.round(obj[dateArray][i].estimated_diameter.feet.estimated_diameter_max)
                var asteroidDistance = Math.round(obj[dateArray][i].close_approach_data["0"].relative_velocity.miles_per_hour)
                // filter out non-hazardous asteroids using if
                if (obj[dateArray][i].is_potentially_hazardous_asteroid === true){
                    // push the variables (defined above) into the array
                    tableArrayOrig.push(asteroidName, asteroidDate, asteroidVelocity, asteroidDiameter, asteroidDistance)
                }
            }
        }
    }
    ourFunction(near)
    console.log(tableArrayOrig)
    
    // // sort the data so that the closest asteroid is at the top of the table.
    // var col1 = []
    // var col2 = []
    // var col3 = []
    // var col4 = []
    // var col5 = []
    // var col5Sort = []
    // for (var z=0; z<tableArrayOrig.length; z+=5){
    //     col1.push(tableArrayOrig[z])
    //     col2.push(tableArrayOrig[z+1])
    //     col3.push(tableArrayOrig[z+2])
    //     col4.push(tableArrayOrig[z+3])
    //     col5.push(tableArrayOrig[z+4])
    // }

    // col5Orig = col5
    // col5Sort = col5.sort(function(a, b){return a - b})

    // var tableArray = []
    // for (var n in col5Sort){
    //     for (var y in col5Orig){
    //         if (col5Sort[n]===col5Orig[y]){
    //             tableArray.push(col1[y])
    //             tableArray.push(col2[y])
    //             tableArray.push(col3[y])
    //             tableArray.push(col4[y])
    //             tableArray.push(col5Orig[y])
    //         }
    //     }
    // }


    

    // variables for the writeTable function
    var count = 0
    var totalCells = 5

    // create a function to populate the table in the DOM
    function writeTable(array) {
        var tbody = $('#body')
        for (var i = 0; i < array.length / 5; i++) {
            var tr = $('<tr/>').appendTo(tbody);
            for (var j = 0; j < totalCells; j++) {
                tr.append('<td>' + array[count] + '</td>')
                count++;
            }
        }
    }
    writeTable(tableArrayOrig)
})