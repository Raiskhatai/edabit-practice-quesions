// 70 =>Lonely Integer
// You are given an array of integers having both negative and positive values, except for one integer which can be negative or positive. Create a function to find out that integer.

// function lonelyInteger(arr) {
//   let other = new Set(arr);
//   for (let x of arr) {
//     if (other.has(-x)) {
//       other.delete(-x);
//     } else {
//       other.add(x);
//     }
//   }
//   return [...other][0];
// }

// console.log(lonelyInteger([1, -1, 2, -2, 3])); // 3
// // // 3 has no matching negative appearance.
// console.log(lonelyInteger([-3, 1, 2, 3, -1, -4, -2])); // -4
// // // -4 has no matching positive appearance.
// console.log(lonelyInteger([-9, -105, -9, -9, -9, -9, 105])); // -9

// 71 => Scalable Mountain?
// Given an array of numbers, representing the height of a mountain in certain intervals, return whether this mountain is scalable.

// A mountain can be considered scalable if each number is within 5 units of the next number in either direction.

// function isScalable(arr) {
//   let val = true;
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] - arr[i + 1] >= -5 && arr[i] - arr[i + 1] <= 5) {
//       val = true;
//     } else {
//       val = false;
//       break;
//     }
//   }
//   return val;
// }

// console.log(isScalable([1, 2, 4, 6, 7, 8])); // true
// console.log(isScalable([40, 45, 50, 45, 47, 52])); // true
// console.log(isScalable([2, 9, 11, 10, 18, 21])); // false

// 72 => Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// function checkSum(arr, n) {
//   let r_val = false;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[i] + arr[k + 1] == n) {
//         return true;
//       }
//     }
//   }
//   return r_val;
// }

// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); // true
// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)); // true
// console.log(checkSum([0, 98, 76, 23], 174)); // true
// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); // false
// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)); // false
