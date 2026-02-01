// 25 => An Ordered Matrix
// Create an ordered 2D array (matrix). A matrix is ordered if its (0, 0) element is 1, its (0, 1) element is 2, and so on. Your function needs to create an a × b matrix. a is the first argument and b is the second.

// function orderedMatrix(a, b) {
//   let total = a * b;
//   let arr = [];
//   let num = 1;
//   for (let i = 0; i < a; i++) {
//     other = [];
//     for (let k = 1; k <= b; k++) {
//       other.push(num);
//       num++;
//     }
//     arr.push(other);
//   }
//   return arr;
// }

// console.log(orderedMatrix(5, 5)); // [
//   [1, 2, 3, 4, 5],
//   [6, 7, 8, 9, 10],
//   [11, 12, 13, 14, 15],
//   [16, 17, 18, 19, 20],
//   [21, 22, 23, 24, 25]
// ]
// console.log(orderedMatrix(1, 1)); // [[1]]
// console.log(orderedMatrix(1, 5)); // [[1, 2, 3, 4, 5]]

// 26 => Word to Bitstring to Boolean Array
// Create a function that converts a word to a bitstring and then to a boolean array based on the following criteria:

// Locate the position of the letter in the English alphabet (from 1 to 26).
// Odd positions will be represented as 1 and even positions will be represented as 0.
// Convert the represented positions to boolean values, 1 for true and 0 for false.
// Store the conversions into an array.

// function toBoolArray(word) {
//   let arr = [];
//   for (let i = 0; i < word.length; i++) {
//     let num = word[i].charCodeAt(0) - 96;
//     if (num % 2 == 0) arr.push(false);
//     else arr.push(true);
//   }
//   return arr;
// }

// function toBoolArray(word) {
//   let word_arr = word.split("");
//   let arr = word_arr.map((elem) => {
//     let num = elem.charCodeAt(0) - 96;
//     if (num % 2 == 0) return false;
//     else return true;
//   });
//   return arr;
// }

// console.log(toBoolArray("deep")); // [false, true, true, false]
// // deep converts to 0110
// // d is the 4th alphabet - 0
// // e is the 5th alphabet - 1
// // e is the 5th alphabet - 1
// // p is the 16th alphabet - 0

// console.log(toBoolArray("loves")); // [false, true, false, true, true]
// console.log(toBoolArray("tesh")); // [false, true, true, false]

// 27 => Moving Partition
// Create a function to partition an array from left to right.

// function movingPartition(arr) {
//   let other = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     let inside = [];
//     let outside = [];
//     for (l = 0; l <= i; l++) {
//       inside.push(arr[l]);
//     }
//     for (let k = i + 1; k <= arr.length - 1; k++) {
//       outside.push(arr[k]);
//     }
//     other.push([inside, outside]);
//   }
//   return other;
// }

// console.log(movingPartition([-1, -1, -1, -1])); // [[[-1], [-1, -1, -1]], [[-1, -1], [-1, -1]], [[-1, -1, -1], [-1]]]
// console.log(movingPartition([1, 2, 3, 4, 5])); // [[[1], [2, 3, 4, 5]], [[1, 2], [3, 4, 5]], [[1, 2, 3], [4, 5]], [[1, 2, 3, 4], [5]]]
// console.log(movingPartition([])); // []
