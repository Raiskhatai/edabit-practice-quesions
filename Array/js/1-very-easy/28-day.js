// 1=> Burglary Series (10): Calculate Difference
// The insurance guy calls again and apologizes. They found another policy made by your spouse, but this one is limited to cover a particular maximum in losses (for example, 50,000€). You send a bill to your spouse for the difference you lost.

// Given an object of the stolen items and a limit, return the difference between the total value of those items and the limit of the policy.

// function calculateDifference(obj, val) {
//   sum = 0;
//   for (let item in obj) {
//     sum += obj[item];
//   }
//   let result = sum - val;
//   return result;
// }

// function calculateDifference(obj, val) {
//   let sum = 0;
//   Object.values(obj).forEach((element) => {
//     sum += element;
//   });
//   let result = sum - val;
//   return result;
// }

// console.log(calculateDifference({ "baseball bat": 20 }, 5)); // 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); // 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); // 1

// 2=> Even All the Way
// Given an array of numbers, return an array which contains all the even numbers in the original array, which also have even indices.

// function getOnlyEvens(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0 && i % 2 == 0) {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// function getOnlyEvens(arr) {
//   let newarr = arr.filter((item,i) => item % 2 == 0 && i % 2 == 0);
//   return newarr;
// }

// console.log(getOnlyEvens([1, 3, 2, 6, 4, 8])); //  [2, 4]
// console.log(getOnlyEvens([0, 1, 2, 3, 4])); //  [0, 2, 4]
// console.log(getOnlyEvens([1, 2, 3, 4, 5])); //  []

// 3=> Sort by String Length
// Create a function that returns an array of strings sorted by length in ascending order.

// function sortByLength(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].length > arr[j + 1].length) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// function sortByLength(arr) {
//   arr.sort((a, b) => a.length - b.length);
//   return arr;
// }

// function sortByLength(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1; j++) {
//       if (arr[j].length - arr[j + 1].length > 0) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//       }
//     }
//   }
//   return arr;
// }

// console.log(sortByLength(["a", "ccc", "dddd", "bb"])); // ["a", "bb", "ccc", "dddd"]
// console.log(sortByLength(["apple", "pie", "shortcake"])); // ["pie", "apple", "shortcake"]
// console.log(sortByLength(["may", "april", "september", "august"])); // ["may", "april", "august", "september"]
// console.log(sortByLength([])); // []

// 4=>  Sum of Cubes
// Create a function that takes in an array of numbers and returns the sum of its cubes.

// function sumOfCubes(arr) {
//   let value = arr.reduce(function (a, v) {
//     return a + v ** 3;
//   }, 0);
//   return value;
// }

// function sumOfCubes(arr) {
//   let value = 0;
//   for (let i = 0; i < arr.length; i++) {
//     value += arr[i] ** 3;
//   }
//   return value;
// }

// console.log(sumOfCubes([1, 5, 9])); //  855
// // Since 1^3 + 5^3 + 9^3 = 1 + 125 + 729 = 855

// console.log(sumOfCubes([3, 4, 5])); //  216
// console.log(sumOfCubes([2])); //  8

// 5=> Sort an Array by String Length
// Create a function that takes an array of strings and return an array, sorted from shortest to longest.

// function sortByLength(arr) {
//   arr.sort((a, b) => a.length - b.length);
//   return arr;
// }

// console.log(sortByLength(["Google", "Apple", "Microsoft"]));
// //  ["Apple", "Google", "Microsoft"]
// console.log(sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]));
// //  ["Raphael", "Leonardo", "Donatello", "Michelangelo"]
// console.log(sortByLength(["Turing", "Einstein", "Jung"]));
// //  ["Jung", "Turing", "Einstein"]

// 6=> Filter out Strings from an Array
// Create a function that takes an array of non-negative integers and strings and return a new array without the strings.

// function filterArray(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// console.log(filterArray([1, 2, "a", "b"])); //  [1, 2]
// console.log(filterArray([1, "a", "b", 0, 15])); //  [1, 0, 15]
// console.log(filterArray([1, 2, "aasf", "1", "123", 123])); //  [1, 2, 123]
