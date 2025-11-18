// 1=> Repeat the Same Item Multiple Times
// Create a function that takes two arguments (item, times). The first argument (item) is the item that needs repeating while the second argument (times) is the number of times the item is to be repeated. Return the result in an array.

// function repeat(val, times) {
//   let arr = [];
//   for (let i = 0; i < times; i++) {
//     arr[i] = val;
//   }
//   return arr;
// }

// console.log(repeat("edabit", 3)); //  ["edabit", "edabit", "edabit"]
// console.log(repeat(13, 5)); //  [13, 13, 13, 13, 13]
// console.log(repeat("7", 2)); //  ["7", "7"]
// console.log(repeat(0, 0)); //  []

// 2 => State Names and Abbreviations
// Create a function that filters out an array of state names into two categories based on the second parameter.

// Abbreviations abb
// Full names full

// function filterStateNames(arr, val) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == arr[i].toUpperCase() && val == "abb") {
//       newarr.push(arr[i]);
//     } else if (arr[i] != arr[i].toUpperCase() && val == "full") {
//       newarr.push(arr[i]);
//     }
//   }

//   return newarr;
// }

// function filterStateNames(arr, val) {
//   let newarr = arr.filter((item) => {
//     if (item == item.toUpperCase() && val == "abb") {
//       return item;
//     } else if (item != item.toUpperCase() && val == "full") {
//       return item;
//     }
//   });
//   return newarr;
// }

// console.log(filterStateNames(["Arizona", "CA", "Nevada", "NY"], "abb")); //  ["CA", "NY"]
// console.log(filterStateNames(["Arizona", "CA", "NY", "Nevada"], "full")); //  ["Arizona", "Nevada"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "abb")); //  ["MT", "NJ", "TX", "ID", "IL"]
// console.log(filterStateNames(["MT", "NJ", "TX", "ID", "IL"], "full")); //  []

// 3=> Exists a Number Higher?
// Write a function that returns true if there exists at least one number that is larger than or equal to n.

// function existsHigher(arr, val) {
//   let nval = arr.some((item) => item >= val);
//   return nval;
// }

// function existsHigher(arr, val) {
//   let rval = false;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= val) {
//       rval = true;
//     }
//   }
//   return rval;
// }

// console.log(existsHigher([5, 3, 15, 22, 4], 10)); //  true
// console.log(existsHigher([1, 2, 3, 4, 5], 8)); //  false
// console.log(existsHigher([4, 3, 3, 3, 2, 2, 2], 4)); //  true
// console.log(existsHigher([], 5)); //  false

//  4=> Calculate Determinant of a 2x2 Matrix
// Create a function to calculate the determinant of a 2 * 2 matrix. The determinant of the following matrix is: ad - bc:

// [[a, b], [c, d]]

// function calcDeterminant(arr) {
//   let ad;
//   let bc;
//   ad = arr[0][0] * arr[1][1];
//   bc = arr[0][1] * arr[1][0];
//   let res = ad - bc;
//   return res;
// }

// console.log(
//   calcDeterminant([
//     [1, 2],
//     [3, 4],
//   ])
// ); // -2

// console.log(
//   calcDeterminant([
//     [5, 3],
//     [3, 1],
//   ])
// ); // -4

// console.log(
//   calcDeterminant([
//     [1, 1],
//     [1, 1],
//   ])
// ); // 0

// 5=> Even Odd Partition
// Write a function that partitions the array into two subarrays: one with all even integers, and the other with all odd integers. Return your result in the following format:

// [[evens], [odds]]

// function evenOddPartition(arr) {
//   let newarr = [];
//   even = [];
//   j = 0;
//   odd = [];
//   k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       even[j] = arr[i];
//       j++;
//     } else {
//       odd[k] = arr[i];
//       k++;
//     }
//   }
//   newarr[0] = even;
//   newarr[1] = odd;
//   return newarr;
// }

// function evenOddPartition(arr) {
//   let rtnarr = [];
//   let even = arr.filter((item) => item % 2 == 0);
//   let odd = arr.filter((item) => item % 2 != 0);
//   rtnarr.push(even, odd);
//   return rtnarr;
// }

// function evenOddPartition(arr) {
//   let newarr = [[], []];
//   let j = 0;
//   let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       newarr[0][j] = arr[i];
//       j++;
//     } else {
//       newarr[1][k] = arr[i];
//       k++;
//     }
//   }
//   return newarr;
// }

// console.log(evenOddPartition([5, 8, 9, 2, 0])); //  [[8, 2, 0], [5, 9]]
// console.log(evenOddPartition([1, 0, 1, 0, 1, 0])); //  [[0, 0, 0], [1, 1, 1]]
// console.log(evenOddPartition([1, 3, 5, 7, 9])); //  [[], [1, 3, 5, 7, 9]]
// console.log(evenOddPartition([])); //  [[], []]
