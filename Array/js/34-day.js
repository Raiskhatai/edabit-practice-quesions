// 1 => Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// function concat(...values) {
//   let onearr = [];
//   let j = 0;
//   for (let i = 0; i < values.length; i++) {
//     for (let k = 0; k < values[i].length; k++) {
//       onearr[j] = values[i][k];
//       j++;
//     }
//   }
//   return onearr;
// }

// function concat(...values) {
//   let newarr = values.flat(Infinity);
//   return newarr;
// }

// console.log(concat([1, 2, 3], [4, 5], [6, 7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1], [2], [3], [4], [5], [6], [7])); //  [1, 2, 3, 4, 5, 6, 7]
// console.log(concat([1, 2], [3, 4])); //  [1, 2, 3, 4]
// console.log(concat([4, 4, 4, 4, 4])); //  [4, 4, 4, 4, 4]

// 2=> Baseball Batting Average
// A baseball player's batting average is calculated by the following formula:

// BA = (number of hits) / (number of official at-bats)
// Batting averages are always expressed rounded to the nearest thousandth with no leading zero. The top 3 MLB batting averages of all-time are:

// Ty Cobb .366
// Rogers Hornsby .358
// Shoeless Joe Jackson .356
// The given array represents a season of games. Each array item indicates a player's [hits, official at bats] per game. Return a string with the player's seasonal batting average rounded to the nearest thousandth.

// function battingAvg(arr) {
//   let noh = 0;
//   let nooab = 0;
//   for (let i = 0; i < arr.length; i++) {
//     noh += arr[i][0];
//     nooab += arr[i][1];
//   }
//   let result = noh / nooab;
//   result = result.toFixed(3);
//   return result;
// }

// function battingAvg(arr) {
//   let noharr = arr.map((item, i, arr) => arr[i][0]);
//   let nooabarr = arr.map((item, i, arr) => arr[i][1]);
//   let noh = 0;
//   let nooab = 0;
//   for (let i = 0; i < noharr.length; i++) {
//     noh += noharr[i];
//     nooab += nooabarr[i];
//   }
//   let result = noh / nooab;
//   return result.toFixed(3);
// }

// console.log(
//   battingAvg([
//     [0, 0],
//     [1, 3],
//     [2, 2],
//     [0, 4],
//     [1, 5],
//   ])
// ); // ".286"
// console.log(
//   battingAvg([
//     [2, 5],
//     [2, 3],
//     [0, 3],
//     [1, 5],
//     [2, 4],
//   ])
// ); // ".350"
// console.log(
//   battingAvg([
//     [2, 3],
//     [1, 5],
//     [2, 4],
//     [1, 5],
//     [0, 5],
//   ])
// ); // ".273"

// 3 => Find the Second Largest Number
// Create a function that takes an array of numbers and returns the second largest number.

// function secondLargest(arr) {
//   arr.sort((a,b) => a-b);
//   let result = arr[arr.length - 2];
//   return result;
// }

// function secondLargest(arr) {
//   let max = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   let smax = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > smax && arr[i] < max) {
//       smax = arr[i];
//     }
//   }
//   return smax;
// }

// console.log(secondLargest([10, 40, 30, 20, 50])); // 40
// console.log(secondLargest([25, 143, 89, 13, 105])); // 105
// console.log(secondLargest([54, 23, 11, 17, 10])); // 23

// 4=> Sort the Unsortable
// In this challenge you will be given an array similar to the following:

// [[3], 4, [2], [5], 1, 6]
// In words, elements of the array are either an integer or an array containing a single integer. We humans can clearly see that this array can reasonably be sorted according to "the content of the elements" as:

// [1, [2], [3], 4, [5], 6]
// Create a function that, given an array similar to the above, sorts the array according to the "content of the elements".

// function sortIt(arr) {
//   arr.sort((a, b) => a - b);
//   return arr;
// }

// console.log(sortIt([4, 1, 3])); //  [1, 3, 4]
// console.log(sortIt([[4], [1], [3]])); //  [[1], [3], [4]]
// console.log(sortIt([4, [1], 3])); //  [[1], 3, 4]
// console.log(sortIt([[4], 1, [3]])); //  [1, [3], [4]]
// console.log(sortIt([[3], 4, [2], [5], 1, 6])); //  [1, [2], [3], 4, [5], 6]

// 5=> Array of Multiples
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

// function arrayOfMultiples(val1, val2) {
//   let arr = [];
//   let j = 0;
//   for (let i = 1; i <= val2; i++) {
//     arr[j] = val1 * i;
//     j++;
//   }
//   return arr;
// }

// console.log(arrayOfMultiples(7, 5)); //  [7, 14, 21, 28, 35]
// console.log(arrayOfMultiples(12, 10)); //  [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
// console.log(arrayOfMultiples(17, 6)); //  [17, 34, 51, 68, 85, 102]

// 6=> Convert Key, Values in an Object to Array
// Write a function that converts an object into an array of keys and values.

// function objectToArray(obj) {
//   let arr = [];
//   for (let key in obj) {
//     let newarr = [];
//     newarr.push(key);
//     newarr.push(obj[key]);
//     arr.push(newarr);
//   }
//   return arr;
// }

// console.log(
//   objectToArray({
//     D: 1,
//     B: 2,
//     C: 3,
//   })
// );
//  [["D", 1], ["B", 2], ["C", 3]]

// console.log(
//   objectToArray({
//     likes: 2,
//     dislikes: 3,
//     followers: 10,
//   })
// );
//  [["likes", 2], ["dislikes", 3], ["followers", 10]]

// 7=> Fix the Error: Flattening an Array
// I'm trying to write a function to flatten an array of subarrays into one array. (Suppose I am unware there is a .flat() method in the Array prototype). In other words, I want to transform this: [[1, 2], [3, 4]] into [1, 2, 3, 4].

// Here is my code:

// function flatten(arr) {
//   arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2.concat(arr[i]);
//   }
//   return arr2;
// }
// But...it doesn't seem to be working! Fix my code so that it correctly flattens the array.

// function flatten(arr) {
//   let arr2 = [];
//   for (let i = 0; i < arr.length; i++) {
//     arr2 = arr2.concat(arr[i]);
//   }
//   return arr2;
// }

// function flatten(arr) {
//   let newarr = [];
//   let k = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//       newarr[k] = arr[i][j];
//       k++;
//     }
//   }
//   return newarr;
// }

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // []
// Expected: [1, 2, 3, 4]

console.log(
  flatten([
    ["a", "b"],
    ["c", "d"],
  ])
); // []
// Expected: ["a", "b", "c", "d"]

console.log(
  flatten([
    [true, false],
    [false, false],
  ])
); // []
// Expected: [true, false, false, false]
