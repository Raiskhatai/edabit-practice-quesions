// 58th => Beginning and End Pairs
// Write a function that pairs the first number in an array with the last, the second number with the second to last, etc.

// function pairs(arr) {
//   let start = 0,
//     end = arr.length - 1;
//   let arrout = [];

//   for (let i = 0; start <= end; i++) {
//     let arrin = [];
//     arrin.push(arr[start], arr[end]);
//     arrout.push(arrin);
//     start++;
//     end--;
//   }
//   return arrout;
// }

// console.log(pairs([1, 2, 3, 4, 5, 6, 7])); // [[1, 7], [2, 6], [3, 5], [4, 4]]
// console.log(pairs([1, 2, 3, 4, 5, 6])); // [[1, 6], [2, 5], [3, 4]]
// console.log(pairs([5, 9, 8, 1, 2])); // [[5, 2], [9, 1], [8, 8]]
// console.log(pairs([])); // []Notes

// 59 => Weekly Salary
// Write a function that takes a list of hours and returns the total weekly salary.

// The input list hours is listed sequentially, ordered from Monday to Sunday.
// A worker earns $10 an hour for the first 8 hours.
// For every overtime hour, he earns $15.
// On weekends, the employer pays double the usual rate, regardless how many hours were worked previously that week. For instance, 10 hours worked on a weekday would pay 80+30 = $110, but on a weekend it would pay 160+60 = $220.

// function weeklySalary(hours) {
//   const retVal = hours.reduce((total, item, index) => {
//     if (index < 5) {
//       if (item <= 8) {
//         return total + item * 10;
//       } else {
//         return total + ((item - 8) * 15 + 8 * 10);
//       }
//     } else {
//       if (item <= 8) {
//         return total + item * 20;
//       } else {
//         return total + ((item - 8) * 30 + 8 * 20);
//       }
//     }
//   }, 0);
//   return retVal;
// }

// console.log(weeklySalary([8, 8, 8, 8, 8, 0, 0])); // 400
// console.log(weeklySalary([10, 10, 10, 0, 8, 0, 0])); // 410
// console.log(weeklySalary([0, 0, 0, 0, 0, 12, 0])); // 280

