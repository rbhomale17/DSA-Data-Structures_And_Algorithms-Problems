// Sum Exists or Not
// Description
// Given an array of non-negative integers, and a value 'sum', determine if there is a subset of the given set (array) with sum equal to given sum.
// If there is a subset whose sum is equal to the required sum then print "yes" else print "no" without quotes.

function countWithCondition(n, k, array) {
    let max = 0;
    function backtrack(index, currentSubset) {
        if (index == array.length && array.length !== 0) {
            if (currentSubset == k) {
                max++;
                // console.log('yes')
                // return true;
            }
            return;
        }
        backtrack(index + 1, currentSubset + array[index]);

        backtrack(index + 1, currentSubset);
    }
    backtrack(0, 0);
    return max !== 0;
    // console.log(max)
};

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = +input[0]//.trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    let k = +input[2]
    let count = 0;
    (countWithCondition(n, k, arr)) ? console.log('yes') : console.log('no')
    //   console.log(count)
}

runProgram(`9
  1 2 3 4 5 6 7 8 9
  5`); // let output = 'yes';


