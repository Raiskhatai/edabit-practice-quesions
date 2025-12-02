// 26 => Function Function
// Create a function that takes a number as its parameter and returns another function. The returned function must take an array of numbers as its parameter, and return an array of the numbers divided by the number that was passed into the first function.

// function factory(val) {
//   return function inner(arrs) {
//     let newarr = [];
//     for (let i = 0; i < arrs.length; i++) {
//       newarr[i] = arrs[i] / val;
//     }
//     return newarr;
//   };
// }

// let factory = (val) => (arrs) => {
//   let newarr = arrs.map((item) => item / val);
//   return newarr;
// };

// const first = factory(15);
// // returns a function first.
// const arr = [30, 45, 60];
// // 30 / 15 = 2, 45 / 15 = 3, 60 / 15 = 4
// console.log(first(arr)); //  [2, 3, 4]

// const second = factory(2);
// // returns a function second.
// const arr2 = [2, 4, 6];
// // 2 / 2 = 1, 4 / 2 = 2, 6 / 2 = 3
// console.log(second(arr2)); //  [1, 2, 3]

// 27=> Geometry 1: Length of Line Segment
// Write a function that takes coordinates of two points on a two-dimensional plane and returns the length of the line segment connecting those two points.

// function lineLength([x1, y1], [x2, y2]) {
//   let dx = x1 - x2;
//   let dy = y1 - y2;
//   let result = dx ** 2 + dy ** 2;
//   result = Math.sqrt(result);
//   result = +result.toFixed(2);
//   return result;
// }

// console.log(lineLength([15, 7], [22, 11])); // 8.06
// console.log(lineLength([0, 0], [0, 0])); // 0
// console.log(lineLength([0, 0], [1, 1])); // 1.41

// 28 => Number to Reversed Array
// Create a function that takes a number and returns an array with the digits of the number in reverse order.

// function reverseArr(num) {
//   num = num + "";
//   let newarr = num.split("");
//   newarr.reverse();
//   for (let i = 0; i < newarr.length; i++) {
//     newarr[i] = newarr[i] - 0;
//   }
// }

// function reverseArr(num) {
//   num = num + "";
//   let newarr = num.split("");
//   newarr.reverse();
//   newarr.forEach((element, i, newarr) => {
//     newarr[i] = newarr[i] - 0;
//   });
//   return newarr;
// }

// console.log(reverseArr(1485979)); // [9, 7, 9, 5, 8, 4, 1]
// console.log(reverseArr(623478)); /// [8, 7, 4, 3, 2, 6]
// console.log(reverseArr(12345)); // [5, 4, 3, 2, 1]

// 29 => H4ck3r Sp34k
// Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k) version of the string.

// function hackerSpeak(str) {
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "a":
//         str.splice(i, 1, 4);
//         break;
//       case "e":
//         str.splice(i, 1, 3);
//         break;
//       case "i":
//         str.splice(i, 1, 1);
//         break;
//       case "o":
//         str.splice(i, 1, 0);
//         break;
//       case "s":
//         str.splice(i, 1, 5);
//         break;
//       default:
//     }
//   }
//   return str.join("");
// }

// function hackerSpeak(str) {
//   str = str.split("");
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === "a") {
//       str.splice(i, 1, 4);
//     }
//     if (str[i] === "e") {
//       str.splice(i, 1, 3);
//     }
//     if (str[i] === "i") {
//       str.splice(i, 1, 1);
//     }
//     if (str[i] === "o") {
//       str.splice(i, 1, 0);
//     }
//     if (str[i] === "s") {
//       str.splice(i, 1, 5);
//     }
//   }
//   return str.join("");
// }

// console.log(hackerSpeak("javascript is cool")); // "j4v45cr1pt 15 c00l"
// console.log(hackerSpeak("programming is fun")); // "pr0gr4mm1ng 15 fun"
// console.log(hackerSpeak("become a coder")); // "b3c0m3 4 c0d3r"
// In order to work properly, the function should replace all "a"s with 4, "e"s with 3, "i"s with 1, "o"s with 0, and "s"s with 5.

// 30=> Capitalize the Names
// Create a function that takes an array of names and returns an array where only the first letter of each name is capitalized.

// function capMe(arr) {
//   let newarr = [];
//   let f_l;
//   let l_l;
//   for (let i = 0; i < arr.length; i++) {
//     f_l = arr[i][0].toUpperCase();
//     l_l = arr[i].slice(1).toLowerCase();
//     f_l = f_l + l_l;
//     newarr[i] = f_l;
//   }
//   return newarr;
// }

// console.log(capMe(["mavis", "senaida", "letty"])); // ["Mavis", "Senaida", "Letty"]
// console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"])); // ["Samuel", "Mabelle", "Letitia", Meridith"]
// console.log(capMe(["Slyvia", "Kristal", "Sharilyn", "Calista"])); // ["Slyvia", "Kristal", "Sharilyn", Calista"]

// 31 =Return the Sum of the Two Smallest Numbers
// Create a function that takes an array of numbers and returns the sum of the two lowest positive numbers.

// function sumTwoSmallestNums(arr) {
//   let min = Infinity;
//   let second_min = Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < min && arr[i] > 0) {
//       min = arr[i];
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0 && arr[i] < second_min && arr[i] > min) {
//       second_min = arr[i];
//     }
//   }
//   let sum = min + second_min;
//   return sum;
// }

// function sumTwoSmallestNums(arr) {
//   arr.sort((a, b) => a - b);
//   let newarr = arr.filter((item) => item > 0);
//   let sum = newarr[0] + newarr[1];
//   return sum;
// }

// console.log(sumTwoSmallestNums([19, 5, 42, 2, 77])); // 7
// console.log(sumTwoSmallestNums([10, 343445353, 3453445, 3453545353453])); // 3453455
// console.log(sumTwoSmallestNums([2, 9, 6, -1])); // 8
// console.log(
//   sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
// ); // 563
// console.log(sumTwoSmallestNums([3683, 2902, 3951, -475, 1617, -2385])); // 4519
