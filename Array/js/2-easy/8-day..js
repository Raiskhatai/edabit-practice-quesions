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


