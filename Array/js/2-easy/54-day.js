// 124 => Digit Distance
// The digit distance between two numbers is the total value of the difference between each pair of digits.

// To illustrate:

// function digitDistance(num1, num2) {
//   let numstr1 = "" + num1;
//   let numstr2 = "" + num2;
//   let arr1 = numstr1.split("");
//   let arr2 = numstr2.split("");
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     sum += Number(arr2[i]) - Number(arr1[i]);
//   }
//   return sum;
// }

// console.log(digitDistance(234, 489)); // 12
// // Since |2 - 4| + |3 - 8| + |4 - 9| = 2 + 5 + 5

// console.log(digitDistance(121, 599)); // 19
// console.log(digitDistance(12, 12)); // 0
// console.log(digitDistance(10, 20)); // 1
