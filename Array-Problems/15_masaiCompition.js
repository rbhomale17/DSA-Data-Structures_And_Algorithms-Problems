// ### Problem 15 :- Masai Competitions
// Masai is organizing a sports fest that is going to run for N days, and everyday M people are going to participate in it. Each player is having some power rating P. The person with hig
// her value of P, wins everyday. You are given the powers of all the people participating everyday. You have to find the winner for everyday, and print their power in the form of a list. R
// efer the sample I/O for better understanding.
// Note: Two people may have the same power.

function masaiCompetetion(n, m, mat) {
    let bag = [];
    for (let i = 0; i < n; i++) {
        let max = 0;
        for (let j = 0; j < m; j++) {
            // console.log(mat[i][j])
            if (mat[i][j] > max) max = mat[i][j];
        }
        bag.push(max)
    }
    console.log(bag.join(' '))
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [n, m] = input[line++].trim().split(' ').map(Number);
        let mat = [];
        for (let i = 0; i < n; i++) {
            mat.push(input[line++].trim().split(' ').map(Number))
        }
        masaiCompetetion(n, m, mat)
    }

}

runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
3 3
7 7 1
4 3 10
1 2 3`);

let output = `4 8 12
              7 10 3`;
