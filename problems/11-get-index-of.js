/*
Define a function getIndexOf that has two parameters. The first parameter should
be an array, and the second should be a target element. If the target element is
in the array, the function should return the first index of the target element
in the array. If it's not in the array, the function should return -1. Solve
this using a loop.
*/
/*
1. define function getIndexOf
2. params are an array and a tarEl
3. if tarEl is in array return first index of tarEl
4. if not return -1
*/
function getIndexOf(arr, tarEl){
    for (let i = 0; i < arr.length; i++){
        if(arr[i] === tarEl) {
            return i;
        } 
     } if (arr === undefined);{
        return -1;
     }
}


 console.log(getIndexOf(['a', 'b', 'c', 'e'], 'c')); // 2
 console.log(getIndexOf(['a', 'b', 'c', 'e'], 'e')); // 3
 console.log(getIndexOf(['a', 'b', 'c', 'e'], 'z')); // -1
// console.log(getIndexOf([43, -7, 11, 13, 43], 43));  // 0
// console.log(getIndexOf([43, -7, 11, 13], 1));       // -1
// console.log(getIndexOf([], 3));                     // -1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = getIndexOf;