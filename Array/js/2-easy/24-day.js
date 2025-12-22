// 74 => Flatten the Curve
// Given an array of integers, replace every number with the mean of all numbers.

// function flattenCurve(arr) {
//   let max = arr.reduce((a, v) => a + v, 0);
//   let min = max / arr.length;
//   arr = arr.fill(min);
//   return arr;
// }

// function flattenCurve(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     max += arr[i];
//   }
//   let min = max / arr.length;
//   let rarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     rarr[i] = min;
//   }
//   return rarr;
// }

// console.log(flattenCurve([1, 2, 3, 4, 5])); // [3, 3, 3, 3, 3]
// console.log(flattenCurve([0, 0, 0, 2, 7, 3])); // [2, 2, 2, 2, 2, 2]
// console.log(flattenCurve([4])); // [4]
// console.log(flattenCurve([])); // []

// 75 => The Museum of Incredibly DULL Things
// A museum wants to get rid of some exhibitions. Katya, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and removes the one with the lowest rating. Just as she finishes rating the exhibitions, she's called off to an important meeting. She asks you to write a program that tells her the ratings of the items after the lowest one is removed.

// Create a function that takes an array of integers and removes the smallest value.

// function removeSmallest(arr) {
//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }
//   let index;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === min) {
//       index = i;
//       break;
//     }
//   }
//   arr.splice(index, 1);
//   return arr;
// }

// function removeSmallest(arr) {
//   let copyarr = [...arr];
//   copyarr.sort((a, b) => a - b);
//   let index = arr.indexOf(copyarr[0]);
//   arr.splice(index, 1);
//   return arr;
// }

// console.log(removeSmallest([1, 2, 3, 4, 5])); // [2, 3, 4, 5]
// console.log(removeSmallest([5, 3, 2, 1, 4])); // [5, 3, 2, 4]
// console.log(removeSmallest([2, 2, 1, 2, 1])); // [2, 2, 2, 1]
