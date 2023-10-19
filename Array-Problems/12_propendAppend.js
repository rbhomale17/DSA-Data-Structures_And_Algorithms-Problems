// ### Problem 12 :- Prepend and Append
// Akhil initially had a binary stringt s (possibly of length 0). He performed the following operation several (possibly zero) times:
// • Add O to one end of the string and 1 to the other end of the string.
// For example, starting from the string 1011, you can obtain either 010111 or 110110.
// You are given Akhil's final string. What is the length of the shortest possible string he could have started with?
// † A binary string is a string (possibly the empty string) whose characters are either 0 or 1.

function AkhilsStrings(n, arr) {
    // console.log(n,arr)
    while (arr[0] !== arr[arr.length - 1]) {
        arr.shift();
        arr.pop();
    }
    console.log(arr.length)
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split('').map(Number);
        AkhilsStrings(n, arr)
    }
}

runProgram(`9
3
100
4
0111
5
10101
6
101010
7
1010110
1
1
2
10
2
11
10
1011011010
`);

// Output = `1
// 2
// 5
// 0
// 3
// 1
// 0
// 2
// 4`