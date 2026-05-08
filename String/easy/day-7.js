// 52 => The Study of Wumbology
// Create a function that flips M's to W's (all uppercase).

// function wumbo(words) {
//   return words.replaceAll("M", "W");
// }

// function wumbo(words) {
//   let retWords = "";
//   for (let i = 0; i < words.length; i++) {
//     if (words[i] === "M") retWords += "W";
//     else {
//       retWords += words[i];
//     }
//   }
//   return retWords;
// }

// console.log(wumbo("I LOVE MAKING CHALLENGES")); // "I LOVE WAKING CHALLENGES"
// console.log(wumbo("MEET ME IN WARSAW")); // "WEET WE IN WARSAW"
// console.log(wumbo("WUMBOLOGY")); // "WUWBOLOGY"

// 53 => Buggy Code (Part 6)
// Mubashir wants to remove numbers from a given string!

// Help him by fixing the code in the code tab to pass this challenge. Look at the examples below to get an idea of what the function should do.

// function removeNumbers(str) {
//   return str
//     .split("")
//     .filter((c) => Object.is(c * 1, NaN))
//     .join("");
// }

// function removeNumbers(str) {
//   return str
//     .split("")
//     .filter((c) => isNaN(parseInt(c), NaN))
//     .join("");
// }

// console.log(removeNumbers("mubashir1")); // "mubashir"
// console.log(removeNumbers("12ma23tt")); // "matt"
// console.log(removeNumbers("e1d2a3b4i5t6")); // "edabit"

// 54 => Cleaning Up Messy Arrays
// Create a function that takes an array. This array will contain numbers represented as strings.

// Your function should split this array into two new arrays. The first array should contain only even numbers. The second only odd. Then, wrap these two arrays in one main array and return it.

// Return an empty array if there are no even numbers, or odd.

// function cleanUpArray(arr) {
//   let even = [];
//   let odd = [];
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] * 1) % 2 === 0) even.push(parseInt(arr[i]));
//     else odd.push(arr[i] * 1);
//   }
//   return [even, odd];
// }

// console.log(cleanUpArray(["8"])); // [[8], []]
// console.log(cleanUpArray(["11"])); // [[], [11]]
// console.log(cleanUpArray(["7", "4", "8"])); // [[4, 8], [7]]
// console.log(cleanUpArray(["9", "4", "5", "8"])); // [[4, 8], [9, 5]]

// 55 => Even and Odd Strings
// Given a one word lowercase string txt, return another string such that even-indexed and odd-indexed characters are grouped and groups are space-separated.

// function evenOddString(txt) {
//   let even = "";
//   let odd = "";
//   for (let i = 0; i < txt.length; i++) {
//     if (i % 2 === 0) {
//       even += txt[i];
//     } else {
//       odd += txt[i];
//     }
//   }
//   return even + " " + odd;
// }

// console.log(evenOddString("mubashir")); // "mbsi uahr"
// // Letters at even indexes = "mbsi"
// // Letters at odd indexes = "uahr"
// // Join both strings with a space

// console.log(evenOddString("edabit")); // "eai dbt"
// console.log(evenOddString("airforce")); // "aroc ifre"

// 56 => Simple Letters
// Create a function that takes two lowercase strings str1 and str2 of letters from a to z and returns the sorted and longest string containing distinct letters.

// Examples

// function longestString(str1, str2) {
//   // let one = [...str1, ...str2];
//   // return [...new Set(one.sort())].join("");
// }

// str1 = "mubashir";
// str2 = "edabit";

// console.log(longestString(str1, str2)); // "abdehimrstu"
// // Contains sorted and distinct letters of the given strings.

// str1 = "abcdefghijklmnopqrstuvwxyz";
// str2 = "abcdefghijklmnopqrstuvwxyz";
// console.log(longestString(str1, str2)); // "abcdefghijklmnopqrstuvwxyz"
// // Contains sorted and distinct letters of the given strings.

// 57 = Arithmetic Progression
// In mathematics, an Arithmetic Progression (AP) is a sequence of numbers such that the difference between the consecutive terms is constant. Create a function that takes three arguments:

// First element of the sequence first
// Constant difference between the elements diff
// Total numbers in the sequence n
// Return the first n elements of the sequence with the given common difference diff. The final result should be a string of numbers, separated by comma and space.

// function arithmeticProgression(start, diff, n) {
//   let retdiff = "";
//   for (let i = 0; i < n; i++) {
//     retdiff += start + ", ";
//     start = start + diff;
//   }
//   return retdiff.slice(0, -2);
// }

// console.log(arithmeticProgression(1, 2, 5)); // "1, 3, 5, 7, 9"
// console.log(arithmeticProgression(1, 0, 5)); // "1, 1, 1, 1, 1"
// console.log(arithmeticProgression(1, -3, 10)); // "1, -2, -5, -8, -11, -14, -17, -20, -23, -26"

// 58 => Keyboard Mistakes
// Character recognition software often makes mistakes when documents (especially old ones written with a typewriter) are digitized.

// Your task is to correct the errors in the digitized text. You only have to handle the following mistakes:

