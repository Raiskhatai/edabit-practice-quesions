// 86 => Find Unique Number in Array
// Create a function that takes an array of integers as an argument and returns a unique number from that array. All numbers except unique ones have the same number of occurrences in the array.

// function findSingleNumber(arr) {
//   let val = null;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) == arr.lastIndexOf(arr[i])) {
//       val = arr[i];
//     }
//   }
//   return val;
// }

// function findSingleNumber(arr) {
//   let val = null;
//   arr.forEach((item) => {
//     if (arr.indexOf(item) === arr.lastIndexOf(item)) {
//       val = item;
//     }
//   });
//   return val;
// }

// console.log(findSingleNumber([2, 2, 2, 3, 4, 4, 4])); // 3
// console.log(findSingleNumber([2])); // 2
// console.log(findSingleNumber([])); // null
// console.log(
//   findSingleNumber([
//     7, 13, 3, 6, 5, 4, 4, 13, 5, 3, 6, 7, 6, 5, 3, 13, 4, 7, 13, 5, 7, 4, 3, 6,
//     8, 4, 3, 7, 5, 6, 13,
//   ])
// ); // 8
// console.log(
//   findSingleNumber([
//     1, 2, 3, 6, 5, 4, 4, 2, 5, 3, 6, 1, 6, 5, 3, 2, 4, 1, 2, 5, 1, 4, 3, 6, 101,
//     4, 3, 1, 5, 6, 2,
//   ])
// ); // 101

// 87 =>Perfect Square Patch
// Create a function that takes an integer and outputs an n x n square solely consisting of the integer n.

// function squarePatch(val) {
//   let arr = [];
//   for (let i = 0; i < val; i++) {
//     let other = [];
//     for (let k = 0; k < val; k++) {
//       other[k] = val;
//     }
//     arr.push(other);
//   }
//   return arr;
// }

// console.log(squarePatch(3));
// //  [
// //   [3, 3, 3],
// //   [3, 3, 3],
// //   [3, 3, 3]
// // ]

// console.log(squarePatch(5));
// //  [
// //   [5, 5, 5, 5, 5],
// //   [5, 5, 5, 5, 5],
// //   [5, 5, 5, 5, 5],
// //   [5, 5, 5, 5, 5],
// //   [5, 5, 5, 5, 5]
// // ]

// console.log(squarePatch(1));
// //  [
// //   [1]
// // ]

// console.log(squarePatch(0));
//  []

// 88 => Ping Pong!
// A game of table tennis almost always sounds like Ping! followed by Pong! Therefore, you know that Player 2 has won if you hear Pong! as the last sound (since Player 1 didn't return the ball back).

// Given an array of Ping!, create a function that inserts Pong! in between each element. Also:

// If win equals true, end the list with Pong!.
// If win equals false, end with Ping! instead.

// function pingPong(arr, win) {
//   let other = [];
//   if (win == true) {
//     for (let i = 0; i < arr.length; i++) {
//       other[i] = ["Ping!", "Pong!"];
//     }
//   } else {
//     for (let i = 0; i <= arr.length; i++) {
//       if (i % 2 == 0) {
//         other[i] = "Ping!";
//       } else {
//         other[i] = "Pong!";
//       }
//     }
//   }
//   return other.flat(Infinity);
// }

// console.log(pingPong(["Ping!"], true)); // ["Ping!", "Pong!"]
// console.log(pingPong(["Ping!", "Ping!"], false)); // ["Ping!", "Pong!", "Ping!"]
// console.log(pingPong(["Ping!", "Ping!", "Ping!"], true)); // ["Ping!", "Pong!", "Ping!", "Pong!", "Ping!", "Pong!"]
