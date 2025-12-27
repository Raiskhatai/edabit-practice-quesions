// 80 => Is There an Upward Trend?
// Create a function that determines if there is an upward trend.

// function upwardTrend(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       return "Strings not permitted!";
//     } else if (arr[i] > arr[i + 1]) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(upwardTrend([1, 2, 3, 4])); // true
// console.log(upwardTrend([1, 2, 6, 5, 7, 8])); // false
// console.log(upwardTrend([1, 2, 3, "4"])); // "Strings not permitted!"
// console.log(upwardTrend([1, 2, 3, 6, 7])); // true

// 81 => Probabilities (Part 1)
// Given an array of numbers and a value n, write a function that returns the probability of choosing a number greater than or equal to n from the array. The probability should be expressed as a percentage, rounded to one decimal place.
// Precent probability of event = 100 * (num of favourable outcomes) / (total num of possible outcomes)

// function probability(arr, val) {
//   let fav_outc = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= val) {
//       fav_outc++;
//     }
//   }
//   let total_outc = arr.length;
//   let final = (fav_outc / total_outc) * 100;
//   return final.toFixed(1);
// }

// function probability(arr, val) {
//   let fav_outc = 0;
//   arr.forEach((item) => {
//     if (item >= val) {
//       fav_outc++;
//     }
//   });
//   let total_outc = arr.length;
//   let final = ((fav_outc / total_outc) * 100).toFixed(1);
//   return final;
// }

// console.log(probability([5, 1, 8, 9], 6)); // 50.0
// console.log(probability([7, 4, 17, 14, 12, 3], 16)); // 16.7
// console.log(probability([4, 6, 2, 9, 15, 18, 8, 2, 10, 8], 6)); // 70.0
