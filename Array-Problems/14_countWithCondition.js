// Count With Condition
// Given an array of length N and an integer X, the task is to find the number of subsets with a sum equal to X.

function countWithCondition(n, k, array, count) {
    let max = 0;
    function backtrack(index, currentSubset) {
        if (index == array.length && array.length !== 0) {
            if (currentSubset == k) {
                max++;
            }
            return;
        }
        backtrack(index + 1, currentSubset + array[index]);

        backtrack(index + 1, currentSubset);
    }
    backtrack(0, 0);
    console.log(max)
};

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    let count = 0;
    countWithCondition(n, k, arr, count)
    //   console.log(count)
}

runProgram(`4 10
  1 2 3 4`); // output = 1;