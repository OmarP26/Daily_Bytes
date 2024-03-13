// This question is asked by Facebook. Given a string and the ability to delete at most one character, return whether or not it can form a palindrome.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "abcba", return true
// "foobof", return true (remove the first 'o', the second 'o', or 'b')
// "abccab", return false

function isPalindrome(str) {
    str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = str.split("").reverse()
    let strArr = str.split("")
    let count = 0

    for (let i = 0; i <= str.length -1; i++) {
        if (strArr[i] !== reversedStr[i] && count < 2) {
            strArr[i] = ""
            count++
        }
    }
    str = strArr.join("")
    reversedStr = str.split("").reverse().join("")
    return str === reversedStr

}

console.log(isPalindrome("abcba"))
console.log(isPalindrome("foobof"))
console.log(isPalindrome("abccab"))
console.log(isPalindrome("anita lava la tina"))