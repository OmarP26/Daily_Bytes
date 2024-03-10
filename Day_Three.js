// Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

// Ex: Given the following strings...

// "LR", return true
// "URURD", return false
// "RUULLDRD", return true

//First Attempt
function returnedToOrigin(str) {
  let moves = str.split("");
  let rightMoves = 0;
  let leftMoves = 0;
  let upMoves = 0;
  let downMoves = 0;
  moves.forEach((el) => {
    if (el === "R") {
      rightMoves += 1;
    } else if (el === "L") {
      leftMoves += 1;
    } else if (el === "U") {
      upMoves += 1;
    } else {
      downMoves += 1;
    }
  });
  sameLRMoves = leftMoves === rightMoves;
  sameUDMoves = upMoves === downMoves;
  return sameLRMoves && sameUDMoves;
}

//Improved Solution
function improveReturnedToOrigin(str) {
  let moves = str.split("");
  let moveCounts = {
    L: 0,
    R: 0,
    U: 0,
    D: 0,
  };

  for (let move of moves) {
    moveCounts[move] += 1;
  }

  return moveCounts.R === moveCounts.L && moveCounts.U === moveCounts.D;
}

console.log("LR " + returnedToOrigin("LR"));
console.log("URURD " + returnedToOrigin("URURD"));
console.log("RUULLDRD " + returnedToOrigin("RUULLDRD"));

console.log("LR " + improveReturnedToOrigin("LR"));
console.log("URURD " + improveReturnedToOrigin("URURD"));
console.log("RUULLDRD " + improveReturnedToOrigin("RUULLDRD"));
