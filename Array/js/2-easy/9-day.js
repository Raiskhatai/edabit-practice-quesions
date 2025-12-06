// 52 => Find Unique Character Strings
// Create a function that returns only strings with unique characters.

// function filterUnique(arr) {}

// console.log(filterUnique(["abb", "abc", "abcdb", "aea", "bbb"])); // ["abc"]
// // "b" occurs in "abb" more than once, "b" occurs in "abcdb" more than once, etc.
// console.log(filterUnique(["88", "999", "989", "9988", "9898"])); // []
// console.log(filterUnique(["ABCDE", "DDEB", "BED", "CCA", "BAC"])); // ["ABCDE", "BED", "BAC"]

// 53 => Chocolate Dilemma
// Two sisters are eating chocolate, whose pieces are represented as subarrays of [l x w].

// Write a function that returns true if the total area of chocolate is the same for each sister.

// To illustrate:

// testFairness([[4, 3], [2, 4], [1, 2]],
// [[6, 2], [4, 2], [1, 1], [1, 1]])
// ➞ true

// Agatha's pieces: [4, 3], [2, 4], [1, 2]
// Bertha's pieces: [6, 2], [4, 2], [1, 1], [1, 1]

// Total area of Agatha's chocolate
// 4x3 + 2x4 + 1x2 = 12 + 8 + 2 = 22

// Total area of Bertha's chocolate is:
// 6x2 + 4x2 + 1x1 + 1x1 = 12 + 8 + 1 + 1 = 22

// function testFairness(arr1, arr2) {
//   arr1 = arr1.flat(Infinity);
//   let sum = 0;
//   for (let i = 0; i < arr1.length; i += 2) {
//     sum += arr1[i] * arr1[i + 1];
//   }
//   arr2 = arr2.flat(Infinity);
//   let sum2 = 0;
//   for (let i = 0; i < arr2.length; i += 2) {
//     sum2 += arr2[i] * arr2[i + 1];
//   }

//   return sum === sum2 ? true : false;
// }

// function testFairness(arr1, arr2) {
//   arr1 = arr1.flat(Infinity);
//   let sum1 = arr1.reduce((a, v, i, other) => {
//     return i % 2 == 0 ? a + other[i] * other[i + 1] : a;
//   }, 0);

//   arr2 = arr2.flat(Infinity);
//   let sum2 = arr2.reduce((a, v, i, other2) => {
//     return i % 2 == 0 ? a + other2[i] * other2[i + 1] : a;
//   }, 0);
//   return sum1 == sum2 ? true : false;
// }

// console.log(testFairness([[1, 2], [2, 1]], [[2, 2]]) ) //true
// console.log(testFairness([[1, 2], [2, 1]], [[2, 2], [4, 4]]) ) //false
// console.log(testFairness([[2, 2], [2, 2], [2, 2], [2, 2]], [[4, 4]]) ) //true
// console.log(testFairness([[1, 5], [6, 3], [1, 1]], [[7, 1], [2, 2], [1, 1]]) )// false

// // 54 => Record Temperatures
// You are given two arrays that each contain data that represents the min and max weather temperatures for each day of the week.

// The records array contains the all-time record low/high temperatures for that day of the week.

// [[record low, record high], ...]
// The current week array contains the daily low/high temperatures for each day of the current week.

// [[daily low, daily high], ...]
// A daily high temperature is considered a new record high if it is higher than the record high for that day of the week. A daily low temperature is considered a new record low if it is lower than the record low for that day of the week.

// Compare the daily low/high temperatures of the current week to the record lows/highs and return an array with the updated record temperatures.

// There may be multiple record temperatures in a week.
// If there are no broken records return the original records array.
// Example

// function recordTemps(arr1, arr2) {
//   let newarr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     let temp = [];
//     if (arr1[i][0] < arr2[i][0]) {
//       temp[0] = arr1[i][0];
//       newarr[i] = temp;
//     } else {
//       temp[0] = arr2[i][0];
//       newarr[i] = temp;
//     }
//     if (arr1[i][1] > arr2[i][1]) {
//       temp[1] = arr1[i][1];
//       newarr[i] = temp;
//     } else {
//       if (arr1[i][1] < arr2[i][1]) {
//         temp[1] = arr1[i][1];
//         newarr[i] = temp;
//       }
//     }
//   }
//   return newarr;
// }

// //             sun       mon      tues       wed      thur      fri       sat
// console.log(
//   recordTemps([[34, 82],[24, 82],[20, 89],[5, 88],[9, 88],[26, 89],[27, 83],],
//     [[44, 72],[19, 70],[40, 69],[39, 68],[33, 64],[36, 70],[38, 69],])
// );

//           [[34, 82], [19, 82], [20, 89], [5, 88], [9, 88], [26, 89], [27, 83]]
// The previous record low for Monday was 24. The current week's low for Monday was 19. So 19 replaces 24 as Monday's new record low.

// 55 => Check if One Array is a Subset of Another
// Array A is contained inside array B if each element in A also exists in B.

// The number of times a number is present doesn't matter. In other words, if we transformed both arrays into sets, A would be a subset of B.

// A = [3, 3, 9, 9, 9, 5]
// B = [1, 3, 9, 5, 8, 44, 44]

