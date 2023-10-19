// You have N socks. The color of the i-th sock is A[i] . Here A represents the array of socks.
// You want to perform the following operation as many times as possible. How many times can it be performed at most?
// Choose two same-colored socks that are not paired yet, and pair them.
// Print the number of Paired Socks.
// Note: One sock can only be used to make one pair.

function socks(N, A) {
    //Write Code Here
    let obj = {};
    for (let i = 0; i < N; i++) {
        obj[A[i]] = (obj[A[i]] || 0) + 1
    }
    let count = 0;
    for (let key in obj) {
        if (obj[key] % 2 == 0) {
            count += obj[key] / 2;
        } else if (obj[key] !== 1 && obj[key] % 2 == 1) {
            count += Math.floor(obj[key] / 2)
        }
    }
    console.log(count)
}

var arr = [4, 1, 7, 4, 1, 4]
socks(arr.length, arr); // Output = 2;

var arr = [295, 2, 29, 295, 29, 2, 29, 295, 2, 29]
socks(arr.length, arr); // Output = 4;

var arr = [158260522]; // When Only one Element is there in array.
socks(arr.length, arr); // Output = 0;