/*
Define a function hasElement that has two parameters. The first parameter should
be an array, and the second should be a target element. The function should
return a boolean indicating whether the target element is in the array.
Solve this using a loop.
*/
/*
1. define function hasElement
2. first param is array second is target element
3. return a boolean saying if target element is in array
*/
function hasElement(arr, tarEl){
    for(let i = 0; i < arr.length; i++){
        if (arr.includes(tarEl)){
            return true;
        } else {
            return false;
        }
    }
}


// console.log(hasElement(['a', 'b', 'c', 'e'], 'c')); // true
// console.log(hasElement(['a', 'b', 'c', 'e'], 'a')); // true
// console.log(hasElement(['a', 'b', 'c', 'e'], 'z')); // false
// console.log(hasElement([43, -7, 11, 13], 11));      // true
// console.log(hasElement([43, -7, 11, 13], 1));       // false
// console.log(hasElement([], 3));                     // false

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = hasElement;