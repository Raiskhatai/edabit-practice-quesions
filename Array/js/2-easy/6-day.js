// 32 => Number of Arrays in an Array
// Return the total number of arrays inside a given array.

// function numOfSubbarrays(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       return arr.length;
//     } else {
//       return count;
//     }
//   }
// }

// function numOfSubbarrays(arr) {
//   let sum = arr.reduce((a, v) => {
//     if (Array.isArray(v)) {
//       return arr.length;
//     } else {
//       return a;
//     }
//   }, 0);
//   return sum;
// }

// function numOfSubbarrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Object.is(arr[i] - 0, NaN)) {
//       return arr.length;
//     } else {
//       return 0;
//     }
//   }
//   return sum;
// }

// console.log(numOfSubbarrays([[1, 2, 3]])); // 1
// console.log(
//   numOfSubbarrays([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
// ); // 3
// console.log(
//   numOfSubbarrays([
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//     [1, 2, 3],
//   ])
// ); // 4
// console.log(numOfSubbarrays([1, 2, 3])); // 0

// 33 => Check if All Values Are True
// Create a function that returns true if all parameters are truthy, and false otherwise.

// function allTruthy(...args) {
//   return val.every((item) => item);
// }

// function allTruthy(...args) {
//   let ret_val = true;
//   for (let i = 0; i < args.length; i++) {
//     if (!args[i]) {
//       return false;
//     }
//   }
//   return ret_val;
// }

// function allTruthy(...args) {
//   let val;
//   for (let i = 0; i < args.length; i++) {
//     if (args[i]) {
//       val = true;
//     } else {
//       return false;
//     }
//   }
//   return val;
// }

// console.log(allTruthy(true, true, true)); // true
// console.log(allTruthy(true, false, true)); // false
// console.log(allTruthy(5, 4, 3, 2, 1, 0)); // false

// 34=> Zip It, If You Can?
// Given an array of women and an array of men, either:

// Return "sizes don't match" if the two arrays have different sizes.
// If the sizes match, return an array of pairs, with the first woman paired with the first man, second woman paired with the second man, etc.

// function zipIt(arr1, arr2) {
//   let other = [];
//   if (arr1.length == arr2.length) {
//     for (let i = 0; i < arr1.length; i++) {
//       let newarr = [];
//       newarr[0] = arr1[i];
//       newarr[1] = arr2[i];
//       other[i] = newarr;
//     }
//     return other;
//   } else {
//     return `sizes don't match `;
//   }
// }

// console.log(zipIt(["Elise", "Mary"], ["John", "Rick"]));
// // [["Elise", "John"], ["Mary", "Rick"]]

// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh"]));
// // "sizes don't match"

// console.log(zipIt(["Ana", "Amy", "Lisa"], ["Bob", "Josh", "Tim"]));
// // [["Ana", "Bob"], ["Amy", "Josh"],["Lisa", "Tim"]]

// 35 => War of Numbers
// There's a great war between the even and odd numbers. Many numbers already lost their lives in this war and it's your task to end this. You have to determine which group sums larger: the evens, or the odds. The larger group wins.

// Create a function that takes an array of integers, sums the even and odd numbers separately, then returns the difference between the sum of the even and odd numbers.

// function warOfNumbers(arr) {
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even += arr[i];
//     } else {
//       odd += arr[i];
//     }
//   }
//   let result = 0;
//   even > odd ? (result = even - odd) : (result = odd - even);
//   return result;
// }

// function warOfNumbers(arr) {
//   let even = arr.reduce((a, v) => (v % 2 == 0 ? a + v : a), 0);
//   let odd = arr.reduce((a, v) => (v % 2 == 1 ? a + v : a), 0);
//   let result = 0;
//   even > odd ? (result = even - odd) : (result = odd - even);
//   return result;
// }

// console.log(warOfNumbers([2, 8, 7, 5])); // 2
// // // 2 + 8 = 10
// // 7 + 5 = 12
// // 12 is larger than 10
// // So we return 12 - 10 = 2

// console.log(warOfNumbers([12, 90, 75])); // 27
// console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243])); // 168

// 36=> Find NaN in an Array
// Create a function to find NaN in an array of numbers. The return value should be the index where NaN is found. If NaN is not found in the array, then return -1.

// function findNaN(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (Object.is(arr[i], NaN)) {
//       return i;
//     }
//   }
//   return -1;
// }

// function findNaN(arr) {
//   let index = -1;
//   arr.forEach((element, i) => {
//     if (Object.is(element, NaN)) {
//       index = i;
//     }
//   });
//   return index;
// }

// console.log(findNaN([1, 2, NaN])); // 2
// console.log(findNaN([NaN, 1, 2, 3, 4])); // 0
// console.log(findNaN([0, 1, 2, 3, 4])); // -1

// 37 => Mirror Array
// Given an integer array, transform that array into a mirror.

function mirror(arr) {
  let rev_arr = [...arr];
  rev_arr.reverse();
  rev_arr = rev_arr.slice(1);
  arr = arr.concat(rev_arr);
  return arr;
}

console.log(mirror([0, 2, 4, 6])); // [0, 2, 4, 6, 4, 2, 0]
console.log(mirror([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5, 4, 3, 2, 1]
console.log(mirror([3, 5, 6, 7, 8])); // [3, 5, 6, 7, 8, 7, 6, 5, 3]
