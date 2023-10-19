// ### Problem 18 :- Consecutive ones
// You are given a binary string consisting of characters 'O' and '1' only. In one move you can choose any contiguous subsegment of this string of length less than or equal to k and con
// vert all elements of this segment to 1.
// Your task is to find the maximum length of contiguous '1' you can get after one move.

function consecativeOnes(n, k, arr) {
    // console.log(n,k,arr)
    let max = -1;
    for (let i = 0; i < n - k + 1; i++) {
        let j = i - 1; count = 0;
        while (j >= 0 && arr[j] == 1) {
            count++;
            j--;
        }
        let m = i + k;
        while (m < n && arr[m] == 1) {
            count++;
            m++;
        }
        count += k;
        if (count > max) max = count;
    }
    console.log(max)
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [n, k] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split('').map(Number);;
        consecativeOnes(n, k, arr)
    }
}


runProgram(`2
12 2
011001001010
3 3
000`);

let output = `5
          3`;