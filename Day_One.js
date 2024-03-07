// Given a string, reverse all of its characters and return the resulting string.

// Ex: Given the following strings...

// “Cat”, return “taC”
// “The Daily Byte”, return "etyB yliaD ehT”
// “civic”, return “civic”

const reverseString = (str) => {
  newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

console.log(reverseString("Cat"));
console.log(reverseString("The Daily Byte"));
console.log(reverseString("civic"));
