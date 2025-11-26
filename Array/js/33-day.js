// 1=> Snail Race
// Steve and Maurice have racing snails. They each have three, a slow s, medium m and fast f one. Although Steve's snails are all a bit stronger than Maurice's, Maurice has a trick up his sleeve. His plan is

// Round 1: [s, f] Sacrifice his slowest snail against Steve's fastest.
// Round 2: [m, s] Use his middle snail against Steve's slowest.
// Round 3: [f, m] Use his fastest snail against Steve's middle.
// Create a function that determines whether Maurice's plan will work by outputting true if Maurice wins 2/3 games.

// The function inputs:

// Array 1: [s, m, f] for Maurice.
// Array 2: [s, m, f] for Steve.

// function mauriceWins(mSnails, sSnails) {
//   let mpoints = 0;
//   if (mSnails[0] > sSnails[mSnails.length - 1]) {
//     mpoints++;
//   }
//   if (mSnails[1] > sSnails[0]) {
//     mpoints++;
//   }
//   if (mSnails[mSnails.length - 1] > sSnails[1]) {
//     mpoints++;
//   }
//   if (mpoints >= 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(mauriceWins([3, 5, 10], [4, 7, 11])); //  true
// // Since the matches are (3, 11), (5, 4) and (10, 7), Maurice wins 2 out of 3.

// console.log(mauriceWins([6, 8, 9], [7, 12, 14])); //  false
// // Since the matches are (6, 14), (8, 7) and (9, 12), Steve wins 2 out of 3.

// console.log(mauriceWins([1, 8, 20], [2, 9, 100])); //  true

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
//   let count = arr.filter((item) => item === true);
//   return count.length;
// }

// console.log(countTrue([true, false, false, true, false])); //  2
// console.log(countTrue([false, false, false, false])); //  0
// console.log(countTrue([])); //  0

// 3=> Convenience Store
// Given a total due and an array representing the amount of change in your pocket, determine whether or not you are able to pay for the item. Change will always be represented in the following order: quarters, dimes, nickels, pennies.

// To illustrate: changeEnough([25, 20, 5, 0], 4.25) should yield true, since having 25 quarters, 20 dimes, 5 nickels and 0 pennies gives you 6.25 + 2 + .25 + 0 = 8.50.

// Notes
// quarter: 25 cents / $0.25
// dime: 10 cents / $0.10
// nickel: 5 cents / $0.05
// penny: 1 cent / $0.01

// function changeEnough(change, amountDue) {
//   let sum = 0;
//   for (let i = 0; i < change.length; i++) {
//     if (i == 0) {
//       sum += change[i] * 0.25;
//     } else if (i == 1) {
//       sum += change[i] * 0.1;
//     } else if (i == 2) {
//       sum += change[i] * 0.05;
//     } else {
//       sum += change[i] * 0.01;
//     }
//   }
//   if (sum >= amountDue) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function changeEnough(change,amountDue){
//     let sum=0;
//     sum+=change[0]*0.25;
//     sum+=change[1]*0.10;
//     sum+=change[2]*0.05;
//     sum+=change[3]*0.01;
//     if(sum>=amountDue){
//         return true;
//     }else{
//         return false;
//     }
// }

// console.log(changeEnough([2, 100, 0, 0], 14.11)); //  false
// console.log(changeEnough([0, 0, 20, 5], 0.75)); //  true
// console.log(changeEnough([30, 40, 20, 5], 12.55)); //  true
// console.log(changeEnough([10, 0, 0, 50], 3.85)); //  false
// console.log(changeEnough([1, 0, 5, 219], 19.99)); //  false