// A_Set = [3, 9, 5]
// B_Set = [1, 3, 9, 5, 8, 44]

// // A_Set is a subset of B_Set
// Create a function that determines if the first array is a subset of the second.

// function subset(arr1, arr2) {
//   arr1 = [...new Set(arr1)];
//   arr2 = [...new Set(arr2)];
//   let res = true;

//   for (let i = 0; i < arr1.length; i++) {
//     for (let k = 0; k < arr2.length; k++) {
//       if (arr1[i] == arr2[k]) {
//         res = true;
//         break;
//       } else if (arr1[i] != arr2[k] && arr2.length - 1 == k) {
//         return false;
//       }
//     }
//   }
//   return res;
// }

// function subset(arr1, arr2) {
//   arr1 = [...new Set(arr1)];
//   arr2 = [...new Set(arr2)];
//   let res = true;

//   arr1.forEach((item) => {
//     if (!arr2.includes(item)) {
//       res = false;
//     }
//   });
//   return res;
// }

// function subset(arr1, arr2) {
//   arr1 = [...new Set(arr1)];
//   arr2 = [...new Set(arr2)];
//   let res = true;

//   return arr1.every((item) => arr2.includes(item));
// }

// console.log(subset([1, 3], [1, 3, 3, 5])); // true
// console.log(subset([4, 8, 7], [7, 4, 4, 4, 9, 8])); // true
// console.log(subset([1, 3], [1, 33])); // false
// console.log(subset([1, 3, 10], [10, 8, 8, 8])); // false

// 56 => Even Index Elements in Array
// Create a function that takes an array of integers and returns the sum of all the integers that have an even index, multiplied by the integer at the last index.

// For example:

// [2, 3, 4, 5] ➞ 30
// (2 + 4) * 5 ➞ 30

// [1, 4, 5, 6, 7, 2, 3] ➞ 48
// (1 + 5 + 7 + 3) * 3 ➞ 48

// function evenLast(arr) {
//   if (arr.length == 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i += 2) {
//     sum += arr[i];
//   }
//   let res = sum * arr[arr.length - 1];
//   return res;
// }

// function evenLast(arr) {
//   if (arr.length == 0) {
//     return 0;
//   }

//   let sum = arr.reduce((a, v, i) => {
//     if (i % 2 == 0) {
//       return a + v;
//     } else {
//       return a;
//     }
//   }, 0);
//   let res = sum * arr[arr.length - 1];
//   return res;
// }

// console.log(evenLast([])); // 0
// console.log(evenLast([1, 3, 3, 1, 10])); // 140
// console.log(evenLast([-11, 3, 3, 1, 10])); // 20

// 57 => Back to Home?
// Mubashir has started his journey from home. Given a string of directions (N=North, W=West, S=South, E=East), he will walk for one minute in each direction. Determine whether a set of directions will lead him back to the starting position or not.

// function backToHome(directions) {
//   let e = 0,
//     n = 0,
//     w = 0,
//     s = 0;
//   for (let i = 0; i < directions.length; i++) {
//     if (directions[i] == "E") {
//       e++;
//     } else if (directions[i] == "N") {
//       n++;
//     } else if (directions[i] == "S") {
//       s++;
//     } else if (directions[i] == "W") {
//       w++;
//     }
//   }
//   if (n == s && e == w) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function backToHome(directions) {
//   let e = 0,
//     w = 0,
//     s = 0,
//     n = 0;
//   for (let i = 0; i < directions.length; i++) {
//     switch (directions[i]) {
//       case "E":
//         e++;
//         break;
//       case "W":
//         w++;
//         break;
//       case "N":
//         n++;
//         break;
//       case "S":
//         s++;
//         break;
//       default:
//         "mistake";
//     }
//   }
//   if (e == w && s == n) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(backToHome("EEWE")); // false
// console.log(backToHome("NENESSWW")); // true
// console.log(backToHome("NEESSW")); // false

// 58 => Spin Around, Touch The Ground
// Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.

// spinAround(["right", "right", "right", "right", "left", "right"]) ➞ 1
// # You spun right 4 times (90 * 4 = 360)
// # You spun left once (360 - 90 = 270)
// # But you spun right once more to make a full rotation (270 + 90 = 360)

// function spinAround(r) {
//   let left_count = 0;
//   let right_count = 0;
//   for (let i = 0; i < r.length; i++) {
//     if (r[i] == "right") {
//       left_count += 90;
//     } else {
//       right_count += 90;
//     }
//   }
//   let res = (left_count - right_count) / 360;
//   res = res.toFixed(0);
//   return res >= 0 ? res * 1 : res * -1;
// }

// function spinAround(r) {
//   let right_count = 0;
//   let left_count = 0;
//   r.forEach((element) => {
//     element == "left" ? (left_count += 90) : (right_count += 90);
//   });
//   let res = ((left_count - right_count) / 360).toFixed(0);
//   return res >= 0 ? res * 1 : res * -1;
// }

// console.log(spinAround(["left", "right", "left", "right"])); // 0
// console.log(
//   spinAround([ "right", "right", "right", "right", "right", "right", "right", "right",])
// ); // 2
// console.log(spinAround(["left", "left", "left", "left"])); // 1
