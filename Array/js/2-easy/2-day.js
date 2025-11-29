// 7 => Learn Lodash (2): Compact
// According to the lodash documentation, _.compact creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

// Your task is to build this helper function without using lodash. You will write a function that receives an array and removes all falsey values.

// function compact(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!!arr[i]) {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// console.log(compact([0, 1, false, 2, "", 3])); // => [1, 2, 3]

// Do not attempt to import lodash; you are simply writing your own version.
// This entire series of challenges can be found here.

// 8 => Converting Objects to Arrays
// Write a function that converts an object into an array, where each element represents a key-value pair in the form of an array.

// function toArray(obj) {
//   let newarr = [];
//   for (let key in obj) {
//     newarr[key] = obj[key];
//   }
//   return newarr;
// // }

// console.log(toArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]];
// console.log(toArray({ shrimp: 15, tots: 12 })); // [["shrimp", 15], ["tots", 12]];
// console.log(toArray({})); // [];

// 9=> Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// function objectToArray(obj) {
//   let newarr = [];
//   for (let key in obj) {
//     newarr[key] = obj[key];
//   }
//   return newarr;
// }

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// ); // [["D", 1], ["B", 2], ["C", 3]]

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// ); // [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 10 => Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// function concat(...arrs) {
//   let single_arr = [];
//   let j = 0;
//   for (let i = 0; i < arrs.length; i++) {
//     for (let k = 0; k < arrs[i].length; k++) {
//       single_arr[j] = arrs[i][k];
//       j++;
//     }
//   }
//   return single_arr;
// }

// function concat(...arrs) {
//   let newarr = [...arrs] + "";
//   let arr = [];
//   newarr = newarr.split(",");
//   for (let i = 0; i < newarr.length; i++) {
//     arr[i] = +newarr[i];
//   }
//   return arr;
// }

// function concat(...arrs) {
//   let newarr = [];
//   for (let i = 0; i < arrs.length; i++) {
//     newarr = newarr.concat(arrs[i]);
//   }
//   return newarr;
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])); // [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4])); // [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4])); // [4, 4, 4, 4, 4]

// 11=> Index Multiplier
// Return the sum of all items in an array, where each item is multiplied by its index (zero-based). For empty arrays, return 0.

// function indexMultiplier(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i] * i;
//   }
//   return sum;
// }

// function indexMultiplier(arr) {
//   let sum = arr.reduce((a, v, i) => a + v * i, 0);
//   return sum;
// }

// console.log(indexMultiplier([1, 2, 3, 4, 5])); //40
// // (1*0 + 2*1 + 3*2 + 4*3 + 5*4)

// console.log(indexMultiplier([-3, 0, 8, -6])); //-2
// // (-3*0 + 0*1 + 8*2 + -6*3)

// 12 => Special Arrays
// An array is special if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.

function isSpecialArray(arr) {
  let result = true;
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 == 0) {
      if (arr[i] % 2 == 0) {
        result = true;
      } else {
        return false;
      }
    } else if (i % 2 == 1) {
      if (arr[i] % 2 == 1) {
        result = true;
      } else {
        return false;
      }
    }
  }
  return result;
}



console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3])); //  true
// Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]

console.log(isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3])); //  false
// Index 2 has an odd number 9.

console.log(isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3])); //  false
// Index 3 has an even number 8.
