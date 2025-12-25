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
