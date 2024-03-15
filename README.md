# DSA-Data-Structures_And_Algorithms-Problems
DSA-Data-Structures_And_Algorithms

### This Repository stores solutions of some important DSA problems in JavaScript.

### Problem 1: Find the Pivot Integer
Problem Live Link is : [Problem_live_link](https://leetcode.com/problems/find-the-pivot-integer/description/) 

https://leetcode.com/problems/find-the-pivot-integer/description/
```js
// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.

 

// Example 1:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:

// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.

// ### Problem: Find the Pivot Integer

// Given a positive integer n, find the pivot integer x such that:

// The sum of all elements between 1 and x inclusively equals the sum of all elements between x and n inclusively.
// Return the pivot integer x. If no such integer exists, return -1. It is guaranteed that there will be at most one pivot index for the given input.



// Example 1:

// Input: n = 8
// Output: 6
// Explanation: 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.
// Example 2:

// Input: n = 1
// Output: 1
// Explanation: 1 is the pivot integer since: 1 = 1.
// Example 3:

// Input: n = 4
// Output: -1
// Explanation: It can be proved that no such integer exist.


Solution:

/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    // ? pivot is calculated as the square root of (n * (n + 1) / 2). 
    // ? This formula represents the sum of integers from 1 to n. 
    // ? Since the sum of integers from 1 to n follows a triangular number pattern, 
    // ? the square root of this sum will give the midpoint or the value where the 
    // ? sum is equally split into two halves.
    let pivot = Math.sqrt(n * (n + 1) / 2);
    if (Number.isInteger(pivot)) {
        return Math.floor(pivot);
    } else {
        return -1;
    }
};

console.log("----------------------------------------");
var n = 8;
var res = pivotInteger(n);
console.log("First Test Case: ", res == 6 ? "Correct Answer" : "Wrong Answer", res);

console.log("----------------------------------------");
var n = 1;
var res = pivotInteger(n);
console.log("Second Test Case: ", res == 1 ? "Correct Answer" : "Wrong Answer", res);

console.log("----------------------------------------");
var n = 4;
var res = pivotInteger(n);
console.log("Third Test Case: ", res == -1 ? "Correct Answer" : "Wrong Answer", res);
```

### Problem 2: Product of Array Except Self
Problem Live Link is : [Problem_live_link](https://leetcode.com/problems/product-of-array-except-self/description/) 

https://leetcode.com/problems/product-of-array-except-self/description/

```js
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

    console.log(res);
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

```

### Problem 3: 