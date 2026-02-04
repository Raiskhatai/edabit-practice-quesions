// 33 => The Antipodes Average
// In this challenge, you are given an array and in turn, you must obtain a smaller array, following three steps:

// Split the array into two parts of equal length. If the given array has an odd length, then you have to eliminate the number in the middle of the array for obtaining two equal parts.
// Sum each number of the first part with each number of the reversed second part, obtaining a new single array having the same length of the previous two.
// Divide by two each number in the final array.
// Given an array of integers arr, implement a function that returns a new array applying the above algorithm.

// function antipodesAverage(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let other = [];
//   index = arr.length / 2 - 1;
//   let j = 0;
//   if (arr.length % 2 == 0) {
//     for (let i = 0; i < arr.length / 2; i++) {
//       temp = arr[start] + arr[end];
//       other[j] = temp / 2;
//       j++;
//       end = end - 1;
//       start = start + 1;
//     }
//   } else {
//     for (let i = 0; i < arr.length / 2 - 1; i++) {
//       temp = arr[start] + arr[end];
//       other[j] = temp / 2;
//       j++;
//       end = end - 1;
//       start = start + 1;
//     }
//   }
//   return other;
// }

// function antipodesAverage(arr) {
//   let start = 0;
//   let end = arr.length - 1;
//   let other = [];
//   function fun(inputarr, val = 0) {
//     retarr = [];
//     for (let i = 0; i < arr.length / 2 - val; i++) {
//       temp = arr[start] + arr[end];
//       retarr.push(temp / 2);
//       end = end - 1;
//       start = start + 1;
//     }
//     return retarr;
//   }
//   if (arr.length % 2 == 0) {
//     other = fun(arr, 0);
//   } else {
//     other = fun(arr, 1);
//   }
//   return other;
// }

// console.log(antipodesAverage([1, 2, 3, 4])); // [2.5, 2.5]
// // Left part = [1, 2]
// // Reversed right part = [4, 3]
// // Array resulting from the sum of each pair = [5, 5]
// // Each number is divided by two = [2.5, 2.5]
// console.log(antipodesAverage([1, 2, 3, 4, 5])); // [3, 3]
// // The length of array is odd, number 3 (in the middle) is eliminated
// // Left = [1, 2]
// // Reversed right = [5, 4]
// // Sum = [6, 6]
// // Division by two = [3, 3]
// console.log(antipodesAverage([-1, -2])); // [-1.5]
// //  (-1 + -2) / 2 = [-1.5]

// 34 => Making Change
// Create a function that takes an amount of monetary change (e.g. 47 cents) and breaks down the most efficient way that change can be made using USD quarters, dimes, nickels and pennies. Your function should return an object.

// Coin	Value
// Penny	0.01
// Nickel	0.05
// Dime	0.10
// Quarter	0.25

// function makeChange(c) {
//   let Penny = 1;
//   let Nickel = 5;
//   let Dime = 10;
//   let Quarter = 25;
//   let obj = {
//     q: 0,
//     d: 0,
//     n: 0,
//     p: 0,
//   };
//   while (c) {
//     if (c - Quarter > -1) {
//       c = c - Quarter;
//       obj.q++;
//     } else if (c - Dime > -1) {
//       c = c - Dime;
//       obj.d++;
//     } else if (c - Nickel > -1) {
//       c = c - Nickel;
//       obj.n++;
//     } else if (c - Penny > -1) {
//       c = c - Penny;
//       obj.p++;
//     }
//   }
//   return obj;
// }

// console.log(makeChange(47)); // { "q": 1, "d": 2, "n": 0, "p": 2 }
// console.log(makeChange(24)); // { "q": 0, "d": 2, "n": 0, "p": 4 }
// console.log(makeChange(92)); // { "q": 3, "d": 1, "n": 1, "p": 2 }

//  35 => Burglary Series (22): Sign All
// You finally receive the entire stolen list document from the police. You need to sign at the end of the document but also each sub-list corresponding to each room in your house where the items were stolen.

// You are given two arguments, one object with nested objects and a string that corresponds to your name. The object already contains several signature properties, one on the root, the others on each nested object. Return an object with all containing signature values set to your name.

// const obj = {
//   kitchen: {
//     painting: 100,
//     piano: 1000,
//     signature: "",
//   },
//   bathroom: {
//     stereo: 220,
//     signature: "",
//   },
//   signature: "",
// };

// function signAll(obj, name) {
//   for (let key in obj) {
//     obj[key].signature = name;
//   }
//   obj["signature"] = name;
//   return obj;
// }

// console.log(signAll(obj, "Rocky"));
// // {
// //     kitchen: {
// //       painting: 100,
// //       piano: 1000,
// //       signature: "Rocky",  // changed
// //     },
// //     bathroom: {
// //       stereo: 220,
// //       signature: "Rocky",  // changed
// //     },
// //     signature: "Rocky",  // changed
// // }
