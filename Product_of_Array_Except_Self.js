

// Product of Array Except Self

// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


Solution:
/**
* @param {number[]} nums
* @return {number[]}
*/
var productExceptSelf = function (nums) {
    let n = nums.length;
    let res = [];

    let leftProd = 1;
    for (let i = 0; i < n; i++) {
        res[i] = leftProd;
        leftProd *= nums[i];
        // console.log("l res: ", res)
    }
    // console.log(res);
    let rightProd = 1;
    for (let i = n - 1; i >= 0; i--) {
        res[i] *= rightProd;
        rightProd *= nums[i];
        // console.log("res", res)
    }

    // console.log(res);
    return res;
};



console.log("----------------------------------------");
var nums = [1,2,3,4];
var res = productExceptSelf(nums);
console.log("First Test Case: ", JSON.stringify(res) == JSON.stringify([24,12,8,6]) ? "Correct Answer" : "Wrong Answer", res);

console.log("----------------------------------------");
var nums = [-1,1,0,-3,3];
var res = productExceptSelf(nums);
console.log("Second Test Case: ", JSON.stringify(res) == JSON.stringify([0,0,9,0,0]) ? "Correct Answer" : "Wrong Answer", res);

console.log("----------------------------------------");
var nums = [0,0];
var res = productExceptSelf(nums);
console.log("Third Test Case: ", JSON.stringify(res) == JSON.stringify([0,0]) ? "Correct Answer" : "Wrong Answer", res);

console.log("----------------------------------------");
var nums = [0,1];
var res = productExceptSelf(nums);
console.log("Fourth Test Case: ", JSON.stringify(res) == JSON.stringify([1,0]) ? "Correct Answer" : "Wrong Answer", res);