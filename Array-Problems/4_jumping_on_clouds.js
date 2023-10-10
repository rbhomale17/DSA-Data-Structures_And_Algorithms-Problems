// Jumping on the clouds
// There is a new mobile game that starts with consecutively numbered clouds.Some of the clouds are thunderheads and others are cumulus.The player can jump on any cumulus cloud having a number that is equ
// al to the number of the current cloud plus 1 or 2. The player must avoid
// the thunderheads.Determine the minimum number of jumps it will take
// to jump from the starting postion to the last cloud.It is always possible to win the game.
// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);
        let j = 0;
        let count = 0;
        while (j < n) {
            if (arr[j] == 0 && arr[j + 2] == 0) count += 1, j += 2;
            else count += 1, j += 1;
            //   else j+=1;
        }
        console.log(count - 1)
    }

}

runProgram(`2
  7
  0 0 1 0 0 1 0
  6
  0 0 0 0 1 0`);

/*
Output = 
4
3
*/