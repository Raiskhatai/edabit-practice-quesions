// 30 => Return Duplicate Numbers
// Given an array nums where each integer is between 1 and 100, return a sorted array containing only duplicate numbers from the given nums array.

// function duplicateNums(nums) {
//   let obj = {};
//   for (let key of nums) {
//     obj[key];
//     if (obj[key]) {
//       obj[key] = obj[key] + 1;
//     } else obj[key] = 1;
//   }
//   let ret = [];
//   for (let key in obj) {
//     if (obj[key] > 1) {
//       ret.push(+key);
//     }
//   }
//   return ret.length == 0 ? null : ret;
// }

// function duplicateNums(nums) {
//   let ret = [];
//   for (let i = 0; i < nums.length; i++) {
//     for (let k = i + 1; k < nums.length; k++) {
//       if (nums[i] === nums[k]) {
//         ret.push(nums[i]);
//       }
//     }
//   }
//   ret = ret.sort((a, b) => a - b);
//   return ret.length < 1 ? null : ret;
// }

// console.log(duplicateNums([1, 2, 3, 4, 3, 5, 6])); // [3]
// console.log(duplicateNums([81, 72, 43, 72, 81, 99, 99, 100, 12, 54])); // [72, 81, 99]
// console.log(duplicateNums([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // null

// 31 => Multiplication Table
// Create a function that takes an integer n and returns multiplication table of 1 to n numbers up to nth multiple.

// function multTable(n) {
//   let ret = [];
//   for (let i = 1; i <= n; i++) {
//     let temparr = [];
//     for (let k = 1; k <= n; k++) {
//       temparr.push(i * k);
//     }
//     ret.push(temparr);
//   }
//   return ret;
// }

// console.log(multTable(2));
// // [
// //   [1, 2],
// //   [2, 4]
// // ]
// //
// console.log(multTable(3));
// // [
// //   [1, 2, 3],
// //   [2, 4, 6],
// //   [3, 6, 9]
// // ]

// console.log(multTable(5));
// [
//   [1, 2, 3, 4, 5],
//   [2, 4, 6, 8, 10],
//   [3, 6, 9, 12, 15],
//   [4, 8, 12, 16, 20],
//   [5, 10, 15, 20, 25]
// ]

// 32 => Triple Letter Groupings
// Given a string, return a sorted array of words formed from the first three letters, then the next three letters, shifting by only one.

// Worked Example
// threeLetterCollection("edabit") ➞ ["abi", "bit", "dab", "eda"]
// 1st word: "eda"
// 2nd word: "dab"
// 3rd word: "abi"
// 4th word: "bit"
// Remember to sort the array!

// function threeLetterCollection(s) {
//   let ret = [];
//   if (s.length < 3) return [];
//   else if (s.lenght == 3) return s;
//   else {
//     for (let i = 0; i < s.length - 2; i++) {
//       ret.push(s.slice(i, i + 3));
//     }
//   }
//   ret = ret.sort();
//   return ret;
// }

// function threeLetterCollection(s) {
//   s = s.split("");
//   let ret = [];
//   if (s.length < 3) return [];
//   else if (s.length == 2) return s;
//   else {
//     for (let i = 0; i < s.length - 2; i++) {
//       let str = "";
//       for (let k = i; k < i + 3; k++) {
//         str += s[k];
//       }
//       ret.push(str);
//     }
//   }
//   ret = ret.sort();
//   return ret;
// }

// console.log(threeLetterCollection("slap")); // ["lap", "sla"]
// console.log(threeLetterCollection("click")); // ["cli", "ick", "lic"]
// console.log(threeLetterCollection("cat")); // ["cat"]
// console.log(threeLetterCollection("hi")); // []
