// 10 => Who Left the Array?
// You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.

// function missing(arr1, arr2) {
//   let missingValue = 0;
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] != arr2[i]) {
//       missingValue = arr1[i];
//       break;
//     }
//   }
//   return missingValue;
// }

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8])); // 2
// console.log(
//   missing([true, true, false, false, true], [false, true, false, true]),
// ); // true
// console.log(
//   missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"]),
// ); // "ugly"

// 11 => Finding Common Elements
// Create a function that takes two "sorted" arrays of numbers and returns an array of numbers which are common to both the input arrays.

// function commonElements(arr1, arr2) {
//   let retarr = [];
//   let j = 0;
//   arr1 = [...new Set(arr1)];
//   arr2 = [...new Set(arr2)];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let k = 0; k < arr2.length; k++) {
//       if (arr1[i] === arr2[k]) {
//         retarr[j] = arr1[i];
//         j++;
//       }
//     }
//   }
//   return retarr;
// }

// function commonElements(arr1, arr2) {
//   arr1 = [...new Set(arr1)];
//   arr2 = [...new Set(arr2)];
//   let ret = [];
//   arr1.forEach((element) => {
//     arr2.forEach((item) => {
//       if (element == item) {
//         ret.push(element);
//       }
//     });
//   });
//   return ret;
// }

// console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3])); // [3]
// console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10])); // [1, 3, 4, 7]
// console.log(commonElements([1, 2, 2, 2, 3, 4, 5], [1, 2, 4, 5])); // [1, 2, 4, 5]
// console.log(commonElements([1, 2, 3, 4, 5], [10, 12, 13, 15])); // []
