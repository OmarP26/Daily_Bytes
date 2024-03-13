// Given an array of integers, return whether or not two numbers sum to a given target, k.
// Note: you may not sum a number with itself.

// Ex: Given the following...

// [1, 3, 8, 2], k = 10, return true (8 + 2)
// [3, 9, 13, 7], k = 8, return false
// [4, 2, 6, 5, 2], k = 4, return true (2 + 2)

function canSum(arr, k) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === k) {
                return true
            }
        }
    }
    return false
}

console.log(canSum([1, 3, 8, 2], 10));
console.log(canSum([3, 9, 13, 7], 8));
console.log(canSum([4, 2, 6, 5, 2], 4));