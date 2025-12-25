// 76 => Moving to the End
// Write a function that moves all elements of one type to the end of the array.

// function moveToEnd(arr, val) {
//   for (let i = arr.length - 1; i >= 0; i--) {
//     if (arr[i] == val) {
//       arr.splice(i, 1);
//       arr[arr.length] = val;
//     }
//   }
//   return arr;
// }

// console.log(moveToEnd([1, 3, 2, 4, 4, 1], 1)); // [3, 2, 4, 4, 1, 1]// Move all the 1s to the end of the array.
// console.log(moveToEnd([7, 8, 9, 1, 2, 3, 4], 9)); // [7, 8, 1, 2, 3, 4, 9]
// console.log(moveToEnd(["a", "a", "a", "b"], "a")); // ["b", "a", "a", "a"]

// 77 => An Introduction to the Map-Reduce Pattern
// You will be implementing a basic case of the map-reduce pattern in programming. Use the built in JavaScript array functions .map() and .reduce() to solve the following problem.

// Given a vector stored as an array of numbers, find the magnitude of the vector (this is similar to the function Math.hypot()). Use the standard distance formula for n-dimensional Cartesian coordinates.

// function magnitude(arr) {
//   let square = arr.map((val) => val * val);
//   let val = square.reduce((a, v) => a + v, 0);
//   return Math.sqrt(val);
// }

// function magnitude(arr) {
//   let square = [];
//   for (let i = 0; i < arr.length; i++) {
//     square[i] = arr[i] * arr[i];
//   }
//   let val = 0;
//   for (let i = 0; i < arr.length; i++) {
//     val += square[i];
//   }
//   return Math.sqrt(val);
// }

// console.log(magnitude([3, 4])); // 5
// console.log(magnitude([0, 0, -10])); // 10
// console.log(magnitude([])); // 0
// console.log(magnitude([2, 3, 6, 1, 8])); // 10.677078252031311
