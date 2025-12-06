// 44 => Negative Image
// Suppose an image can be represented as a 2D array of 0s and 1s. Write a function to reverse an image. Replace the 0s with 1s and vice versa.

// function reverseImage(image) {
//   for (let i = 0; i < image.length; i++) {
//     for (let k = 0; k < image[i].length; k++) {
//       if (image[i][k] == 1) {
//         image[i].splice(k, 1, 0);
//       } else if (image[i][k] == 0) {
//         image[i].splice(k, 1, 1);
//       }
//     }
//   }
//   return image;
// }

// function reverseImage(arr) {
//   let r_arr = arr.map((item) => {
//     return item.map((item2, k, arr2) => {
//       if (item2 == 1) {
//         return (arr2[k] = 0);
//       } else if (item2 == 0) {
//         return (arr2[k] = 1);
//       }
//     });
//   });
//   return r_arr;
// }

// console.log(
//   reverseImage([
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
//   ])
// ); //[([0, 1, 1], [1, 0, 1], [1, 1, 0])];

// console.log(
//   reverseImage([
//     [1, 1, 1],
//     [0, 0, 0],
//   ])
// ); //[([0, 0, 0], [1, 1, 1])];

// console.log(
//   reverseImage([
//     [1, 0, 0],
//     [1, 0, 0],
//   ])
// ); //[([0, 1, 1], [0, 1, 1])];

// 45 = > Remove the Special Characters from a String
// Create a function that takes a string, removes all "special" characters (e.g. ., !, @, #, $, %, ^, &, \, *, (, )) and returns the new string. The only non-alphanumeric characters allowed are dashes -, underscores _ and spaces.

// function removeSpecialCharacters(str) {
//   let special_char = [
//     ".",
//     "!",
//     "@",
//     "#",
//     "$",
//     "%",
//     "^",
//     "&",
//     "\\",
//     "*",
//     "(",
//     ")",
//   ];

//   let r = "";
//   for (let i = 0; i < special_char.length; i++) {
//     for (let k = i; k < special_char.length; k++) {
//       if (!!str.includes(special_char[k])) {
//         str = str.replace(`${special_char[k]}`, "");
//       }
//     }
//   }
//   return str;
// }

// function removeSpecialCharacters(str) {
//   for (let i = 0; i < str.length; i++) {
//     str = str.replace(/[!#$%^&\*().]/, "");
//   }
//   return str;
// }

// function removeSpecialCharacters(str) {
//   str = str.replaceAll(/[!@#$%^&\*().]/g, "");
//   return str;
// }

// console.log(removeSpecialCharacters("The quick brown fox!")); // "The quick brown fox"
// console.log(removeSpecialCharacters("%fd76$fd(-)6GvKlO.")); // "fd76fd-6GvKlO"
// console.log(removeSpecialCharacters("D0n$c sed 0di0 du1")); // "D0nc sed 0di0 du1"

// 46 => Positive Count / Negative Sum
// Create a function that takes an array of positive and negative numbers. Return an array where the first element is the count of positive numbers and the second element is the sum of negative numbers.

