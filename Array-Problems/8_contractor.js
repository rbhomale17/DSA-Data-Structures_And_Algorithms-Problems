// Contractor
// A Contractor's daily tasks involve noting the number of hours the labour works and paying them accordingly.
// But at one time you only require one labour, so as he finishes his job you give the job to the next labour.
// If there are no labours available you wait until the next labour comes.
// If labour comes when another one is already doing some task, he waits
// until the job is finished and then asks the contractor for a job.
// The contractor has the time labours came to the site, and the time the I abours left.
// He asks you to find the number of hours each labour works.
// Refer to the I / O for better understanding.

function contractor(n, arr, dep) {
    let i = 1;
    let j = 0;
    let bag = [];
    bag[0] = Math.abs(arr[0] - dep[0]);

    while (i < n && j < n) {
        if (arr[i] >= dep[j]) {
            bag[i] = Math.abs(arr[i] - dep[j + 1]);
            i++; j++
        } else {
            bag[i] = Math.abs(dep[j] - dep[j + 1])
            j++; i++
        }
    }
    console.log(bag.join(' '))
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number).sort((a, b) => a - b)
        let dep = input[line++].trim().split(' ').map(Number).sort((a, b) => a - b)
        contractor(n, arr, dep)
    }
}

runProgram(`1
      3
      0 3 7
      2 10 11`); // 2 7 1