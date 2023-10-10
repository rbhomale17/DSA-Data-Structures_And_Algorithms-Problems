// Rick n Richards
// There is a contest of Competitive eating.Rick and Richard were participating in the game.
// N bananas are placed in a line.Rick starts to eat from left to right, and
// Richard from right to left.For each banana, its length is known.
// Rick eats with speed twice that of Richard.If a player starts to eat the
// banana, other player can't touch it. If both players reach the same banana simultaneously, Rick gets to eat that banana as he snatches it away from Richard.
// How many bananas each of the players will eat ?

function RickyAndRichard(n, arr) {
    let c1 = 0
    let c2 = 1
    let i = 1;
    let j = n - 1
    let rick = arr[0]
    let richards = 0
    while (i <= j) {
        if ((rick) <= 2 * (richards)) {
            rick += arr[i]
            i++
            c2++
        } else if ((rick) > 2 * (richards)) {
            richards += arr[j]
            j--
            c1++
        }
    }
    console.log(c2, c1)

}
// }
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);
        RickyAndRichard(n, arr)
    }
}


runProgram(`1
    5
    2 9 8 2 7`);// 3 2
