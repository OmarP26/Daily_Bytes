// Given a string representing your stones and another string representing a list of jewels, return the number of stones that you have that are also jewels.

// Ex: Given the following jewels and stones...

// jewels = "abc", stones = "ac", return 2
// jewels = "Af", stones = "AaaddfFf", return 3
// jewels = "AYOPD", stones = "ayopd", return 0

function isJewel(jewels, stones) {
    let count = 0
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            count += 1
        }
    }

    return count;
}

console.log(isJewel("abc", "ac"));
console.log(isJewel("Af", "AaaddfFf"));
console.log(isJewel("AYOPD", "ayopd"));