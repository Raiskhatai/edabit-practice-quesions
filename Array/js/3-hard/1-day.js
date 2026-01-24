// 1=>Seven Boom!
// Create a function that takes an array of numbers and return "Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array".

// function sevenBoom(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     while (num) {
//       let val = num % 10;
//       num = Math.floor(num / 10);
//       console.log(val);
//       if (val == 7) {
//         return "Boom!";
//       }
//     }
//   }
//   return "there is no 7 in the array";
// }

// console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7])); // "Boom!"
// // 7 contains the number seven.
// console.log(sevenBoom([8, 6, 33, 100])); // "there is no 7 in the array"
// // None of the items contain 7 within them.
// console.log(sevenBoom([2, 55, 60, 97, 86])); // "Boom!"

// 2=> Positive Dominant
// An array is positive dominant if it contains strictly more unique positive values than unique negative values. Write a function that returns true if an array is positive dominant.

// function isPositiveDominant(a) {
//   let other = [...new Set(a)];
//   let positive_count = 0;
//   let negative_count = 0;
//   for (let i = 0; i < other.length; i++) {
//     if (other[i] > 0) {
//       positive_count++;
//     } else if (other[i] < 0) {
//       negative_count++;
//     }
//   }
//   return positive_count > negative_count ? true : false;
// }

// function isPositiveDominant(a) {
//   let other = [...new Set(a)];
//   let poscont = 0;
//   let negcont = 0;
//   other.forEach((element) => {
//     element > 0 ? poscont++ : element < 0 ? negcont++ : 0;
//   });
//   return poscont > negcont ? true : false;
// }

// console.log(isPositiveDominant([1, 1, 1, 1, -3, -4])); // false
// // There is only 1 unique positive value (1).
// // There are 2 unique negative values (-3, -4).

// console.log(isPositiveDominant([5, 99, 832, -3, -4])); // true
// console.log(isPositiveDominant([5, 0])); // true
// console.log(isPositiveDominant([0, -4, -1])); // false

// 3=> Numbers in Strings
// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// function numInStr(arr) {
//   let retarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let numcont = 0;
//     let ohter = arr[i].split("");
//     for (let k = 0; k < ohter.length; k++) {
//       let val = Number(ohter[k]);
//       if (!Object.is(val, NaN) && val != 0) {
//         numcont++;
//       }
//     }
//     if (numcont > 0) {
//       retarr.push(arr[i]);
//     }
//   }
//   return retarr;
// }

// console.log(numInStr(["1", "a", " ", "b"])); //['1']
// console.log(numInStr(["1a", "a", "2b", "b"])); // ["1a", "2b"]
// console.log(numInStr(["abc", "abc10"])); // ["abc10"]
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"])); // ["ab10c", "a10bc"]
// console.log(numInStr(["this is a test", "test1"])); // ["test1"]

// 4 -> Number of Boomerangs
// A boomerang is a V-shaped sequence that is either upright or upside down. Specifically, a boomerang can be defined as: sub-array of length 3, with the first and last digits being the same and the middle digit being different.

// Some boomerang examples:

// [3, 7, 3], [1, -1, 1], [5, 6, 5]
// Create a function that returns the total number of boomerangs in an array.

// To illustrate:

// [3, 7, 3, 2, 1, 5, 1, 2, 2, -2, 2]
// 3 boomerangs in this sequence:  [3, 7, 3], [1, 5, 1], [2, -2, 2]
// Be aware that boomerangs can overlap, like so:

// [1, 7, 1, 7, 1, 7, 1]
// 5 boomerangs (from left to right): [1, 7, 1], [7, 1, 7], [1, 7, 1], [7, 1, 7], and [1, 7, 1]
// Examples

// function countBoomerangs(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length - 2; i++) {
//     if (arr[i] == arr[i + 2] && arr[i] != arr[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countBoomerangs([9, 5, 9, 5, 1, 1, 1])); // 2
// console.log(countBoomerangs([5, 6, 6, 7, 6, 3, 9])); // 1
// console.log(countBoomerangs([4, 4, 4, 9, 9, 9, 9])); // 0

// 5 => Length of a Nested Array
// The .length property on an array will return the number of elements in the array. For example, the array below contains 2 elements:

// [1, [2, 3]]
// 2 elements, number 1 and array [2, 3]
// Suppose we instead wanted to know the total number of non-nested items in the nested array. In the above case, [1, [2, 3]] contains 3 non-nested items, 1, 2 and 3.

// Write a function that returns the total number of non-nested items in a nested array.

// function getLength(arr) {
//   let other = arr.flat(Infinity);
//   return other.length;
// }

// console.log(getLength([1, [2, 3]])); // 3
// console.log(getLength([1, [2, [3, 4]]])); // 4
// console.log(getLength([1, [2, [3, [4, [5, 6]]]]])); // 6
// console.log(getLength([1, [2], 1, [2], 1])); // 5