// function countPosSumNeg(arr) {
//   let positive = 0;
//   let negative = 0;
//   if (arr.length == 0) {
//     return [];
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] >= 0) {
//         positive++;
//       } else {
//         negative += arr[i];
//       }
//     }
//   }
//   let returnarr = [positive, negative];
//   return returnarr;
// }

// function countPosSumNeg(arr) {
//   let ret_arr = [0, 0];
//   if (arr.length == 0) {
//     return [];
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       ret_arr[0]++;
//     } else {
//       ret_arr[1] += arr[i];
//     }
//   }
//   return ret_arr;
// }

// console.log(
//   countPosSumNeg([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15])
// ); // [10, -65]
// // // There are a total of 10 positive numbers.
// // The sum of all negative numbers equals -65.

// console.log(countPosSumNeg([92, 6, 73, -77, 81, -90, 99, 8, -85, 34])); // [7, -252]
// console.log(countPosSumNeg([91, -4, 80, -73, -28])); // [2, -105]
// console.log(countPosSumNeg([])); // []

// 47 => Inclusive Array Ranges
// Write a function that, given the start startNum and end endNum values, return an array containing all the numbers inclusive to that range. See examples below.

// function inclusiveArray(startNum, endNum) {
//   let arr = [];
//   let j = 0;
//   if (startNum > endNum) {
//     arr[0] = startNum;
//     return arr;
//   } else {
//     for (let i = startNum; i <= endNum; i++) {
//       arr[j] = i;
//       j++;
//     }
//   }
//   return arr;
// }

// console.log(inclusiveArray(1, 5)); // [1, 2, 3, 4, 5]
// console.log(inclusiveArray(2, 8)); // [2, 3, 4, 5, 6, 7, 8]
// console.log(inclusiveArray(10, 20)); // [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// console.log(inclusiveArray(17, 5)); // [17]

// 48 => Sum of Found Indexes
// Create a function which takes in an array of numbers and a number to find. Return the sum of every index in the array which matches the chosen number.

// function sumFoundIndexes(arr, val) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == val) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// function sumFoundIndexes(arr, val) {
//   let sum = arr.reduce((a, v, i) => {
//     if (v == val) {
//       return a + i;
//     } else {
//       return a;
//     }
//   }, 0);
//   return sum;
// }

// console.log(sumFoundIndexes([0, 3, 3, 0, 0, 3], 3)); // 8
// // // The number 3 was found at indexes 1, 2 and 5.
// // // 8 = 1 + 2 + 5

// console.log(sumFoundIndexes([1, 2, 3, 4, 5, 6], 3)); // 2
// console.log(sumFoundIndexes([100, 100, 100, 100, 100], 100)); // 10
// console.log(sumFoundIndexes([5, 10, 15, 20], 2)); // 0

// 49 => Sum of the Items in an Array
// Create a function that takes an array and returns the sum of all items in the array.

// function sumArray(arr) {
//   arr = arr.flat(Infinity);
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       sum += sumArray(arr[i]);
//     } else {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// console.log(sumArray([1, 2, 3])); // 6
// // 1 + 2 + 3 = 6
// console.log(sumArray([1, [2, [1]], 3])); // 7
// // 1 + 2 + 1 + 3 = 7

// 50 => Sum of all Evens in a Matrix
// Create a function that returns the sum of all even elements in a 2D matrix.

// function sumOfEvens(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] % 2 == 0) {
//         sum += arr[i][k];
//       }
//     }
//   }
//   return sum;
// }

// function sumOfEvens(arr) {
//   let sum = 0;
//   arr.forEach((Element) => {
//     return Element.forEach((item) => {
//       if (item % 2 == 0) {
//         sum += item;
//       }
//     });
//   });
//   return sum;
// }

// console.log(
//   sumOfEvens([
//     [1, 0, 2],
//     [5, 5, 7],
//     [9, 4, 3],
//   ])
// ); //6

// // 2 + 4 = 6

// console.log(
//   sumOfEvens([
//     [1, 1],
//     [1, 1],
//   ])
// ); //0

// console.log(
//   sumOfEvens([
//     [42, 9],
//     [16, 8],
//   ])
// ); //66

// console.log(sumOfEvens([[], [], []])); //0

// 51 => Mini Peaks
// Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

// function miniPeaks(arr) {
//   const ret_arr = [];
//   let j = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
//       ret_arr[j] = arr[i];
//       j++;
//     }
//   }
//   return ret_arr;
// }

// function miniPeaks(arr) {
//   let ret_arr = arr.filter((item, i, inner) => {
//     if (item > inner[i + 1] && item > inner[i - 1]) {
//       return item;
//     }
//   });
//   return ret_arr;
// }

// console.log(miniPeaks([4, 5, 2, 1, 4, 9, 7, 2])); // [5, 9]
// // 5 has neighbours 4 and 2, both are less than 5.
// console.log(miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4])); // [2, 3, 5]
// console.log(miniPeaks([1, 2, 3, 4, 5, 6])); // []