// A is misinterpreted as 4
// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function keyboardMistakes(str) {
//   let retStr = "";
//   for (let i = 0; i < str.length; i++) {
//     switch (str[i]) {
//       case "4":
//         retStr += "A";
//         break;
//       case "5":
//         retStr += "S";
//         break;
//       case "0":
//         retStr += "O";
//         break;
//       case "1":
//         retStr += "I";
//         break;
//       default:
//         retStr += str[i];
//     }
//   }
//   return retStr;
// }

// function keyboardMistakes(str) {
//   let retStr = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "4") retStr += "A";
//     else if (str[i] == "5") retStr += "S";
//     else if (str[i] == "0") retStr += "O";
//     else if (str[i] == "1") retStr += "I";
//     else retStr += str[i];
//   }
//   return retStr;
// }

// console.log(keyboardMistakes("MUB45H1R")); // "MUBASHIR"
// console.log(keyboardMistakes("DUBL1N")); // "DUBLIN"
// console.log(keyboardMistakes("51NG4P0RE")); // "SINGAPORE"

// 59 => Return Last Item
// Create a function that returns the last value of the last item in an array or string.

// function lastItem(input) {
//   return input.slice(-1)[0];
// }

// console.log(lastItem([0, 4, 19, 34, 50, -9, 2])); // 2
// console.log(lastItem("The quick brown fox jumped over the lazy dog")); // "g"
// console.log(lastItem([])); // undefined

// 60 => Calculate Using String Operation
// Create a function that takes two numbers and a mathematical operator and returns the result.

// function calculate(num1, num2, op) {
//   if (op === "+") return num1 + num2;
//   else if (op === "*") return num1 * num2;
//   else if (op === "/") return num1 / num2;
//   else if (op === "%") return num1 % num2;
//   else return num1 - num2;
// }

// console.log(calculate(4, 9, "+")); // 13
// console.log(calculate(12, 5, "-")); // 7
// console.log(calculate(6, 3, "*")); // 18
// console.log(calculate(25, 5, "/")); // 5
// console.log(calculate(14, 3, "%")); // 2

// 61 => Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).

// function countCharacters(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count += arr[i].length;
//   }
//   return count;
// }

// console.log(countCharacters(["###", "###", "###"])); // 9
// console.log(countCharacters(["22222222", "22222222"])); // 16
// console.log(countCharacters(["------------------"])); // 18
// console.log(countCharacters([])); // 0
// console.log(countCharacters(["", ""])); // 0

// 62 => CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// function cmsSelector(arr, str) {
//   if (str.length == 0) return arr.sort();
//   str = str.toLowerCase();
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase().includes(str)) return [arr[i]];
//   }
//   if (arr.indexOf(str) === -1) return [];
// }

// console.log(
//   cmsSelector(
//     ["WordPress", "Joomla", "Drupal", "Magento", "Shopify", "Blogger"],
//     "",
//   ),
// ); //["Blogger", "Drupal", "Joomla", "Magento", "Shopify", "WordPress"])
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); // ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); // ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); // ["Drupal", "Joomla", "Magento", "WordPress"]

// 63 => Stupid Addition
// Create a function that takes two parameters and, if both parameters are strings, add them as if they were integers or if the two parameters are integers, concatenate them.

// function stupidAddition(a, b) {
//   if (typeof a === "number" && typeof b === "number") return a + "" + (b + "");
//   else if (typeof a === "string" && typeof b === "string") return a * 1 + b * 1;
//   else return null;
// }

// console.log(stupidAddition(1, 2)); // "12"
// console.log(stupidAddition("1", "2")); // 3
// console.log(stupidAddition("1", 2)); // null

// 64 =>
// Mubashir needs your help to count uppercase letters, lowercase letters, numbers and special characters in a given string.

// Create a function which takes a string txt and returns a list of numbers with count of uppercase letters, lowercase letters, numbers and special characters.

// function filterString(txt) {
//   let uppercase = 0;
//   let lowercase = 0;
//   let numbers = 0;
//   let special = 0;

//   for (let i = 0; i < txt.length; i++) {
//     // console.log(txt[i].charCodeAt(0));
//     if (txt[i].charCodeAt(0) >= 65 && txt[i].charCodeAt(0) <= 90) uppercase++;
//     else if (txt[i].charCodeAt(0) >= 97 && txt[i].charCodeAt(0) <= 122)
//       lowercase++;
//     else if (txt[i].charCodeAt(0) >= 48 && txt[i].charCodeAt(0) <= 57) {
//       numbers++;
//       console.log(txt[i]);
//     } else {
//       special++;
//     }
//   }
//   return [uppercase, lowercase, numbers, special];
// }

// console.log(filterString("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft")); // [7,13,4,10])

// console.log(filterString("*$(#Mu12bas43hiR%@*!")); // [2, 6, 4, 8]
// //// 2 uppercase letters
// // 6 lowercase letters
// // 4 numbers
// // 8 special characters

// console.log(filterString("^^Edabit^^%$#12379")); // [1, 5, 5, 7]
// console.log(filterString("**Airforce1**")); // [1, 7, 1, 4]
