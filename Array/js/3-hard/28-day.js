// // 60 => Is It a Probability Matrix?
// // In probability theory, a probability matrix is a matrix such that:

// // The matrix is a square matrix (same number of rows as columns).
// // All entries are probabilities, i.e. numbers between 0 and 1.
// // All rows add up to 1.
// // The following is an example of a probability matrix:

// // [
// //   [0.5, 0.5, 0.0],
// //   [0.2, 0.5, 0.3],
// //   [0.1, 0.2, 0.7]
// // ]
// // Note that though all rows add up to 1, there is no restriction on the columns, which may or may not add up to 1.

// // Write a function that determines if a matrix is a probability matrix or not.

// function isProbMatrix(arr) {
//   let row = arr.length;
//   let col = arr[0].length;
//   if (col != row) return false;

//   let sum = [];

//   for (let i = 0; i < arr.length; i++) {
//     let valsum = 0;
//     let temparr = [];
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] < 0 || arr[i][k] > 1) {
//         return false;
//       } else {
//         valsum += arr[i][k];
//       }
//       temparr.push(valsum);
//     }
//     sum.push(temparr[arr[i].length - 1]);
//   }

//   for (let i = 0; i < sum.length - 1; i++) {
//     if (sum[i] != sum[i + 1]) return false;
//   }
//   return true;
// }

// console.log(
//   isProbMatrix([
//     [0.5, 0.5, 0.0],
//     [0.2, 0.5, 0.3],
//     [0.1, 0.2, 0.7],
//   ]),
// );
// // true

// console.log(
//   isProbMatrix([
//     [0.5, 0.5, 0.0],
//     [0.2, 0.5, 0.3],
//   ]),
// );
// // false

// // Not a square matrix.

// console.log(
//   isProbMatrix([
//     [2, -1],
//     [-1, 2],
//   ]),
// );
// // false

// // Entries not between 0 and 1.

// console.log(
//   isProbMatrix([
//     [0, 1],
//     [1, 0],
//   ]),
// );
// // true

// console.log(
//   isProbMatrix([
//     [0.5, 0.4],
//     [0.5, 0.6],
//   ]),
// );
// // false

// // Rows do not add to 1.

