// Man of the Match
// Team RCB has successfully chased a total and finally won their first match in the IPL after a string of losses. Interestingly, the openers managed it comfortably and no wicket fell during their innings in this match.
// The openers Virat Kohli and AB de Villiers played a total of n overs to chase their target. You are presented with an array of size 6 (because
// 1 over is equal to 6 balls) which consists of the runs scored in that particular ball.
// You know that AB de Villiers took the strike initially and played the firstball
// 1. You have to find out who scored more runs during the match after n Overs to decide the Man of the Match.
// Print "Virat Kohli" if Virat scored more, else "AB de Villiers". Print "Tie" incase when both scored equal runs.
// Note-
// The array consist of values {0,1,2,3,4,6}. There are no extras.
// The strike rotates after every 6 balls or if 1 or 3 run is taken.

function ManOfTheMatch(n, arr) {
    let abd = true;
    let a = 0; let v = 0;
    for (let i = 0; i < n * 6; i++) {
        if (arr[i] % 2 !== 0 && abd) {
            a += arr[i];
            abd = !abd;

        } else if (arr[i] % 2 === 0 && abd) {
            a += arr[i];
        } else if (arr[i] % 2 !== 0 && !abd) {
            v += arr[i];
            abd = !abd
        } else {
            v += arr[i];
        }
        // console.log(a,v,i)
        if ((i + 1) % 6 == 0 && abd === false) {
            abd = true
        } else if ((i + 1) % 6 == 0 && abd === true) {
            abd = false
        }
    }
    // console.log(a,v)
    if (a > v) return "AB de Villiers";
    if (v > a) return 'Virat Kohli';
    else return 'Tie'
}

function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);
        console.log(ManOfTheMatch(n, arr))
    }
}


runProgram(`3
  2
  1 2 0 0 1 1 6 6 4 1 6 1 
  3
  0 0 0 0 0 1 0 0 0 0 1 1 6 6 6 1 4 4
  1
  0 1 0 1 0 0`);

/*
Output:-
AB de Villiers
Virat Kohli
Tie
*/