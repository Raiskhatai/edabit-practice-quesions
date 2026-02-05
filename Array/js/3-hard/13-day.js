// 36 => Enter the Matrix
// In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!

// Given a matrix mtx, implement a function that returns the complete sentence as a string, with the words separated by a space between them.

// function transposeMatrix(mtx) {
//   let arr = [...mtx];
//   arr = arr.flat(1);
//   let str = "";
//   if (arr.length == 3) {
//     for (let i = 0; i < arr.length; i++) {
//       str += " " + arr[i];
//     }
//     return str.trim();
//   }
//   for (let i = 0; i < mtx[0].length; i++) {
//     for (let k = i; k < arr.length; k += mtx[0].length) {
//       str += " " + arr[k];
//     }
//   }
//   str = str.trim();
//   return str;
// }

// console.log(
//   transposeMatrix([
//     ["If", "killed", "you"],
//     ["you", "in", "die"],
//     ["are", "Matrix", "here?"],
//   ]),
// ); // "If you are killed in Matrix you die here?")

// console.log(transposeMatrix([["Enter"], ["the"], ["Matrix!"]])); // "Enter the Matrix!"
// console.log(
//   transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."],
//   ]),
// ); // "The columns are rows."

// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ]),
// ); // "You must transpose the table order."

// 37 => Longest Word in a 7 Segment Display
// Given an array of words, return the longest word which can fit on a 7 segment display.

// Image of a 7 segment display

// Letters which do not fit on a 7 segment display are k, m, v, w and x.
// Therefore, do not count words which include these letters.

// function longest7SegmentWord(arr) {
//   ret = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       !arr[i].includes("k") &&
//       !arr[i].includes("m") &&
//       !arr[i].includes("v") &&
//       !arr[i].includes("x") &&
//       !arr[i].includes("w")
//     ) {
//       ret.push(arr[i]);
//     }
//   }
//   let max = -Infinity;
//   let maxValue = "";
//   if (ret.length <= 0) return "";
//   else {
//     for (let i = 0; i < ret.length; i++) {
//       if (max < ret[i].length) {
//         max = ret[i].length;
//         maxValue = ret[i];
//       }
//     }
//     return maxValue;
//   }
// }

// console.log(
//   longest7SegmentWord([
//     "act",
//     "adjust",
//     "proud",
//     "battery",
//     "tear",
//     "beautiful",
//     "avenue",
//     "thoughtful",
//     "victory",
//     "mobile",
//     "straight",
//   ]),
// ); // "thoughtful"),
// console.log(
//   longest7SegmentWord(["knighthood", "parental", "fridge", "clingfilm"]),
// ); // "parental"
// console.log(
//   longest7SegmentWord(["coding", "crackers", "edabit", "celebration"]),
// ); // "celebration"
// console.log(longest7SegmentWord(["velocity", "mackerel", "woven", "kingsmen"])); // ""

// 38 => Rock, Paper, Scissors!
// Abigail and Benson are playing Rock, Paper, Scissors.

// Each game is represented by an array of length 2, where the first element represents what Abigail played and the second element represents what Benson played.

// Given a sequence of games, determine who wins the most number of matches. If they tie, output "Tie".

// R stands for Rock
// P stands for Paper
// S stands for Scissors

// function calculateScore(games) {
//   let Abigail = 0;
//   let Benson = 0;
//   for (let i = 0; i < games.length; i++) {
//     if (games[i][0] == "R" && games[i][1] === "P") {
//       Benson++;
//     } else if (games[i][0] == "P" && games[i][1] === "S") {
//       Benson++;
//     } else if (games[i][0] == "S" && games[i][1] === "R") {
//       Benson++;
//     } else if (games[i][0] == games[i][1]) {
//       Abigail++;
//       Benson++;
//     } else {
//       Abigail++;
//     }
//   }
//   return Abigail > Benson ? "Abigail" : Abigail == Benson ? "Tie" : "Benson";
// }

// console.log(
//   calculateScore([
//     ["R", "P"],
//     ["R", "S"],
//     ["S", "P"],
//   ]),
// ); // "Abigail"

// // Benson wins the first game (Paper beats Rock).
// // Abigail wins the second game (Rock beats Scissors).
// // Abigail wins the third game (Scissors beats Paper).
// // Abigail wins 2/3.

// console.log(
//   calculateScore([
//     ["R", "R"],
//     ["S", "S"],
//   ]),
// ); // "Tie"

// console.log(
//   calculateScore([
//     ["S", "R"],
//     ["R", "S"],
//     ["R", "R"],
//   ]),
// ); // "Tie"

// 39 => Divide Array into Chunks
// Write a function that divides an array into chunks of size n, where n is the length of each chunk.

// function chunkify(arr, size) {
//   let other = [];
//   for (let i = 0; i < arr.length; i += size) {
//     other.push(arr.slice(i, i + size));
//   }
//   return other;
// }

// console.log(chunkify([2, 3, 4, 5], 2)); // [[2, 3], [4, 5]]
// console.log(chunkify([2, 3, 4, 5, 6], 2)); // [[2, 3], [4, 5], [6]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 3)); // [[2, 3, 4], [5, 6, 7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 1)); // [[2], [3], [4], [5], [6], [7]]
// console.log(chunkify([2, 3, 4, 5, 6, 7], 7)); // [[2, 3, 4, 5, 6, 7]]

// 40 => Convert "Zero" and "One" to "1" and "0"
// Create a function that takes a string as an argument. The function must return a string containing 1s and 0s based on the string argument's words. If any word in the argument is not equal to "zero" or "one" (case insensitive), you should ignore it. The returned string's length should be a multiple of 8, if the string is not a multiple of 8 you should remove the numbers in excess.

function textToNumberBinary(str) {
  str = str.split(" ");
  ret = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === "zero") {
      ret += 0;
    } else if (str[i].toLowerCase() == "one") {
      ret += 1;
    }
  }
  if (ret.length < 8) {
    return "";
  } else if (ret.length % 8 == 0) {
    return ret;
  } else {
    result = ret.length % 8;
    result = ret.slice(0, ret.length - result);
    return result;
  }
}

console.log(
  textToNumberBinary("one zero zero one zero ten one one one one two"),
); // "10010111")
console.log(textToNumberBinary("zero one zero one zero one zero one")); // "01010101"
console.log(textToNumberBinary("Zero one zero ONE zero one zero one")); // "01010101"
console.log(textToNumberBinary("zero one zero one zero one zero one one two")); // 01010101"
console.log(textToNumberBinary("zero one zero one zero one zero three")); // ""
console.log(textToNumberBinary("one one")); // ""
