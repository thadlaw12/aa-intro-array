/*
Define a function lastIndex that takes in an array and a character. The
function should return the last index where the character can be found in the
array.  If no character exists in the array, return -1.
*/
/*
1. define function lastIndex
2. takes an array and character
3. return the last index where character can be found
4. if no characters exists in array return -1
*/
function lastIndex(arr, char){
    let index = 0;
    for(let i = arr.length - 1; i >= 0; i--){
        if (arr[i] === char){
            index = i
            return index;
        } else {
            return -1;
        }
    }
}



// console.log(lastIndex(["a", "b", "c", "a"], "a"));
//=> 3
// console.log(lastIndex(["m", "i", "s", "s", "i", "s", "s", "i", "p", "i"], "i"));
//=> 9
// console.log(lastIndex(["o", "c", "t", "a", "g", "o", "n"], "o"));
//=> 5
// console.log(lastIndex(["p", "r", "o", "g", "r", "a", "m", "m", "i", "n", "g"], "m"));
//=> 7
// console.log(lastIndex(["a", "b", "c", "a"], "z"));
//=> -1

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = lastIndex;