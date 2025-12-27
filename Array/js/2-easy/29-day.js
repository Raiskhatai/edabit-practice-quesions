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

console.log(upwardTrend([1, 2, 3, 4])); // true
console.log(upwardTrend([1, 2, 6, 5, 7, 8])); // false
console.log(upwardTrend([1, 2, 3, "4"])); // "Strings not permitted!"
console.log(upwardTrend([1, 2, 3, 6, 7])); // true
