// nQueen varieant
// The n-queens puzzle is the problem of placing n queens on an n x n chessboard such that no two queens attack each other.

// Given an integer n, return all distinct solutions to the n-queens puzzle. You may return the answer in any order.

// Each solution contains a distinct board configuration of the n-queens' placement, where 'Q' and '.' both indicate a queen and an empty space, respectively.

 

// Example 1:


// Input: n = 4
// Output: [[".Q..","...Q","Q...","..Q."],["..Q.","Q...","...Q",".Q.."]]
// Explanation: There exist two distinct solutions to the 4-queens puzzle as shown above
// Example 2:

// Input: n = 1
// Output: [["Q"]]

/**
 * @param {number} n
 * @return {string[][]}
 */


var solveNQueens = function (n) {
    let res = [];
    let mat = Array.from(Array(n), () => new Array(n).fill('.'));
    nQueen(mat, 0, res);
    return res;
};

function nQueen(mat, row, res) {
    if (row === mat.length) {
        res.push(mat.map(row => row.join('')));
        return;
    }

    for (let col = 0; col < mat.length; col++) {
        if (checkQueenSafety(mat, row, col)) {
            mat[row][col] = "Q";
            nQueen(mat, row + 1, res);
            mat[row][col] = ".";
        }
    }
}

function checkQueenSafety(mat, row, col) {
    // Check column
    for (let i = 0; i < row; i++) {
        if (mat[i][col] === 'Q') {
            return false;
        }
    }

    // Check upper-left diagonal
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
        if (mat[i][j] === 'Q') {
            return false;
        }
    }

    // Check upper-right diagonal
    for (let i = row - 1, j = col + 1; i >= 0 && j < mat.length; i--, j++) {
        if (mat[i][j] === 'Q') {
            return false;
        }
    }

    return true;
}

// n = 4;
console.log('*********** N = 4 ***********')
console.log(solveNQueens(4));

// n = 1;
console.log('*********** N = 1 ***********')
console.log(solveNQueens(1));
