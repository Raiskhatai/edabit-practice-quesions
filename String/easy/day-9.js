// 71 => Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// function isFourLetters(arr) {
//   let retarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length === 4) {
//       retarr.push(arr[i]);
//     }
//   }
//   return retarr;
// }

// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); // ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); // ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); // ["Ryan", "Matt"]

// 72 => String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// function stringPairs(str) {
//   let retArr = [];
//   if (str.length % 2 === 0) {
//     for (let i = 0; i < str.length; i += 2) {
//       retArr.push(str.slice(i, i + 2));
//     }
//     return retArr;
//   } else {
//     for (let i = 0; i < str.length; i += 2) {
//       retArr.push(str.slice(i, i + 2));
//     }
//     retArr.splice(retArr.length - 1, 1, str[str.length - 1] + "*");
//     return retArr;
//   }
// }

// console.log(stringPairs("mubashir")); // ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit")); // ["ed", "ab", "it"]
// console.log(stringPairs("airforces")); // ["ai", "rf", "or", "ce", "s*"]

