/*
Define a function combineArrays that takes in two parameters. Both parameters
should be arrays of numbers. The function should return the two arrays combined
into a single array where the first array's elements comes before the second
array's elements. Research and use the Array.concat method on MDN.
*/
/*
1. define function combineArrays
2. takes in two arrays of numbers
3. return two arrays combined in a single array 
*/
function combineArrays(arr1, arr2){
    let comb = arr1.concat(arr2)
    return comb;
}


// console.log(combineArrays([1, 2], [3, 4]));       // => [1, 2, 3, 4]
// console.log(combineArrays([17, 5, 11], [6, 7]));  // => [17, 5, 11, 6, 7]
// console.log(combineArrays([], [10]));             // => [10]

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = combineArrays;