// ### Problem 19 :- Flower Management
// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.
// Given an integer array flowerbed containing e's and 1's, where o means empty and 1 means not empty, and an integer n, find out if if n new flowers can be planted in the flowerb
// ed without violating the no-adjacent-flowers rule.

function flowermanagement(n, k, arr) {
    let count = 0;
    for (let i = 2; i < n - 1; i++) {
        if (arr[0] == 0 && arr[1] == 0) arr[0] = 1, count++;
        if (arr[n - 2] == 0 && arr[n - 1] == 0) arr[n - 1] = 1, count++;
        if (arr[i - 1] == 0 && arr[i + 1] == 0 && arr[i] == 0) arr[i] = 1, count++;
        if (count == k) return true;
    }
    return false;
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [n, k] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(' ').map(Number);
        flowermanagement(n, k, arr) ? console.log('Yes') : console.log('No');
    }
}

runProgram(`1
5 1
1 0 0 0 1`); // Output = 'Yes';