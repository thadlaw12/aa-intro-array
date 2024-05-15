/*
Define a function firstAndLast that takes in an array of numbers and returns the
sum of the first and last element if there is an even number of elements in the
array. If there is an odd number of elements in the array, then the function
should return the difference between the first and last elements of the array.
*/
/*
1. define function firstAndLast
2. takes in an array
3. return sum of the first and last element if even number of elements
4. if the array has an odd number return difference between first and last
*/
function firstAndLast(arr) {
    let sum = 0;
    let diff = 0;
    if(arr.length % 2 === 0){
        sum = arr[0] + arr[arr.length - 1]
        return sum;
    }else if (arr.length % 2 !== 0){
        diff = arr[0] - arr[arr.length - 1]
        return diff;
    }

} 


// console.log(firstAndLast([1, 2, 3, 4]));    // 5
// console.log(firstAndLast([1, 2, 3, 4, 5])); // -4
// console.log(firstAndLast([12, 5]));         // 17
// console.log(firstAndLast([12]));            // 0
// console.log(firstAndLast([7, 11, 3]));      // 4

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = firstAndLast;