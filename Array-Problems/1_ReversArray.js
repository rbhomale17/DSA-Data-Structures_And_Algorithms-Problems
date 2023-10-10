// Reverse the array(Without Using Extra Space)
// • You are given an array, such that you have to reverse the array
// • Please note that you have to reverse the given array, and using a
// new array should be avoided
// • Also, refrain from printing the elements directly.

function reverseArray(n, arr) {
    for (let i = 0, j = n - 1; i < j; i++, j--) {
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = input[0];
    let arr = input[1].trim().split(' ').map(Number);
    console.log(reverseArray(n, arr).join(' '))
}

runProgram(`5
1 2 3 4 5`);