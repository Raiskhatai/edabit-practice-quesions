// 58 Sum of Odd and Even Numbers
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
