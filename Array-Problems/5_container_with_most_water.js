// Container with most water
// You are given an integer array height of length n.There are n vertical
// lines drawn such that the two endpoints of the ith line are(i, 0) and(i, height[i]).
// Find two lines that together with the x - axis form a container,
// such that the container contains the most water.
// Note: that you may not slant the container.

function findContainerWithMostWaterArea(n, arr) {
    let maxArea = 0;
    let l = 0;
    let r = n - 1;
    while (l < r) {
        let width = Math.abs(l - r);
        // console.log(width)
        let minHeight = Math.min(arr[l], arr[r]);
        let area = width * minHeight;
        maxArea = Math.max(maxArea, area);

        if (arr[l] < arr[r]) {
            l++;
        } else {
            r--;
        }
    }
    return maxArea;
}
function runProgram(input) {
    // Write code here
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(' ').map(Number);
        console.log(findContainerWithMostWaterArea(n, arr))
    }
}


runProgram(`1
  9
  1 8 6 2 5 4 8 3 7`); // 49