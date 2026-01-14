// 102 => Determine If Two Numbers Add up to a Target Value
// Given two unique integer arrays a and b, and an integer target value v, create a function to determine whether there is a pair of numbers that add up to the target value v, where one number comes from one array a and the other comes from the second array b.

// Return true if there is a pair that adds up to the target value and false otherwise.

// function sumOfTwo(a, b, v) {
//   for (let i = 0; i < a.length; i++) {
//     for (let k = 0; k < b.length; k++) {
//       if (a[i] + b[k] == v) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// function sumOfTwo(a, b, v) {
//   let result = false;
//   a.forEach((element) => {
//     b.forEach((item) => {
//       if (element + item == v) {
//         result = true;
//       }
//     });
//   });
//   return result;
// }

// console.log(sumOfTwo([1, 2], [4, 5, 6], 5)); // true
// console.log(sumOfTwo([1, 2], [4, 5, 6], 8)); // true
// console.log(sumOfTwo([1, 2], [4, 5, 6], 3)); // false
// console.log(sumOfTwo([1, 2], [4, 5, 6], 9)); // false

// 103 => All Occurrences of an Element in an Array
// Create a function that returns the indices of all occurrences of an item in the array.

// function getIndices(arr, el) {
//   let retarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == el) {
//       retarr[j] = i;
//       j++;
//     }
//   }
//   return retarr;
// }

// function getIndices(arr, el) {
//   let retarr = [];
//   arr.forEach((element, i) => {
//     if (element == el) {
//       retarr.push(i);
//     }
//   });
//   return retarr;
// }

// console.log(getIndices(["a", "a", "b", "a", "b", "a"], "a")); // [0, 1, 3, 5]
// console.log(getIndices([1, 5, 5, 2, 7], 7)); // [4]
// console.log(getIndices([1, 5, 5, 2, 7], 5)); // [1, 2]
// console.log(getIndices([1, 5, 5, 2, 7], 8)); // []

// 104 => Tidy Title and Author Strings
// You have an array of strings, each consisting of a book title and an author's name.

// To illustrate:

// [
//   ["   Death of a Salesman - Arthur Miller    "],
//   ["   Macbeth - William Shakespeare    "],
//   ["    A Separate Peace - John Knowles     "],
//   [" Lord of the Flies - William Golding"],
//   ["A Tale of Two Cities - Charles Dickens"]
// ]
// // Create a function that takes an array like the one above and transforms it into the same format as the one below:

// [
//   ["Death of a Salesman", "Arthur Miller"],
//   ["Macbeth", "William Shakespeare"],
//   ["A Separate Peace", "John Knowles"],
//   ["Lord of the Flies", "William Golding"],
//   ["A Tale of Two Cities", "Charles Dickens"]
// ]

// function tidyBooks(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].trim();
//     arr[i] = arr[i].split("-");
//     arr[i][0] = arr[i][0].trim();
//     arr[i][1] = arr[i][1].trim();
//   }
//   return arr;
// }

// console.log(
//   tidyBooks([
//     "     The Catcher in the Rye - J. D. Salinger    ",
//     "    Brave New World - Aldous Huxley   ",
//     "    Of Mice and Men - John Steinbeck    ",
//   ])
// );
//  [
//   "The Catcher in the Rye", "J. D. Salinger",
//   "Brave New World", "Aldous Huley",
//   "Of Mice and Men", "John Steinbeck"
// ]

// [
//   ["The Catcher in the Rye", "J. D. Salinger"],
//   ["Brave New World", "Aldous Huxley"],
//   ["Of Mice and Men", "John Steinbeck"],
// ];
