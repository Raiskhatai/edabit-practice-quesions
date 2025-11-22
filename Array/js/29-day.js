// 1 => Is the Average of All Elements a Whole Number?
// Create a function that takes an array as an argument and returns true or false depending on whether the average of all elements in the array is a whole number or not.

// function isAvgWhole(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum % arr.length == 0) {
//     return true;
//   }
//   return false;
// }

// function isAvgWhole(arr) {
//   let sum = arr.reduceRight((acc, val) => {
//     return acc + val;
//   }, 0);
//   if (sum % arr.length == 0) {
//     return true;
//   }
//   return false;
// }

// console.log(isAvgWhole([1, 3])); //  true
// console.log(isAvgWhole([1, 2, 3, 4])); //  false
// console.log(isAvgWhole([1, 5, 6])); //  true
// console.log(isAvgWhole([1, 1, 1])); //  true
// console.log(isAvgWhole([9, 2, 2, 5])); //  false

// 2=>  Transform into an Array with No Duplicates
// A set is a collection of unique items. A set can be formed from an array by removing all duplicate items.

// [1, 3, 3, 5, 5, 5]
// original array

// [1, 3, 5]
// original array transformed into a set
// Create a function that sorts an array and removes all duplicate items from it.

// function set(arr) {
//   let newarr = [];
//   j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// function set(arr) {
//   let newarr = arr.filter((item, i, arr) => item != arr[i + 1]);
//   return newarr;
// }

// console.log(set([1, 3, 3, 5, 5])); //  [1, 3, 5]
// console.log(set([4, 4, 4, 4])); //  [4]
// console.log(set([5, 7, 8, 9, 10, 15])); //  [5, 7, 8, 9, 10, 15]
// console.log(set([3, 3, 3, 2, 1])); //  [1, 2, 3]

// 3 => Absolute Sum
// Take an array of integers (positive or negative or both) and return the sum of the absolute value of each element.

// function getAbsSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       sum += arr[i] * -1;
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// function getAbsSum(arr) {
//   let sum = arr.reduce((acc, val) => {
//     if (val < 0) {
//       return acc + val * -1;
//     } else {
//       return acc + val;
//     }
//   },0);
//   return sum;
// }

// console.log(getAbsSum([2, -1, 4, 8, 10])); //  25
// console.log(getAbsSum([-3, -4, -10, -2, -3])); //  22
// console.log(getAbsSum([2, 4, 6, 8, 10])); //  30
// console.log(getAbsSum([-1])); //  1

// 4=> Phone Number Formatting
// Create a function that takes an array of 10 numbers (between 0 and 9) and returns a string of those numbers formatted as a phone number (e.g. (555) 555-5555).

// function formatPhoneNumber(arr) {
//   let in_r_brackets = arr.slice(0, 3).join("");
//   let after_brackets = arr.slice(3, 6).join("");
//   let end_four_digits = arr.slice(6).join("");

//   let p_num = `(${in_r_brackets}) ${after_brackets}-${end_four_digits}`;
//   return p_num;
// }

// function formatPhoneNumber(arr) {
//   let f_three = "(";
//   let l_three = ") ";
//   let l_four = "-";
//   for (let i = 0; i < arr.length; i++) {
//     if (i < 3) {
//       f_three += arr[i];
//     } else if (i > 2 && i < 6) {
//       l_three += arr[i];
//     } else {
//       l_four += arr[i];
//     }
//   }

//   let p_num = f_three + l_three + l_four;

//   return p_num;
// }

// console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //  "(123) 456-7890"

// console.log(formatPhoneNumber([5, 1, 9, 5, 5, 5, 4, 4, 6, 8])); //  "(519) 555-4468"

// console.log(formatPhoneNumber([3, 4, 5, 5, 0, 1, 2, 5, 2, 7])); //  "(345) 501-2527"

// 5=> Find the Largest Numbers in a Group of Arrays
// Create a function that takes an array of arrays with numbers. Return a new (single) array with the largest numbers of each.

// function findLargestNums(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].sort((a, b) => a - b);
//     newarr[j] = arr[i][arr[i].length - 1];
//     j++;
//   }
//   return newarr;
// }

console.log(
  findLargestNums([
    [4, 2, 7, 1],
    [20, 70, 40, 90],
    [1, 2, 0],
  ])
); //  [7, 90, 2]

console.log(
  findLargestNums([
    [-34, -54, -74],
    [-32, -2, -65],
    [-54, 7, -43],
  ])
); //  [-34, -2, 7]

console.log(
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
); //  [0.7634, 9.32, 9]
