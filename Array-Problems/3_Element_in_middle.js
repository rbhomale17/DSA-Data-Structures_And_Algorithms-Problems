// Given an unsorted array of size, N. Find the first element in the array such that
// all of its left elements are smaller and all right elements to it are greater than it.
// Note: Left and right side elements can be equal to the required element. 
// And extreme elements cannot be required element.

function middle(n, arr) {
    for (let i = 1; i < n; i++) {
        let flag = true;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] > arr[i]) flag = false;
        }
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[i]) flag = false;
        }
        if (flag) {
            console.log(arr[i])
            return;
        }
    }
    console.log(-1)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].trim().split(' ').map(Number);
    middle(n, arr)
}


runProgram(`5
4 3 6 7 8`); // 6