
    var tableArrayOrig = ['Bob', 1, 'a', 'sun', 'cat', 'Mary', 2, 'b', 'moon', 'dog', 'Josh', 3, 'c', 'jupiter', 'horse', 'Cuthburt', 4, 'd', 'mars', 'mouse', 'Sam', 5, 'e', 'venus', 'cow']

    var col1 = []
    var col2 = []
    var col3 = []
    var col4 = []
    var col5 = []
    for (var z=0; z<tableArrayOrig.length; z+=5){
        col1.push(tableArrayOrig[z])
        col2.push(tableArrayOrig[z+1])
        col3.push(tableArrayOrig[z+2])
        col4.push(tableArrayOrig[z+3])
        col5.push(tableArrayOrig[z+4])
    }
    var col5Sort = col5.sort(function(a, b){return b - a})
    var tableArray = []
    for (var n in col5Sort){
        for (var y in col5){
            if (col5Sort[n]===col5[y]){
                tableArray.push(col1[y])
                tableArray.push(col2[y])
                tableArray.push(col3[y])
                tableArray.push(col4[y])
                tableArray.push(col5[y])
            }
        }
    }
    console.log(tableArray)