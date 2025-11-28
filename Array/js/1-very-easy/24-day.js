// 1=> Fix the Error: Mutating Arrays
// Suppose I want to define a function that removes the last element of an array each time I call it, but does not mutate the original array. Fix the code so that the results are no longer mutating the array.
// function minusOne(arr) {
//   arr.pop()
//   return arr
// }

// function minusOne(arr) {
//   arr.length = 4;
//   return arr;
// }

// function minusOne(arr) {
//   let val = arr.slice();
//   val.pop();
//   return val;
// }

// x = [1, 2, 3, 4, 5];
// minusOne(x)  [1, 2, 3, 4]  // 1st time function is called.
// minusOne(x)  [1, 2, 3]  // 2nd time function is called.
// minusOne(x)  [1, 2]  // 3rd time function is called.
// minusOne(x)  [1]  // 4th time function is called.

// What I want instead:
// let res = minusOne(x); //[(1, 2, 3, 4)]  1st time function is called.
// res = minusOne(x); //[(1, 2, 3, 4)]  2nd time function is called.
// res = minusOne(x); //[(1, 2, 3, 4)]  3rd time function is called.
// res = minusOne(x); //[(1, 2, 3, 4)]  4th time function is called.

// Reverse Coding Challenge #3
// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.

// 2 => Your task is to create a function that, when fed the inputs below, produces the sample outputs shown.

// function modules(arr, val) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newarr[i] = arr[i] % val;
//   }
//   return newarr;
// }

// function modules(arr, val) {
//   let newarr = arr.map((item) => item % val);
//   return newarr;
// }

// console.log(modules([5, 7, 8, 2, 1], 2)); //  [1, 1, 0, 0, 1]
// console.log(modules([9, 8, 16, 47], 4)); //  [1, 0, 0, 3]
// console.log(modules([17, 11, 99, 55, 23, 1], 5)); //  [2, 1, 4, 0, 3, 1]
// console.log(modules([6, 1], 7)); //  [6, 1]
// console.log(modules([3, 2, 9], 3)); //  [0, 2, 0]
// console.log(modules([48, 22, 0, 19, 33, 100], 10)); //  [8, 2, 0, 9, 3, 0]

// 3=> Filter by Digit Length
// Create a function that filters out an array to include numbers that only have a certain number of digits.

// function filterDigitLength(arr, val) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (("" + arr[i]).length == val) {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// console.log(filterDigitLength([88, 232, 4, 9721, 555], 3)); // [232, 555]
// // Include only numbers with 3 digits.

// console.log(filterDigitLength([2, 7, 8, 9, 1012], 1)); // [2, 7, 8, 9]
// // Include only numbers with 1 digit.

// console.log(filterDigitLength([32, 88, 74, 91, 300, 4050], 1)); // []
// // No numbers with only 1 digit exist => return empty array.

// console.log(filterDigitLength([5, 6, 8, 9], 1)); // [5, 6, 8, 9]
// // All numbers in the array have 1 digit only => return original array.

// 4 => Check Factors
// Write a function that returns true if all integers in an array are factors of a number, and false otherwise.

// function checkFactors(arr, val) {
//   let rval = arr.every((item) => val % item == 0);
//   return rval;
// }

// function checkFactors(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (val % arr[i] != 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(checkFactors([2, 3, 4], 12)); // true
// // Since 2, 3, and 4 are all factors of 12.

// console.log(checkFactors([1, 2, 3, 8], 12)); // false
// // 8 is not a factor of 12.

// console.log(checkFactors([1, 2, 50], 100)); // true

// console.log(checkFactors([3, 6], 9)); // false

// 5=> Get the File Extension
// Write a function that maps files to their extension names.

// function getExtension(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let dot = arr[i].indexOf(".");
//     newarr[i] = arr[i].slice(dot);
//   }
//   return newarr;
// }

// function getExtension(arr) {
//   let newarr = arr.map((item) => {
//     let sptarr = item.split(".");
//     return sptarr[1];
//   });
//   return newarr;
// }


// console.log(getExtension(["code.html", "code.css"])); //  ["html", "css"]
// console.log(getExtension(["project1.jpg", "project1.pdf", "project1.mp3"])); //  ["jpg", "pdf", "mp3"]
// console.log(
//   getExtension(["ruby.rb", "cplusplus.cpp", "python.py", "javascript.js"])
// ); //  ["rb", "cpp", "py", "js"]
