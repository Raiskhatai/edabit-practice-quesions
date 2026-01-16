// 108 => Hold Your Breath!
// You will be given an array of numbers which represent your character's altitude above sea level at regular intervals:

// Positive numbers represent height above the water.
// 0 is sea level.
// Negative numbers represent depth below the water's surface.
// Create a function which returns whether your character survives their unsupervised diving experience, given an array of integers.

// Your character starts with a breath meter of 10, which is the maximum. When diving underwater, your breath meter decreases by 2 per item in the array. Watch out! If your breath diminishes to 0, your character dies!

// To prevent this, you can replenish your breath by 4 (up to the maximum of 10) for each item in the array where you are at or above sea level.

// Your function should return true if your character survives, and false if not.

// Worked Example
// console.log(divingMinigame([-5, -15, -4, 0, 5])); // true
// // Breath meter starts at 10.
// // -5 is below water, so breath meter decreases to 8.
// // -15 is below water, so breath meter decreases to 6.
// // -4 is below water, so breath meter decreases to 4.
// // 0 is at sea level, so breath meter increases to 8.
// // 5 is above sea level and breath meter is capped at 10 (would've been 12 otherwise).
// // Character survives!

// console.log(divingMinigame([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // true
// console.log(divingMinigame([-3, -6, -2, -6, -2])); // false
// console.log(divingMinigame([2, 1, 2, 1, -3, -4, -5, -3, -4])); // false

// function divingMinigame(arr) {
//   let deep = 10;
//   for (let i = 0; i < arr.length; i++) {
//     if (deep == 0) {
//       return false;
//     } else if (arr[i] < 0) {
//       deep -= 2;
//     } else if (deep >= 0) {
//       if (deep < 10) deep += 4;
//     }
//   }
//   return deep > 0 ? true : false;
// }

// 109 Back and Forth
// In a board game, a player may pick up a card with several left or right facing arrows, with the number of arrows indicating the number of tiles to move. The player should move either left or right, depending on the arrow's direction.

// Given an array of the arrows contained on a player's cards, return a singular string of arrowheads that are equivalent to all of the arrowheads.

// Worked Example
// console.log(calculateArrowhead([">>", "<<", "<<<"])); // "<<<"
// // >> means to move 2 places right
// // << means to move 2 places left (cancelling out >>)
// // <<< means to move a further 3 places left
// // overall, the movement can be written as <<<

// console.log(calculateArrowhead([">>>>", "<", "<", "<"])); // ">"
// console.log(calculateArrowhead([">", "<", ">>", "<", "<<<"])); // "<<"
// console.log(calculateArrowhead([">>>", "<<<"])); // ""

// function calculateArrowhead(arr) {
//   let otherarr = arr.map((element) => {
//     return element.split("");
//   });
//   otherarr = otherarr.flat(1);
//   let counter = otherarr.reduce((a, v) => {
//     if (v == ">") return (a = a + 1);
//     else return (a = a - 1);
//   }, 0);
//   let retstr = "";
//   let run = Math.abs(counter);
//   for (let i = 0; i < run; i++) {
//     if (counter < 0) retstr += "<";
//     else retstr += ">";
//   }
//   return retstr;
// }

// function calculateArrowhead(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     newarr[j] = arr[i].split("");
//     j++;
//   }
//   newarr = newarr.flat(Infinity);
//   let counter = 0;
//   for (let i = 0; i < newarr.length; i++) {
//     if (newarr[i] == ">") {
//       counter++;
//     } else if (newarr[i] == "<") {
//       counter--;
//     }
//   }
//   let retstr = "";
//   let run = Math.abs(counter);
//   for (let i = 0; i < run; i++) {
//     if (counter < 0) {
//       retstr += "<";
//     } else if (counter > 0) {
//       retstr += ">";
//     }
//   }
//   return retstr;
// }

// 110 => Largest Gap
// Given an array of integers, return the largest gap between elements of the sorted version of that array.

// Here's an illustrative example. Consider the array:

// [9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5]
// ... which, after sorting, becomes the array:

// [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// ... so that we now see that the largest gap in the array is the gap of 11 between 9 and 20.

// function largestGap(arr) {
//   arr = arr.sort((a, b) => a - b);
//   let gap = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i + 1] - arr[i] > gap) {
//       gap = arr[i + 1] - arr[i];
//     }
//   }
//   return gap;
// }

// console.log(largestGap([9, 4, 26, 26, 0, 0, 5, 20, 6, 25, 5])); // 11
// // After sorting get [0, 0, 4, 5, 5, 6, 9, 20, 25, 26, 26]
// // Largest gap of 11 between 9 and 20
// console.log(largestGap([14, 13, 7, 1, 4, 12, 3, 7, 7, 12, 11, 5, 7])); // 4
// // After sorting get [1, 3, 4, 5, 7, 7, 7, 7, 11, 12, 12, 13, 14]
// // Largest gap of 4 between 7 and 11
// console.log(largestGap([13, 3, 8, 5, 5, 2, 13, 6, 14, 2, 11, 4, 10, 8, 1, 9])); // 2
// After sorting get [1, 2, 2, 3, 4, 5, 5, 6, 8, 8, 9, 10, 11, 13, 13, 14]
// Largest gap of 2 between 6 and 8

// 111 => Are the Sum of Digits in the Numbers Equal?
// Write a function that takes an array of two numbers and determines if the sum of the digits in each number are equal to each other.

// function isEqual(arr) {
//   let sum1 = 0;
//   let sum2 = 0;
//   let num1 = "";
//   num1 += arr[0];
//   num1 = num1.split("");
//   let num2 = "";
//   num2 += arr[1];
//   num2 = num2.split("");
//   function sum(otherarr) {
//     let val = 0;
//     for (let i = 0; i < otherarr.length; i++) {
//       val += +otherarr[i];
//     }
//     return val;
//   }
//   sum1 = sum(num1);
//   sum2 = sum(num2);
//   return sum1 == sum2 ? true : false;
// }

// console.log(isEqual([105, 42])); // true
// // # 1 + 0 + 5 = 6
// // # 4 + 2 = 6
// console.log(isEqual([21, 35])); // false
// console.log(isEqual([0, 0])); // true

// 112 => What Type of Triangle?
// Create a function which returns the type of triangle, given the side lengths. Return the following values if they match the criteria.

// No sides equal: "scalene"
// Two sides equal: "isosceles"
// All sides equal: "equilateral"
// Less or more than 3 sides given: "not a triangle"

// function getTriangleType(arr) {
//   if (arr.length > 3 || arr.length < 3) {
//     return "not a triangle";
//   } else {
//     let [a, b, c] = arr;
//     if (a == b && b == c) {
//       return "equilateral";
//     } else if (a == b || b == c || c == a) {
//       return "isosceles";
//     } else if (a != b && b != c) {
//       return "scalene";
//     }
//   }
// }

// console.log(getTriangleType([2, 6, 5])); // "scalene"
// console.log(getTriangleType([4, 4, 7])); // "isosceles"
// console.log(getTriangleType([8, 8, 8])); // "equilateral"
// console.log(getTriangleType([3, 5, 5, 2])); // "not a triangle"
