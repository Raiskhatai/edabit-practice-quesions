// 1=> Say Hello to Guests
// In this exercise you will have to:

// Take a list of names.
// Add "Hello" to every name.
// Make one big string with all greetings.
// The solution should be one string with a comma in between every "Hello (Name)".

// function greetPeople(arr) {
//   str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `hello ${arr[i]}, `;
//   }
//   str = str.trim();
//   str = str.slice(0, str.length - 1);
//   return str;
// }

// function greetPeople(arr) {
//   let str = arr
//     .map(function (item) {
//       return `hello ${item}, `;
//     })
//     .join("");
//   str = str.trim();
//   str = str.substring(0, str.length - 1);
//   return str;
// }

// console.log(greetPeople(["Joe"])); //  "Hello Joe"
// console.log(greetPeople(["Angela", "Joe"])); //  "Hello Angela, Hello Joe"
// console.log(greetPeople(["Frank", "Angela", "Joe"])); //  "Hello Frank, Hello Angela, Hello Joe"

// 2=> Retrieve the Last N Elements
// Write a function that retrieves the last n elements from an array.

// function last(arr, val) {
//   let copyarr = arr.slice();
//   let last_values=[];
//   if(val>arr.length){
//     return "invalid";
//   }
//   else{
//     last_values = copyarr.splice(arr.length - val, 3);
//   }
//   return last_values;
// }

// function last(arr, val) {
//   let returnarr = [];
//   let j = 0;
//   if (arr.length < val) {
//     return "invalid";
//   } else {
//     for (let i = arr.length - val; i <= arr.length - 1; i++) {
//       returnarr[j] = arr[i];
//       j++;
//     }
//   }
//   return returnarr;
// }

// function last(arr, val) {
//   let returnarr;
//   if (val > arr.length) return "invalid";
//   else returnarr = arr.slice(arr.length - val);
//   return returnarr;
// }

// console.log(last([1, 2, 3, 4, 5], 1)); //  [5]
// console.log(last([4, 3, 9, 9, 7, 6], 3)); //  [9, 7, 6]
// console.log(last([1, 2, 3, 4, 5], 7)); //  "invalid"
// console.log(last([1, 2, 3, 4, 5], 0)); //  []

// 3=> Lexicographically First and Last
// Write a function that returns the lexicographically first and lexicographically last rearrangements of a lowercase string. Output the results in the following manner:

//  Notes
// Lexicographically first: the permutation of the string that would appear first in the English dictionary (if the word existed).
// Lexicographically last: the permutation of the string that would appear last in the English dictionary (if the word existed).

// firstAndLast(string) ➞ [first, last]

// function firstAndLast(str) {
//   let returnarr = [];
//   let fstr = str.split("").sort().join("");
//   let lstr = fstr.split("").reverse().join("");
//   returnarr.push(fstr, lstr);
//   return returnarr;
// }

// console.log(firstAndLast("marmite")); //  ["aeimmrt", "trmmiea"]
// console.log(firstAndLast("bench")); //  ["bcehn", "nhecb"]
// console.log(firstAndLast("scoop")); //  ["coops", "spooc"]

// 4=> Same Number of Unique Elements
// Write a function that returns true if two arrays have the same number of unique elements, and false otherwise.

// To illustrate:

// arr1 = [1, 3, 4, 4, 4]
// arr2 = [2, 5, 7]
// In arr1, the number 4 appears three times, which means it contains three unique elements: [1, 3, 4]. Since arr1 and arr2 both contain the same number of unique elements, this example would return true.

// function same(arr1, arr2) {
//   let same1_length = check_same(arr1);
//   let same2_length = check_same(arr2);
//   if (same1_length === same2_length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function check_same(arr) {
//   let returnarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] != arr[i + 1]) {
//       returnarr[j] = arr[i];
//       j++;
//     }
//   }
//   return returnarr.length;
// }

// function same(arr1, arr2) {
//   let same1_lenght = arr1.filter((item, i, arr) => {
//     return arr[i] != arr[i + 1];
//   });
//   let same2_lenght = arr2.filter((item, i, arr) => {
//     return arr[i] != arr[i + 1];
//   });

//   if (same1_lenght.length === same2_lenght.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(same([1, 3, 4, 4, 4], [2, 5, 7])); //  true
console.log(same([9, 8, 7, 6], [4, 4, 3, 1])); //  false
console.log(same([2], [3, 3, 3, 3, 3])); //  true
