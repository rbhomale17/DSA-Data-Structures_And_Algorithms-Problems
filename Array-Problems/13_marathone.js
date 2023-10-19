// You take part in a marathon, and there are many different points from where you can start running (named from 0); at each point, there is a counter for energy drinks. Not all energy
// drinks are the same; every one of them gives you a different amount of energy. With one unit of energy, you can only run 1 km, and the starting points are located randomly, so the
// distance between them is not fixed. Assume that at the start of the marathon, you're exhausted. So you want to find the point from which you should start running so that you compl
// ete the whole marathon.
// Note: The marathon is circular, your start point is the end point also.

function Marathon(n, arr) {
    // console.log(n,arr)
    let maxSum = 0;
    let maxDiff = 0;
    let start = 0;
    for (let i = 0; i < n; i++) {
        let diff = arr[i][0] - arr[i][1];
        maxDiff += diff;
        if (maxDiff < 0) {
            start = i + 1;
            maxDiff = 0;
        }
        // start = maxDiff;
        maxSum += diff;
    }
    if (maxSum < 0) console.log("No starting points")
    else console.log(start)
}

function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0];
    let line = 1;
    let arr = [];

    for (let i = 0; i < tc; i++) {
        let mat = input[line++].trim().split(" ").map(Number);
        arr.push(mat)
        //   Marathon(drink,km)
    }
    Marathon(arr.length, arr)
}


runProgram(`3
1 5
10 3
3 4`); // Output = 1;