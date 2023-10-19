// ### Problem 17 :- Maximum Apples
// You have some apples and a basket that can carry up to W units of weight.
// Given an integer array weight of size N where weight i is the weight of the ith apple, return the maximum number of apples you can put in the basket.

function MaximumApples(N, C, arr) {
    // console.log(N,C,arr)
    let count = 0;
    for (let i = 0; i < N; i++) {

        count++;
        C -= arr[i]
        if (C < 0) {
            // console.log(count)
            count--;
            break;
        }
    }
    console.log(count)
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    const [N, C] = input[0].trim().split(' ').map(Number);
    const arr = input[1].trim().split(' ').map(Number);
    MaximumApples(N, C, arr.sort((a, b) => a - b))
}

runProgram(`13 54
3 13 16 24 20 19 13 2 1 21 1 3 12`); // let output = 8;

runProgram(`4 20
3 10 4 4 `); // let output = 3;