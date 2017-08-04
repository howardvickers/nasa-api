 
// // var numbers = [4, 2, 5, 1, 3];
// // numbers.sort(function(a, b) {
// //   return b - a;
// // });
// // console.log(numbers);



//     var tableArray = ['Bob', 1, 'a', 'sun', 'cat', 'Mary', 2, 'b', 'moon', 'dog', 'Josh', 3, 'c', 'jupiter', 'horse', 'Cuthburt', 4, 'd', 'mars', 'mouse', 'Sam', 5, 'e', 'venus', 'cow']

//     // for (var k=0; k<tableArray.length/5; k+=5){
//     //     if (tableArray[k+1]>tableArray[k+6]){

//     //     }
//     // }

//     // var colx = 
//     var colx = []
//     var makeColX = function(array){
//         for (var m=1; m<array.length; m+=5)
//             colx.push(array[m])
//         colx.sort(function(a, b){return b - a})
//     }
//     makeColX(tableArray)
//     console.log(colx)

//     col1 = []
//     col2 = []
//     col3 = []
//     col4 = []
//     col5 = []

//     // for (var n=1; n<tableArray.length; n+=5){
//     for (var y in colx){
//         for (var n in tableArray){
//             if (tableArray[n]===colx[y]){
//                 console.log(tableArray)
//                 // col1.push(tableArray[n-1])
//                 // col2.push(tableArray[n])
//                 // col3.push(tableArray[n+1])
//                 // col4.push(tableArray[n+2])
//                 // col5.push(tableArray[n+3])
//             }
//         }
//         // for (var p=0; p<colx.length; p++){
        
//         // }
//     }
//     console.log(col1, col2, col3, col4, col5)
    
    var tableArray = ['Bob', 1, 'a', 'sun', 'cat', 'Mary', 2, 'b', 'moon', 'dog', 'Josh', 3, 'c', 'jupiter', 'horse', 'Cuthburt', 4, 'd', 'mars', 'mouse', 'Sam', 5, 'e', 'venus', 'cow']

    var col1 = []
    var col2 = []
    var col3 = []
    var col4 = []
    var col5 = []
    for (var z=0; z<tableArray.length; z+=5){
        col1.push(tableArray[z])
        col2.push(tableArray[z+1])
        col3.push(tableArray[z+2])
        col4.push(tableArray[z+3])
        col5.push(tableArray[z+4])
    }
    console.log(col1, col2, col3, col4, col5)

    var colx = [3, 5, 1, 4, 2]
    // var col1new = []
    // var col2new = []
    // var col3new = []
    // var col4new = []
    // var col5new = []
    var allCols = []
    // var col1 = ['Bob', 'Mary', 'Josh', 'Cuthburt', 'Sam']
    // var col2 = [1, 2, 3, 4, 5]
    // var col3 = ['a', 'b', 'c', 'd', 'e']
    // var col4 = ['sun', 'moon', 'jupiter', 'mars', 'venus']
    // var col5 = ['cat', 'dog', 'horse', 'mouse', 'cow']
    // var col2Sort = col2.sort(function(a, b){return b - a})
    for (var n in colx){
        for (var y in col2){
            if (colx[n]===col2[y]){
                // console.log(col2.indexOf(y))
                // console.log(n, y)
                allCols.push(col1[y])
                allCols.push(col2[y])
                allCols.push(col3[y])
                allCols.push(col4[y])
                allCols.push(col5[y])
            }
        }
    }
    // console.log(col1new, col2new, col3new, col4new, col5new)
    console.log(allCols)



// // variables for the writeTable function
//     var count = 0
//     var totalCells = 1

//     // create a function to populate the table in the DOM
//     function writeTable(array1, array2, array3, array4, array5) {
//         var tbody = $('#body')
//         for (var i = 0; i < array1.length ; i++) {
//             var tr = $('<tr/>').appendTo(tbody);
//             for (var j = 0; j < totalCells; j++) {
//                 tr.append('<td>' + array1[count] + '</td>', '<td>' + array2[count] + '</td>', '<td>' + array3[count] + '</td>', '<td>' + array4[count] + '</td>', '<td>' + array5[count] + '</td>')
//                 count++;
//             }
//         }
//     }
//     writeTable(col1, col2Sort, col3, col4, col5)





















// var numbers = [4, 2, 5, 1, 3];
//     numbers.sort(function(a, b) {
//         return a - b;
//     });
//     console.log(numbers);

//     var items = [
//         { name: 'Edward', value: 21 },
//         { name: 'Sharpe', value: 37 },
//         { name: 'And', value: 45 },
//         { name: 'The', value: -12 },
//         { name: 'Magnetic', value: 13 },
//         { name: 'Zeros', value: 37 }
//     ]
//     items.sort(function (a, b) {
//         return a.value - b.value
//     })
//     function(a, b)




// var points = [40, 100, 1, 5, 25, 10]
//     points.sort(function(a, b){
//         return a-b
//     })


// var numbers = [8,5];
    
// numbers.sort(function(a, b)
// {
//     return a - b;	
// });
    
// console.log(numbers); 




// var shapes = [
//     [5, "Pentagon"],
//     [3, "Triangle"],
//     [8, "Octagon"],
//     [4, "Rectangle"]
//     ];
    
// shapes.sort(function(a, b)
// {
//     return a[0] - b[0];
// });
// console.log(shapes)