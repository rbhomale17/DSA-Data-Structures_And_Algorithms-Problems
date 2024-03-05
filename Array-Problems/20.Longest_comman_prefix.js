// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Example 1:

// Input: strs = ["flower", "flow", "flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog", "racecar", "car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

// Solution :- 

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {

    if (!strs.length) return '';

    // Sort the array of strings to ensure the shortest string is first
    strs.sort();

    // Take the first string as the reference for comparison
    let prefix = strs[0];

    // Iterate through the characters of the reference string
    for (let i = 0; i < prefix.length; i++) {
        // Compare each character with the corresponding character in other strings
        for (let j = 1; j < strs.length; j++) {
            if (prefix[i] !== strs[j][i]) {
                return prefix.substring(0, i); // Return the prefix up to the current character if there's a mismatch
            }
        }
    }
    return prefix; // Return the full prefix if all strings match up to the length of the shortest string
}


