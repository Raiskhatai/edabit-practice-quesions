// 6=> Return a String as an Integer
// Create a function that takes a string and returns it as an integer.

// function stringInt(str) {
//   return str * 1;
// }

// console.log(stringInt("6")); // 6
// console.log(stringInt("1000")); // 1000
// console.log(stringInt("12")); // 12

// 7 =>String and Number Conversions
// You need to create two functions to substitute toString() and parseInt(); A function called intToString() that converts integers into strings and a function called stringToInt() that converts strings into integers.

// function intToString(num) {
//   if (typeof num === "number") return num + "";
// }

// function stringToInt(num) {
//   if (typeof num == "string") return num * 1;
// }
// console.log(intToString(4)); // "4"
// console.log(stringToInt("4")); // 4
// console.log(intToString(29348)); // "29348"

//  8=> Word Numbers!
// Create a function that returns a number, based on the string provided. Here is a list of all digits:

// String	Number
// "one"	1
// "two"	2
// "three"	3
// "four"	4
// "five"	5
// "six"	6
// "seven"	7
// "eight"	8
// "nine"	9
// "zero"	0

// function word(s) {
//   switch (s) {
//     case "one":
//       return 1;
//     case "two":
//       return 2;
//     case "three":
//       return 3;
//     case "four":
//       return 4;
//     case "five":
//       return 5;
//     case "six":
//       return 6;
//     case "seven":
//       return 7;
//     case "eight":
//       return 8;
//     case "nine":
//       return 9;
//     case "zero":
//       return 0;
//     default:
//       return "wring number";
//   }
// }

// console.log(word("one")); // 1
// console.log(word("two")); // 2
// console.log(word("nine")); // 9

// 9 => Is the String Odd or Even?
// Given a string, return true if its length is even or false if the length is odd.

// function oddOrEven(s) {
//   let strLength = s.length;
//   return strLength % 2 == 0 ? true : false;
// }

// console.log(oddOrEven("apples")); // true
// // // The word "apples" has 6 characters.
// // 6 is an even number, so the program outputs true.

// console.log(oddOrEven("pears")); // false
// // // "pears" has 5 letters, and 5 is odd.
// // Therefore the program outputs false.

// console.log(oddOrEven("cherry")); // true

// 10 => Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
//   let val = arr.map((item) => {
//     return item + "";
//   });
//   return val.join("");
// }

// function arrayToString(arr) {
//   let val = arr.reduce((a, v) => {
//     return a + v;
//   }, "");
//   return val;
// }

// console.log(arrayToString([1, 2, 3, 4, 5, 6])); // "123456"
// console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); // "abcdef"
// console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); // "123asdAAAA"
