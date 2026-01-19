// 116 Identical Subarrays
// Create a function that takes in a two-dimensional array and returns the number of sub-arrays with only identical element.

// function countIdentical(arr) {
//   counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length == 1) {
//       counter++;
//     } else {
//       counter += checkval(arr[i]);
//     }
//   }

//   function checkval(val) {
//     flag = 0;
//     for (let k = 0; k < val.length - 1; k++) {
//       if (val[k] != val[k + 1]) {
//         return 0;
//       } else if (arr) {
//         flag = 1;
//       }
//     }
//     return flag;
//   }
//   return counter;
// }

// console.log(countIdentical([[1], [2], [3], [4]])); // 4
// // Single-item arrays still count as having identical elements.

// console.log(
//   countIdentical([
//     [1, 2],
//     [2, 3],
//     [3, 4],
//     [4, 4],
//   ]),
// ); // 1

// console.log(
//   countIdentical([[33, 33], [5], ["a", "a"], [2, 2, 2], [1, 2, 2], [3, 1]]),
// ); // 4
// // 4 arrays with identical elements: [33, 33], [5], ["a", "a"], and [2, 2, 2]

// console.log(
//   countIdentical([
//     ["@", "@", "@", "@"],
//     [2, 3],
//     [3, 4],
//     [4, 4],
//   ]),
// ); // 2

// 117 => One, Two, Skip a Few
// Create a function which calculates how many numbers are missing from an ordered number line. This number line starts at the first value of the array, and increases by 1 to the end of the number line, ending at the last value of the array.

// function howManyMissing(arr) {
//   if (arr.length == 0) {
//     return 0;
//   }
//   let start = arr[0];
//   let end = arr[arr.length - 1];
//   return end - start - arr.length + 1;
// }

// console.log(howManyMissing([1, 2, 3, 8, 9])); // 4
// // The number line starts at 1 and ends at 9 (so the numbers 0 and 10 aren't missing from it).
// // The numbers missing from this line are 4, 5, 6, and 7.
// // 4 numbers are missing.

// console.log(howManyMissing([1, 3])); // 1
// console.log(howManyMissing([7, 10, 11, 12])); // 2
// console.log(howManyMissing([1, 3, 5, 7, 9, 11])); // 5
// console.log(howManyMissing([5, 6, 7, 8])); // 0

// 118 => Merge Arrays in Order
// Given two arrays, merge them to one array and sort the new array in the same order as the first array.

// function mergeSort(arr1, arr2) {
//   if (arr2.length == 0) {
//     return arr1;
//   }
//   let other = arr1.concat(arr2);
//   other = other.sort((a, b) => a - b);
//   if (other[0] < 0) {
//     other = other.sort((a, b) => a - b).reverse();
//     return other;
//   } else {
//     return other;
//   }
// }

// console.log(mergeSort([1, 2, 3], [5, 4, 6])); // [1, 2, 3, 4, 5, 6]
// console.log(mergeSort([8, 6, 4, 2], [-2, -6, 0, -4])); // [8, 6, 4, 2, 0, -2, -4, -6]
// console.log(mergeSort([120, 180, 200], [190, 175, 130])); // [120, 130, 175, 180, 190, 200]
// console.log(mergeSort([25, 21, 17, 13], [])); // [25, 21, 17, 13]

// 119 => Good Match?
// In this challenge you will be given an array of numbers. Your task is to "marry" each pair of adjacent numbers by adding them, and return the array of "couples" (i.e. sums).

// If the array has an odd length, one number is (sadly) left out, so you should return "bad match".

// function isGoodMatch(arr) {
//   let length = arr.length;
//   total = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (length % 2 == 0) {
//       // total.push(add_two_elem(arr));
//       // return total.flat(1);
//       let val = [];
//       for (let i = 0; i < arr.length; i += 2) {
//         val.push(arr[i] + arr[i + 1]);
//       }
//       return val;
//     } else {
//       return "bad match";
//     }
//   }

//   //   function add_two_elem(item) {
//   //     let val = [];
//   //     for (let i = 0; i < item.length; i += 2) {
//   //       val.push(arr[i] + arr[i + 1]);
//   //     }
//   //     return val;
//   //   }
//   return total;
// }

// console.log(isGoodMatch([1, 2, 4, 7])); // [1+2, 4+7] // [3, 11]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2])); // [12, 8, 6]
// console.log(isGoodMatch([5, 7, 9, -1, 4, 2, 3])); // "bad match"
// console.log(isGoodMatch([2, 6, 7, -2, 4])); // "bad match"

// 120 Letters Shared between Two Words
// Create a function that returns the number of characters shared between two words.

// function sharedLetters(str1, str2) {
//   let count = 0;
//   for (let i = 0; i < str1.length; i++) {
//     for (let k = 0; k < str2.length; k++) {
//       if (str1[i] == str2[k] && str1[i] != str1[i + 1]) {
//         count++;
//         break;
//       }
//     }
//   }
//   return count;
// }

// console.log(sharedLetters("apple", "meaty")); // 2
// // // Since "ea" is shared between "apple" and "meaty".

// console.log(sharedLetters("fan", "forsook")); // 1
// console.log(sharedLetters("spout", "shout")); // 4
// console.log(sharedLetters("class", "last")); // 3
