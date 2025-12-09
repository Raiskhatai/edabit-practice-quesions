// 58 => Sum of Odd and Even Numbers
// Write a function that takes an array of numbers and returns an array with two elements:

// The first element should be the sum of all even numbers in the array.
// The second element should be the sum of all odd numbers in the array.

// function sumOddAndEven(arr) {
//   let even_sum = 0;
//   let odd_sum = 0;
//   let ret_arr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even_sum += arr[i];
//     } else {
//       odd_sum += arr[i];
//     }
//   }

//   ret_arr[0] = even_sum;
//   ret_arr[1] = odd_sum;

//   return ret_arr;
// }

// console.log(sumOddAndEven([1, 2, 3, 4, 5, 6])); // [12, 9]
// // // 2 + 4 + 6 = 12 and 1 + 3 + 5 = 9

// console.log(sumOddAndEven([-1, -2, -3, -4, -5, -6])); // [-12, -9]
// console.log(sumOddAndEven([0, 0])); // [0, 0]

// 59 => No Hidden Fees
// Given an array of prices prices and a "supposed" total t, return true if there is a hidden fee added to the total (i.e. the total is greater than the sum of prices), otherwise return false.

// function hasHiddenFee(arr, val) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let temp = +arr[i].slice(1);
//     sum += temp;
//   }
//   val = +val.slice(1);
//   return val > sum ? true : false;
// }

// function hasHiddenFee(arr, val) {
//   let sum = arr.reduce((a, v) => a + Number(v.slice(1)), 0);
//   val = +val.slice(1);
//   return sum < val ? true : false;
// }

// console.log(hasHiddenFee(["$2", "$4", "$1", "$8"], "$15")); // false
// console.log(hasHiddenFee(["$1", "$2", "$3"], "$6")); // false
// console.log(hasHiddenFee(["$1"], "$4")); // true

// 60 Count Letters in a Word Search
// Create a function that counts the number of times a particular letter shows up in the word search.

// function letterCounter(arr, letter) {
//   let counter = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] == letter) {
//         counter++;
//       }
//     }
//   }
//   return counter;
// }

// function letterCounter(arr, letter) {
//   let counter = 0;
//   arr.forEach((Element) => {
//     Element.forEach((item) => {
//       if (item == letter) {
//         counter++;
//       }
//     });
//   });
//   return counter;
// }

// console.log(
//   letterCounter(
//     [
//       ["D", "E", "Y", "H", "A", "D"],
//       ["C", "B", "Z", "Y", "J", "K"],
//       ["D", "B", "C", "A", "M", "N"],
//       ["F", "G", "G", "R", "S", "R"],
//       ["V", "X", "H", "A", "S", "S"],
//     ],
//     "D"
//   )
// ); // 3

// // "D" shows up 3 times: twice in the first row, once in the third row.

// console.log(
//   letterCounter(
//     [
//       ["D", "E", "Y", "H", "A", "D"],
//       ["C", "B", "Z", "Y", "J", "K"],
//       ["D", "B", "C", "A", "M", "N"],
//       ["F", "G", "G", "R", "S", "R"],
//       ["V", "X", "H", "A", "S", "S"],
//     ],
//     "H"
//   )
// ); // 2


