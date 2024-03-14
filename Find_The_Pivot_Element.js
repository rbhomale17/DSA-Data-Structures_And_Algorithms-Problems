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