// Hardware problem
// Ansh turned on a computer at time 0 and clicked the mouse N times.
// The i-th (1≤i≤N) click was at time T[i] . Here T represents the array of
// times, i.e, when the mouse of clicked.
// If he consecutively clicked the mouse at time x1 and time ×2 (where ×1<x2), a double click is said to be fired at time x2 if and only if x2 -×1 ≤ D.
// What time was a double click fired for the first time? If no double click
// was fired, print -1 instead.

function hardwareProblem(N, D, T) {
    // Code here
    for (let i = 0; i < N - 1; i++) {
        if (T[i + 1] - T[i] <= D) {
            console.log(T[i + 1]);
            return;
        }
    }
    console.log(-1)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let [N, D] = input[line++].trim().split(' ').map(Number);
        let T = input[line++].trim().split(' ').map(Number);
        hardwareProblem(N, D, T)
    }
}


runProgram(
    `3
 4 500
 300 900 1300 1700
 5 99
 100 200 300 400 500
 4 500
 100 600 1100 1600
 `);

/*
1300
-1
600
*/