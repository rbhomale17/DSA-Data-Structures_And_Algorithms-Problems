// Equilibrium Element
// Given an array A of N positive numbers. The task is to find the position
// where equilibrium first occurs in the array. An equilibrium position in
// an array is a position such that the sum of elements before it is equal to the sum of elements after it. The valid index range is from [ 1, n-2 ] because there should be at least one element on both sides.

function equilibriumElement(N, arr) {
    //write code here
    for (let i = 1; i < N; i++) {
        let r_sum = 0;
        let l_sum = 0;
        for (let j = i - 1; j >= 0; j--) {
            r_sum += arr[j];
        }
        for (let j = i + 1; j < N; j++) {
            l_sum += arr[j];
        }
        if (r_sum == l_sum) {
            console.log(i);
            return;
        }
    }
    console.log(-1)
}

equilibriumElement(5, [15, 1, 5, 5, 5]) // 1
equilibriumElement(3, [1, 2, 3]) // -1