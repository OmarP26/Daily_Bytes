// Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
// Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

// Ex: Given the following strings...

// "level", return true
// "algorithm", return false
// "A man, a plan, a canal: Panama.", return true

function isPalindrome(str) {
  str = str.replaceAll(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let reversedStr = str.split("").reverse().join("");

  return str === reversedStr;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("algorithm"));
console.log(isPalindrome("A man, a plan, a canal: Panama"));
