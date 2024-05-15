/*
Define a function called avgVal that accepts an array of numbers as a parameter.
The function should return the average of all values in the array. If the array
is empty, it should return null.
*/
/*
1. define function called avgVal
2. accepts array as parameter
3. return the average of all values in array
4. if array is empty return null
*/
function avgVal(arr){
    let avg = 0;
    if(arr.length === 0){
        return null;
    }
    for(let i = 0; i < arr.length; i++){
        avg += arr[i] / arr.length
    } return avg;
}


// console.log(avgVal([5, 10]));         // 7.5
// console.log(avgVal([3, 7, 2, 1, 2])); // 3
console.log(avgVal([]));              // null

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = avgVal;