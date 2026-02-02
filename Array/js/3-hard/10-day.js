// 28 => Balanced Array
// Given an array of unknown length, but with an even amount of elements (numbers), copy the half with the highest sum of numbers to the other half of the array. If the sum of the first half equals the sum of the second half, return the original array.

// function balanced(arr) {
//   let first_half = (arr.length - 1) / 2;
//   first_half = Math.floor(first_half);
//   let first_sum = 0;
//   let second_sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (i <= first_half) {
//       first_sum += arr[i];
//     } else {
//       second_sum += arr[i];
//     }
//   }
//   let other = [];
//   if (first_sum === second_sum) {
//     return arr;
//   } else if (first_sum > second_sum) {
//     for (let i = 0; i < first_half + 1; i++) {
//       other.push(arr[i]);
//     }
//     let copyarr = [...other];
//     other.push(copyarr);
//   } else if (second_sum > first_sum) {
//     for (let i = first_half + 1; i < arr.length; i++) {
//       other.push(arr[i]);
//     }
//     let copyarr = [...other];
//     other.push(copyarr);
//   }
//   return other.flat(1);
// }

// console.log(balanced([1, 2, 4, 6, 3, 1])); // [6, 3, 1, 6, 3, 1]
// console.log(balanced([88, 3, 27, 5, 9, 0, 13, 10])); // [88, 3, 27, 5, 88, 3, 27, 5]
// console.log(balanced([7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6])); // [7, 5, 2, 6, 1, 0, 1, 5, 2, 7, 0, 6]

// 29 => Burglary Series (16): Nested objects
// And who cursed the most in the fight between you and your spouse?

// Given an object with three rounds, with nested objects as your scores per round, return a string of who cursed the most:

// If you, return "ME!"
// If your spouse, return "SPOUSE!"
// If a draw, return "DRAW!"

// function determineWhoCursedTheMost(obj) {
//   let me_total = 0;
//   let spouse_total = 0;
//   for (let key in obj) {
//     me_total += obj[key].me;
//     spouse_total += obj[key].spouse;
//   }
//   return me_total === spouse_total
//     ? "DRAW!"
//     : me_total > spouse_total
//       ? "ME!"
//       : "SPOUSE!";
// }

// console.log(
//   determineWhoCursedTheMost({
//     round1: {
//       me: 10,
//       spouse: 5,
//     },
//     round2: {
//       me: 5,
//       spouse: 10,
//     },
//     round3: {
//       me: 10,
//       spouse: 10,
//     },
//   }),
// ); // "DRAW!"

// console.log(
//   determineWhoCursedTheMost({
//     round1: {
//       me: 40,
//       spouse: 5,
//     },
//     round2: {
//       me: 9,
//       spouse: 10,
//     },
//     round3: {
//       me: 9,
//       spouse: 10,
//     },
//   }),
// ); // "ME!"

// console.log(
//   determineWhoCursedTheMost({
//     round1: {
//       me: 10,
//       spouse: 5,
//     },
//     round2: {
//       me: 9,
//       spouse: 44,
//     },
//     round3: {
//       me: 10,
//       spouse: 55,
//     },
//   }),
// ); // "SPOUSE!"
