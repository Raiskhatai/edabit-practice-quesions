// 45 => All Rotations of a String
// Create a left rotation and a right rotation function that returns all the left rotations and right rotations of a string.

// function leftRotations(str) {
//   let copy = str;
//   let ret = [];
//   for (let i = 0; i < copy.length - 1; i++) {
//     copy = copy.split("");
//     let a = copy.splice(0, 1);
//     copy.splice(copy.length, 0, a);
//     copy = copy.flat(1);
//     copy = copy.join("");
//     ret.push(copy);
//   }
//   ret.unshift(str);
//   return ret;
// }
// function rightRotations(str) {
//   let copy = str;
//   let ret = [];
//   for (let i = copy.length-1; i > 0; i--) {
//     copy = copy.split("");
//     let a = copy.splice(copy.length-1, 1);
//     copy.splice(0, 0, a);
//     copy = copy.flat(1);
//     copy = copy.join("");
//     ret.push(copy);
//   }
//   ret.unshift(str);
//   return ret;
// }

/* with hof */

// console.log(leftRotations("abc")); // ["abc", "bca", "cab"]

// console.log(rightRotations("abc")); // ["abc", "cab", "bca"]

// console.log(leftRotations("abcdef"));
// // ["abcdef", "bcdefa", "cdefab", "defabc", "efabcd", "fabcde"]

// console.log(rightRotations("abcdef"));
// // ["abcdef", "fabcde", "efabcd", "defabc", "cdefab", "bcdefa"]

// 46 => Learn Lodash (3): _.differenceWith, Find the Difference in Arrays Using a Comparison Function
// According to the lodash documentation, This method is like _.difference except it accepts a comparator which is invoked to compare elements of the array to values. The order and references of result values are determined by the first array. The comparator is invoked with two arguments: (arrVal, othVal).

// This challenge requires you to write your own version of this function without using lodash so that you can better understand it works.

// Using a car dealership example, if you have two parking lots and want to see which cars are different this function enables you to check each car in one lot against each car in the other using a comparison function which checks two values and returns true or false if they are equal or not. So you could check engine size and compare to see which cars are different according to the size of their engines. If lot one has a car that has a v6 engine and lot two doesn't have any cars that have v6 engines this would be the difference and the function would return the car with the v6 engine.

// There is only one first array that is used to look for the difference but there can be many values arrays that are used to check against.

// function differenceWith(array, ...values) {
//   let [arr2, comparator] = values;
//   let ret = [];
//   for (let i = 0; i < array.length; i++) {
//     let result = true;
//     for (let k = 0; k < arr2.length; k++) {
//       if (comparator(array[i], arr2[k])) {
//         result = false;
//         break;
//       }
//     }
//     if (result) {
//       ret.push(array[i]);
//     }
//   }
//   return ret;
// }

// console.log(
//   differenceWith(
//     [
//       { make: "mazda", engine: "v8" }, // This is the first array we compare with.
//       { make: "toyota", engine: "v6" },
//     ],
//     [{ make: "toyota", engine: "v8" }], // The second array we compare against.
//     (a, b) => a.engine === b.engine, // This is the comparator that compares the two values.
//   ),
// ); //  [
// //   { make: "toyota",  engine: "v6" },  // This is in the first array but none of the others.
// // ]

// 47 => Learn Lodash: _.difference, Find the Difference in Arrays
// According to the lodash documentation, _.difference(array, [values]) creates an array of array values not included in the other given arrays using SameValueZero for equality comparisons. The order and references of result values are determined by the first array.

// If you wanted to use this function in the real world you would just import lodash and use it but this challenge requires you to write your own version using vanilla javascript. Hopefully this enables you to better understand how the function works .

// Arguments
// array (Array): The array to inspect.
// [values] (...Array): The any number of arrays containing the values to exclude.
// Returns
// (Array): Returns the new array of filtered values.

// function difference(array, ...arrays) {
//   arrays = arrays.flat(Infinity);
//   for (let i = 0; i < array.length; i++) {
//     for (let k = 0; k < arrays.length; k++) {
//       if (array[i] == arrays[k]) {
//         array.splice(i, 1);
//       }
//     }
//   }
//   return array;
// }

// console.log(
//   difference(["cat", "dog", "boy"], ["cat", "dog"], ["aardvark", "camel"]),
// );
//["boy"],

// console.log(difference([2, 1], [2, 3])); // => [1]

// console.log(difference(["banana", "orange", "apple"], ["orange", "apple"])); // => ["banana"]

// console.log(
//   difference(
//     ["dragon", null, 9],
//     ["sickle", "cardigan"],
//     ["aardvark", "camel"],
//     ["football", "dragon"],
//   ),
// ); // [ null, 9]
