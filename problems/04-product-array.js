/*
Write a function product(nums) that takes in an array of numbers. The function
should return the total product of multiplying all numbers of the array
together. You can assume that nums will not be an empty array.
*/
/*
1. write function product
2. takes in array of numbers
3. return total product of multiplying all numbers of an array together
*/
function product(nums){
    let prod = 1;
    for(let i = 0; i < nums.length; i++){
        prod *= nums[i]
    }return prod;
}


// console.log(product([10, 3, 5, 2])); // 300
// console.log(product([4, 3]));        // 12

/******************** DO NOT MODIFY ANY CODE BELOW THIS LINE *****************/
module.exports = product;