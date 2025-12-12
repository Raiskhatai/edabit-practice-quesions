// 63 => Fruit Salad 🍇🍓🍎
// Fruit salads are served best when the fruits are sliced and diced into small chunks!

// For this challenge, slice each fruit in half and sort the chunks alphabetically. This recipe tastes best when the chunks are joined together to make a string.

// Worked Example
// console.log(fruitSalad(["apple", "pear", "grapes"])); // "apargrapepesple"

// Chunks: ["ap", "ple", "pe", "ar", "gra", "pes"]
// Sorted chunks: ["ap", "ar", "gra", "pe", "pes", "ple"]
// Final string: "apargrapepesple"

// function fruitSalad(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let divide = arr[i].length / 2;
//     let first_half = arr[i].length - divide;
//     first_half = Math.floor(first_half);
//     newarr[j] = arr[i].slice(0, first_half);
//     j++;
//     newarr[j] = arr[i].slice(first_half);
//     j++;
//   }

//   newarr = newarr.sort();
//   let val = newarr.join("");
//   return val;
// }

// function fruitSalad(arr) {
//   let newarr = arr.map((item) => {
//     j = 0;
//     let half = item.length / 2;
//     let first_half = item.length - half;
//     first_half = Math.floor(first_half);
//     let f_h_val = item.slice(0, first_half);
//     let s_h_val = item.slice(first_half);
//     let temp = [];
//     temp[j] = f_h_val;
//     j++;
//     temp[j] = s_h_val;
//     return temp;
//   });

//   newarr = newarr.flat(1);
//   newarr = newarr.sort();
//   let val = newarr.join("");
//   return val;
// }

// console.log(fruitSalad(["apple", "pear", "grapes"])); // "apargrapepesple"
// console.log(fruitSalad(["raspberries", "mango"])); // "erriesmangoraspb"
// console.log(fruitSalad(["banana"])); // "anaban"

// 64 => Stand in Line
// Write a function that takes an array and a number as arguments. Add the number to the end of the array, then remove the first element of the array. The function should then return the updated array.

// function nextInLine(arr, val) {
//   if (arr.length == 0) {
//     return "No array has been selected";
//   } else {
//     arr.splice(0, 1);
//     arr.splice(arr.length, 0, val);
//     return arr;
//   }
// }

// function nextInLine(arr, val) {
//   if (arr.length == 0) {
//     return "No array has been selected";
//   } else {
//     arr.shift();
//     arr[arr.length] = val;
//     return arr;
//   }
// }

// function nextInLine(arr, val) {
//   if (arr.length == 0) {
//     return "No arrray has been selected";
//   }
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i + 1];
//   }
//   arr[arr.length - 1] = val;
//   return arr;
// }

// console.log(nextInLine([5, 6, 7, 8, 9], 1)); // [6, 7, 8, 9, 1]
// console.log(nextInLine([7, 6, 3, 23, 17], 10)); // [6, 3, 23, 17, 10]
// console.log(nextInLine([1, 10, 20, 42], 6)); // [10, 20, 42, 6]
// console.log(nextInLine([], 6)); // "No array has been selected"

// 65 => Puzzle Pieces
// Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

// function puzzlePieces(arr1, arr2) {
//   if (arr1.length != arr2.length) {
//     return false;
//   } else {
//     let r_val = true;
//     let check = arr1[0] + arr2[0];
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr1[i] + arr2[i] != check) {
//         return false;
//       }
//     }
//     return r_val;
//   }
// }

// function puzzlePieces(a1, a2) {
//   if (a1.length != a2.length) {
//     return false;
//   }
//   let val = a1.every((item, i) => {
//     let check = a1[0] + a2[0];
//     return item + a2[i] == check;
//   });
//   return val;
// }

// console.log(puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1])); // true
// // 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// // Both arrays sum to [5, 5, 5, 5]
// console.log(puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6])); // true
// console.log(puzzlePieces([1, 2], [-1, -1])); // false
// console.log(puzzlePieces([9, 8, 7], [7, 8, 9, 10])); // false

// 66 => Simon Says
// Create a function that takes in two arrays and returns true if the second array follows the first array by one element, and false otherwise. In other words, determine if the second array is the first array shifted to the right by 1.

// function simonSays(arr1, arr2) {
//   let val = true;
//   for (let i = 0; i < arr1.length - 1; i++) {
//     if (arr1[i] != arr2[i + 1]) {
//       return false;
//     }
//   }
//   return val;
// }

// function simonSays(arr1, arr2) {
//   let val = arr1.every((item, i, arr1) => {
//     if (i < arr1.length - 1) {
//       console.log(i);
//       return item == arr2[i + 1];
//     } else {
//       return true;
//     }
//   });
//   return val;
// }

// console.log(simonSays([1, 2], [5, 1])); // true
// console.log(simonSays([1, 2], [5, 5])); // false
// console.log(simonSays([1, 2, 3, 4, 5], [0, 1, 2, 3, 4])); // true
// console.log(simonSays([1, 2, 3, 4, 5], [5, 5, 1, 2, 3])); // false
