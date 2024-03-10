// Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

// Ex: Given the following strings...

// "USA", return true
// "Calvin", return true
// "compUter", return false
// "coding", return true

function checkCapitalization(inputString) {
  if (
    inputString === inputString.toUpperCase() ||
    inputString === inputString.toLowerCase() ||
    inputString[0] === inputString[0].toUpperCase()
  ) {
    return true;
  }
  return false;
}

console.log("USA " + checkCapitalization("USA"));
console.log("Calvin " + checkCapitalization("Calvin"));
console.log("compUter " + checkCapitalization("compUter"));
console.log("coding " + checkCapitalization("coding"));
