// 23 => All About Strings
// Create a function that, given a string with at least three characters, returns an array of its:

// Length.
// First character.
// Last character.
// Middle character,
//  if the string has an odd number of characters. Middle TWO characters, if the string has an even number of characters.
// Index of the second occurrence of the second character in the format "@ index #" and "not found" if the second character doesn't occur again.

// function allAboutStrings(str) {
//   let ret = [];
//   let first = str[0];
//   let last = str[str.length - 1];
//   let mid = "";
//   if (str.length % 2 == 0) {
//     mid = str[str.length / 2 - 1];
//     mid += str[str.length / 2];
//   } else {
//     mid = str[Number(Math.floor(str.length / 2))];
//   }
//   let find = 0;
//   find = str.lastIndexOf(str[1]);
//   index =
//     str.indexOf(str[1]) === str.lastIndexOf(str[1])
//       ? "not found"
//       : `@ index ${str.lastIndexOf(str[1])}`;
//   ret.push(str.length, first, last, mid, index);
//   return ret;
// }

// console.log(allAboutStrings("LASA")); // [4, "L", "A", "AS", "@ index 3"]
// console.log(allAboutStrings("Computer")); // [8, "C", "r", "pu", "not found"]
// console.log(allAboutStrings("Science")); // [7, "S", "e", "e", "@ index 5"]

// 24 => Two Distinct Elements
// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

// function returnUnique(arr) {
//   let ret = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
//       ret.push(arr[i]);
//     }
//   }
//   return ret;
// }

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6])); // [9, 7]
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1])); // [2, 1]
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8])); // [5, 6]
