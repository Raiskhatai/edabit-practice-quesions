// 96 => Total Count of Numbers in a MultiDimensional Array
// Create a function that takes a multidimensional array and return the total count of numbers in that array.

// function countNumber(arr) {
//   arr = arr.flat(Infinity);
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       count++;
//     }
//   }
//   return count;
// }

// function countNumber(arr) {
//   arr = arr.flat(Infinity);
//   let count = 0;
//   arr.forEach((item) => (typeof item === "number" ? count++ : 0));
//   return count;
// }

// console.log(countNumber([["", 17.2, 5, "edabit"]])); // 2
// // 17.2 and 5.
// console.log(countNumber([[[[[2, 14]]], 2, 3, 4]])); // 5
// // 2, 14, 2, 3 and 4.
// console.log(countNumber([["balkot"]])); // 0
