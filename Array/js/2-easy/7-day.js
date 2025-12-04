// 39 => Lowercase and Uppercase Map
// Write a function that creates an object with each (key, value) pair being the (lower case, upper case) versions of a letter, respectively.

// function mapping(arr) {
//   let obj = new Object();
//   for (let i = 0; i < arr.length; i++) {
//     obj[arr[i]] = arr[i].toUpperCase();
//   }
//   return obj;
// }

// function mapping(arr) {
//   let obj = {};
//   for (let key of arr) {
//     obj[key] = key.toUpperCase();
//   }
//   return obj;
// }

// function mapping(arr) {
//   let obj = {};
//   arr.forEach((element) => {
//     obj[element] = element.toUpperCase();
//   });
//   return obj;
// }

// console.log(mapping(["p", "s"])); //  { "p": "P", "s": "S" }
// console.log(mapping(["a", "b", "c"])); //  { "a": "A", "b": "B", "c": "C" }
// console.log(mapping(["a", "v", "y", "z"])); //  { "a": "A", "v": "V", "y": "Y", "z": "Z" }

// 40 => Even or Odd: Which is Greater?
// Create a function to determine if the sum of all the individual even digits are greater than the sum of all the individual odd digits in a string of numbers.

// If the sum of odd numbers is greater than the sum of even numbers, return "Odd is greater than Even".
// If the sum of even numbers is greater than the odd numbers, return "Even is greater than Odd".
// If the sum of both even and odd numbers are equal, return "Even and Odd are the same".

// function evenOrOdd(str) {
//   let arr = str.split("");
//   let even = 0;
//   let odd = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i] = +arr[i];
//       even += arr[i];
//     } else {
//       arr[i] = +arr[i];
//       odd += arr[i];
//     }
//   }
//   if (even > odd) {
//     return "Even is greater than Odd";
//   } else if (odd > even) {
//     return "Odd is greater than Even";
//   } else {
//     return "Even and Odd are the same";
//   }
// }

// function evenOrOdd(str) {
//   let arr = str.split("");
//   let even = 0;
//   let odd = 0;
//   arr.forEach((item) => {
//     item % 2 == 0 ? (even += +item) : (odd += +item);
//   });
//   return even > odd
//     ? "Even is greater than Odd"
//     : odd > even
//     ? "Odd is greater than Even"
//     : "Even and Odd are the same";
// }

// console.log(evenOrOdd("22471")); // "Even and Odd are the same"
// console.log(evenOrOdd("213613")); // "Even and Odd are the same"
// console.log(evenOrOdd("23456")); // "Even is greater than Odd"

// 41 => Sum of Resistance in Parallel Circuits
// If two or more resistors are connected in parallel, the overall resistance of the circuit reduces. It is possible to calculate the total resistance of a parallel circuit by using this formula:

// 1/RTotal = 1/R1 + 1/R2 + 1/R3 ...

// Create a function that takes an array of parallel resistance values, and calculates the total resistance of the circuit.

// function parallelResistance(arr) {
//   let R_total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     R_total += 1 / arr[i];
//   }
//   let r_val=1 / R_total;
//   return +r_val.toFixed(1);
// }

// function parallelResistance(arr) {
//   let R_total = arr.reduce((a, v) => a + 1 / v, 0);
//   return_val = 1 / R_total;
//   return +return_val.toFixed(1);
// }

// console.log(parallelResistance([6, 3, 6])); //  1.5

// 1/RTotal = 1/6 + 1/3 + 1/6
// 1/RTotal = 2/3
// RTotal = 3/2 = 1.5

// 42 => Find Unique Positive Numbers from Array
// Write a function that takes an array and returns a new array with unique positive (more than 0) numbers.

// function uniqueArr(arr) {
//   let newarr = arr.filter((item) => item > 0);
//   let other = [];
//   j = 0;
//   for (let i = 0; i < newarr.length; i++) {
//     if (newarr.indexOf(newarr[i]) == i) {
//       other[j] = newarr[i];
//       j++;
//     }
//   }
//   return other;
// }

// function uniqueArr(arr) {
//   let uniquenum = [...new Set(arr)];
//   let newarr = uniquenum.filter((item) => item > 0);
//   return newarr;
// }

// console.log(uniqueArr([-5, 1, -7, -5, -2, 3, 3, -5, -1, -1])); // [1, 3]
// console.log(uniqueArr([3, -3, -3, 5, 5, -6, -2, -4, -1, 3])); // [3, 5]
// console.log(uniqueArr([10, 6, -12, 13, 5, 5, 13, 6, 5])); // [10, 6, 13, 5]

// 43 => Transform Upvotes
// Create a function that transforms a string of upvote counts into an array of numbers. Each k represents a thousand.

// function transformUpvotes(str) {
//   let arr = str.split(" ");
//   let numarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes("k")) {
//       numarr[i] = arr[i].slice(0, arr[i].indexOf("k")) * 1000;
//     } else {
//       numarr[i] = +arr[i];
//     }
//   }
//   return numarr;
// }

// function transformUpvotes(str) {
//   let arr = str.split(" ");
//   let newarr = arr.map((item) => {
//     if (item.includes("k")) {
//       item = item.slice(0, item.indexOf("k"));
//       return item * 1000;
//     } else {
//       return +item;
//     }
//   });
//   return newarr;
// }

// console.log(transformUpvotes("6.8k 13.5k")); // [6800, 13500]
// console.log(transformUpvotes("5.5k 8.9k 32")); // [5500, 8900, 32]
// console.log(transformUpvotes("20.3k 3.8k 7.7k 992")); // [20300, 3800, 7700, 992]

