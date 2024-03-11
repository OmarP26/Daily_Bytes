// Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
// Note: neither binary string will contain leading 0s unless the string itself is 0

// Ex: Given the following binary strings...

// "100" + "1", return "101"
// "11" + "1", return "100"
// "1" + "0", return  "1"

function addBinaryStrings(str1, str2) {
  let carry = 0;
  let result = "";
  let i = str1.length - 1;
  let j = str2.length - 1;
  while (i >= 0 || j >= 0 || carry) {
    let sum = carry;
    if (i >= 0) sum += Number(str1[i--]);
    if (j >= 0) sum += Number(str2[j--]);
    result = (sum % 2) + result;
    carry = Math.floor(sum / 2);
  }
  return result;
}

console.log(addBinaryStrings("100", "1"));
console.log(addBinaryStrings("100", "101"));
console.log(addBinaryStrings("11", "1"));
console.log(addBinaryStrings("1", "0"));
