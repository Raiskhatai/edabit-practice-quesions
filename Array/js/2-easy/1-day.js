// 1 =>  Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr) {
//   arr.sort((a, b) => a - b);
//   let r_arr = [];
//   r_arr[0] = arr[0];
//   r_arr[1] = arr[arr.length - 1];
//   return r_arr;
// }

// function minMax(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr.length; k++) {
//       if (arr[k] > arr[k + 1]) {
//         let temp = arr[k];
//         arr[k] = arr[k + 1];
//         arr[k + 1] = temp;
//       }
//     }
//   }
//   let newarr = [];
//   newarr[0] = arr[0];
//   newarr[1] = arr[arr.length - 1];
//   return newarr;
// }

// function minMax(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }

//   let min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min) {
//       min = arr[i];
//     }
//   }

//   let newarr = [];
//   newarr[0] = min;
//   newarr[1] = max;
//   return newarr;
// }

// console.log(minMax([1, 2, 3, 4, 5])); //  [1, 5]
// console.log(minMax([2334454, 5])); //  [5, 2334454]
// console.log(minMax([1])); //  [1, 1]

// 2=> Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// 1 arr1's min is greater than arr2's min.
// 2 arr1's max is less than arr2's max.

// function canNest(arr1, arr2) {
//   arr1.sort((a, b) => a - b);
//   arr2.sort((a, b) => a - b);
//   if (arr1[0] > arr2[0] || arr1[arr1.length - 1] < arr2[arr2.length - 1]) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(canNest([1, 2, 3, 4], [0, 6])); //  true
// console.log(canNest([3, 1], [4, 0])); //  true
// console.log(canNest([9, 9, 8], [8, 9])); //  false
// console.log(canNest([1, 2, 3, 4], [2, 3])); //  false

// 3 => Clone an Array
// The Code tab has a code which attempts to add a clone of an array to itself. There is no error message, but the results are not as expected. Can you fix the code?

// function clone(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newarr[i] = arr[i];
//   }
//   newarr.push(arr);
//   return newarr;
// }

// function clone(arr) {
//   let newarr = [...arr];
//   newarr.push(arr);
//   return newarr;
// }

// function clone(arr) {
//   let newarr = arr.slice();
//   newarr.splice(newarr.length, 0, arr);
//   return newarr;
// }

// function clone(arr) {
//   let newarr = [...arr];
//   newarr[arr.length] = arr;
//   return newarr;
// }

// console.log(clone([1, 1])); // [1, 1, [1, 1]]
// console.log(clone([1, 2, 3])); // [1, 2, 3, [1, 2, 3]]
// console.log(clone(["x", "y"])); // ["x", "y", ["x", "y"]]

// 4=> Finding Nemo
// You're given a string of words. You need to find the word "Nemo", and return a string like this: "I found Nemo at [the order of the word you find Nemo]!".

// If you can't find Nemo, return "I can't find Nemo :(".

// function findNemo(str) {
//   let index = str.split(" ");
//   index = index.indexOf("Nemo");
//   if (index >= 0) {
//     return `I found Nemo at ${index + 1}!`;
//   } else {
//     return `I can't find Nemo :(`;
//   }
// }

// console.log(findNemo("I am finding Nemo !")); //  "I found Nemo at 4!"
// console.log(findNemo("Nemo is me")); //  "I found Nemo at 1!"
// console.log(findNemo("I Nemo am")); //  "I found Nemo at 2!"

// 5=> Total Volume of All Boxes
// Given an array of boxes, create a function that returns the total volume of all those boxes combined together. A box is represented by an array with three elements: length, width and height.

// For instance, totalVolume([2, 3, 2], [6, 6, 7], [1, 2, 1]) should return 266 since (2 x 3 x 2) + (6 x 6 x 7) + (1 x 2 x 1) = 12 + 252 + 2 = 266.

// function totalVolume(...arrs) {
//   let sum = 0;
//   for (let i = 0; i < arrs.length; i++) {
//     let multi = 1;
//     for (let k = 0; k < arrs[i].length; k++) {
//       multi *= arrs[i][k];
//     }
//     sum += multi;
//   }
//   return sum;
// }

// console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1])); //  63
// console.log(totalVolume([2, 2, 2], [2, 1, 1])); //  10
// console.log(totalVolume([1, 1, 1])); //  1

// 6 => Hitting the Jackpot
// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.

// function testJackpot(arr) {
//   let result = arr.every((item, i, arr) => item == arr[0]);
//   return result;
// }

// function testJackpot(arr) {
//   let result = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[0]) {
//       result = false;
//     }
//   }
//   return result;
// }

// console.log(testJackpot(["@", "@", "@", "@"])); // true
// console.log(testJackpot(["abc", "abc", "abc", "abc"])); // true
// console.log(testJackpot(["SS", "SS", "SS", "SS"])); // true
// console.log(testJackpot(["&&", "&", "&&&", "&&&&"])); // false
// console.log(testJackpot(["SS", "SS", "SS", "Ss"])); // false
