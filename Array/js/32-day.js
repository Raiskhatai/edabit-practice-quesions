// Spelling it Out
// Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

// function spelling(str) {
//   let arr = [];
//   let temp = "";
//   for (let i = 0; i < str.length; i++) {
//     temp += str[i];
//     arr[i] = temp;
//   }
//   return arr;
// }

// function spelling(str) {
//   let arr = [];
//   for (let i = 0; i < str.length; i++) {
//     arr[i] = str.slice(0, i + 1);
//   }
//   return arr;
// }

// console.log(spelling("bee")); //  ["b", "be", "bee"]
// console.log(spelling("happy")); //  ["h", "ha", "hap", "happ", "happy"]
// console.log(spelling("eagerly")); //  ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

// 2=> How Much is True?
// Create a function which returns the number of true values there are in an array.

// function countTrue(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === true) {
//       count++;
//     }
//   }
//   return count;
// }

// function countTrue(arr) {
//   let newarr = arr.filter((item) => item === true);
//   let count = newarr.length;
//   return count;
// }

// console.log(countTrue([true, false, false, true, false])); //  2
// console.log(countTrue([false, false, false, false])); //  0
// console.log(countTrue([])); //  0

// 3=> First and Last Index
// Given a word, write a function that returns the first index and the last index of a character.

// function charIndex(str, val) {
//   let arr = [];
//   if (str.includes(val)) {
//     arr[0] = str.indexOf(val);
//     arr[1] = str.lastIndexOf(val);
//   } else {
//     return undefined;
//   }
//   return arr;
// }

// function charIndex(str, val) {
//   let index = [];
//   let j = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == val) {
//       index[j] = i;
//       j++;
//     }
//   }
//   if (index.length < 1) {
//     return undefined;
//   } else {
//     let newindex = [];
//     newindex[0] = index[0];
//     newindex[1] = index[index.length - 1];
//     return newindex;
//   }
// }

// console.log(charIndex("hello", "l")); //  [2, 3]
// // The first "l" has index 2, the last "l" has index 3.

// console.log(charIndex("circumlocution", "c")); //  [0, 8]
// // The first "c" has index 0, the last "c" has index 8.

// console.log(charIndex("happy", "h")); //  [0, 0]
// // Only one "h" exists, so the first and last index is 0.

// console.log(charIndex("happy", "e")); //  undefined
// // "e" does not exist in "happy", so we return undefined.

