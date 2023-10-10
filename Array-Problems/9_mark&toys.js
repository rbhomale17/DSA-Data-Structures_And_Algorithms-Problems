// Mark and toys
// Mark and Jane are very happy after having their first child. Their son loves toys, so Mark wants to buy some. There are a number of different toys lying in front of him, tagged with their prices. Mark has only a certa
// in amount to spend, and he wants to maximize the number of toys he buys with this money. Given a list of toy prices and an amount to spend, determine the maximum number of gifts he can buy.
// Note: Each toy can be purchased only once.

function MarkAndToys(n, i, limit, arr, count) {
    // console.log(n,i,limit,arr,count)
    if (limit == 0) {
        console.log(count);
        return;
    }
    if (limit < 0) {
        console.log(count - 1);
        return;
    }
    if (i >= n) {
        // console.log(count);
        return
    };
    MarkAndToys(n, i + 1, limit - arr[i], arr, count + 1)
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let [n, limit] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number).sort((a, b) => a - b);
    MarkAndToys(n, 0, limit, arr, 0)
}


runProgram(`7 50
1 12 5 111 200 1000 10
`); // 4