// 67 => Return an Array of Subarrays
// Write a function that takes three arguments (x, y, z) and returns an array containing x subarrays (e.g. [[], [], []]), each containing y number of item z.

// x Number of subarrays contained within the main array.
// y Number of items contained within each subarray.
// z Item contained within each subarray.

// function matrix(x, y, z) {
//   let arr = [];
//   for (let i = 0; i < x; i++) {
//     let other = [];
//     for (let k = 0; k < y; k++) {
//       other[k] = z;
//     }
//     arr[i] = other;
//   }
//   return arr;
// }

// console.log(matrix(3, 2, 3)); // [[3, 3], [3, 3], [3, 3]]
// console.log(matrix(2, 1, "edabit")); // [["edabit"], ["edabit"]]
// console.log(matrix(3, 2, 0)); // [[0, 0], [0, 0], [0, 0]]

// 68 => Create a function that takes a string and returns a new string with its first and last characters swapped, except under three conditions:

// If the length of the string is less than two, return "Incompatible.".
// If the argument is not a string, return "Incompatible.".
// If the first and last characters are the same, return "Two's a pair.".

// function flipEndChars(str) {
//   if (typeof str != "string") {
//     return "Incompatible.";
//   } else if (str.length < 2) {
//     return "Incompatible.";
//   } else if (str[0] === str[str.length - 1]) {
//     return "Two's a pair.";
//   } else {
//     str = str.split("");

//     // let a = str[0];
//     // let b = str[str.length - 1];
//     // str.splice(0, 1, b);
//     // str.splice(str.length - 1, 1, a);

//     let temp = str[0];
//     str[0] = str[str.length - 1];
//     str[str.length - 1] = temp;
//     str = str.join("");
//     return str;
//   }
// }

// console.log(flipEndChars("Cat, dog, and mouse.")); // ".at, dog, and mouseC"
// console.log(flipEndChars("ada")); // "Two's a pair."
// console.log(flipEndChars("Ada")); // "adA"
// console.log(flipEndChars("z")); // "Incompatible."
// console.log(flipEndChars([1, 2, 3])); // "Incompatible."

// 69 => Flick Switch
// Create a function that always returns true for every item in a given array. However, if an element is the word "flick", switch to always returning the opposite boolean value.

// function flickSwitch(arr) {
//   let newarr = [];
//   let flick = true;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == "flick") {
//       if (flick) {
//         flick = false;
//       } else {
//         flick = true;
//       }
//     }
//     if (flick) {
//       newarr[i] = true;
//     } else {
//       newarr[i] = false;
//     }
//   }
//   return newarr;
// }

// function flickSwitch(arr) {
//   let newarr = [];
//   flick = true;
//   arr.forEach((item, i) => {
//     if (item == "flick") {
//       flick ? (flick = false) : (flick = true);
//     }
//     flick ? (newarr[i] = true) : (newarr[i] = false);
//   });
//   return newarr;
// }

// console.log(flickSwitch(["edabit", "flick", "eda", "bit"])); // [true, false, false, false]
// console.log(flickSwitch(["flick", 11037, 3.14, 53])); // [false, false, false, false]
// console.log(flickSwitch([false, false, "flick", "sheep", "flick"])); // [true, true, false, false, true]


