// 1=> Amplify the Multiples of Four
// In this challenge, you must generate a sequence of consecutive numbers, from a lower bound that will always be equal to 1, up to a variable given higher bound (including the bounds in the sequence).

// Each number of the sequence that can be exactly divided by 4 must be amplified by 10 (see notes below).

// Given a higher bound num, implement a function that returns an array with the sequence of numbers, after that every multiple of 4 has been amplified.

// function amplify(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (i % 4 != 0) {
//       arr[i - 1] = i;
//     } else {
//       arr[i - 1] = i * 10;
//     }
//   }
//   return arr;
// }

// console.log(amplify(4)); //  [1, 2, 3, 40]
// // Create a sequence from 1 to 4
// // 4 is exactly divisible by 4, so it will be 4*10 = 40

// console.log(amplify(3)); //  [1, 2, 3]
// // Create a sequence from 1 to 3
// // There are no numbers that can be exactly divided by 4

// console.log(amplify(25)); //  [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
// // Create a sequence from 1 to 25
// // The numbers exactly divisible by 4 are: 4 (4*10 = 40), 8 (8 * 10 = 80)... and so on.

// 2=> Array Operation
// Create a function that takes three parameters where:

// x is the start of the range (inclusive).
// y is the end of the range (inclusive).
// n is the divisor to be checked against.
// Return an ordered array with numbers in the range that are divisible by the third parameter n. Return an empty array if there are no numbers that are divisible by n.

// function arrayOperation(x, y, n) {
//   let arr = [];
//   let j = 0;
//   for (let i = x; x <= y; x++) {
//     if (x % n == 0) {
//       arr[j] = x;
//       j++;
//     }
//   }
//   return arr;
// }

// function arrayOperation(x, y, n) {
//   let arr = [];
//   j = 0;
//   for (x; x <= y; x++) {
//     arr[j] = x;
//     j++;
//   }
//   let newarr = arr.filter((item) => item % n == 0);
//   return newarr;
// }

// console.log(arrayOperation(1, 10, 3)); //  [3, 6, 9]
// console.log(arrayOperation(7, 9, 2)); //  [8]
// console.log(arrayOperation(15, 20, 7)); //  []

// 3=> Maximum Possible Total
// Given an array of 10 numbers, return the maximum possible total made by summing just 5 of the 10 numbers.

// function maxTotal(arr) {
//   let newarr = [...arr];
//   newarr.sort((a, b) => a - b);
//   let sum = 0;
//   for (let i = 5; i < 10; i++) {
//     sum += newarr[i];
//   }
//   return sum;
// }

// function maxTotal(arr) {
//   let newarr = [...arr];
//   newarr.sort((a, b) => a - b);
//   let returnarr = newarr.slice(5, 10);
//   returnarr = returnarr.reduce((a, v) => a + v, 0);
//   return returnarr;
// }

// console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1])); // 43
// console.log(maxTotal([0, 0, 0, 0, 0, 0, 0, 0, 0, 100])); // 100
// console.log(maxTotal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 40

// 4=> Omnipresent Value
// A value is omnipresent if it exists in every subarray inside the main array.

// To illustrate:

// [[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]]
// 3 exists in every element inside this array, so is omnipresent.
// Create a function that determines whether an input value is omnipresent for a given array.

// function isOmnipresent(arr, val) {
//   let retrun_val = true;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < 1; k++) {
//       if (arr[i][k] != val && arr[i][k + 1] != val) {
//         retrun_val = false;
//       }
//     }
//   }
//   return retrun_val;
// }

// function isOmnipresent(arr, val) {
//   let r_val = arr.every((item, i, arr1) => {
//     return item.includes(val);
//   });
//   return r_val;
// }

// console.log(
//   isOmnipresent(
//     [
//       [1, 1],
//       [1, 3] ,
//       [5, 1],
//       [6, 1],
//     ],
//     1
//   )
// ); //  true
// console.log(
//   isOmnipresent(
//     [
//       [1, 1],
//       [1, 3],
//       [5, 1],
//       [6, 1],
//     ],
//     6
//   )
// ); //  false
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 5)); //  true
// console.log(isOmnipresent([[5], [5], [5], [6, 5]], 6)); //  false

// 5 => Secret Society
// A group of friends have decided to start a secret society. The name will be the first letter of each of their names, sorted in alphabetical order.

// Create a function that takes in an array of names and returns the name of the secret society.

// function societyName(arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += arr[i][0];
//   }
//   let newstr = [...str];
//   newstr = newstr.sort().join("");
//   return newstr;
// }

// function societyName(arr) {
//   let str = arr.map((item, i) => item[0]);
//   let newstr = str.slice();
//   newstr = newstr.sort().join("");
//   return newstr;
// }

// console.log(societyName(["Adam", "Sarah", "Malcolm"])); //  "AMS"
// console.log(societyName(["Harry", "Newt", "Luna", "Cho"])); //  "CHLN"
// console.log(
//   societyName(["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"])
// ); //  "CJMPRR"
