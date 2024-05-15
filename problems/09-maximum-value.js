/*
Define a function called maxVal that takes in an array of numbers as a
parameter. The function should return the largest number of the array. If the
array is empty, the function should return null.
*/

function maxVal(arr){
    let max = 0;
    if(arr.length === 0){
        return null;
    } else {
       max = Math.max(...arr)
    } return max;
}


// console.log(maxVal([4, 6, 3, 5, 42, 4])); // 42
// console.log(maxVal([-2, -3, -7, 3 ]));    // 3
// console.log(maxVal([]));                  // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = maxVal;