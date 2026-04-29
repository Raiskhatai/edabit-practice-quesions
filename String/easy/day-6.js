// 45 => The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.

// function forbiddenLetter(char, arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(char)) return false;
//   }
//   return true;
// }

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"])); // false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"])); // true
// console.log(forbiddenLetter("m", [])); // true

// 46 => Height of an Equilateral Triangle
// Create a function that takes the length of the side of an equilateral triangle in centimeters and returns the height of the triangle in millimeters.

// function height(side) {
//   return ((1 / 2) * Math.sqrt(3) * side * 10).toFixed(1) + " mm";
// }

// console.log(height(2)); // 17.3 mm
// console.log(height(5)); // 43.3 mm
// console.log(height(6.2)); // 53.7 mm

// 47 => YouTube Upload Count
// You are given an array of dates in the format Dec 11 and a monthin the format Dec as arguments. Each date represents a video that was uploaded on that day. Return the number of uploads for a given month.

// function uploadCount(dates, month) {
//   let count = 0;
//   for (let i = 0; i < dates.length; i++) {
//     if (dates[i].includes(month)) count++;
//   }
//   return count;
// }

// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Sept")); // 2
// console.log(uploadCount(["Sept 22", "Sept 21", "Oct 15"], "Oct")); // 1

// 48 => Secret Function 2.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// function secret(text) {
//   let [tag, time] = text.split("*");
//   return `<${tag}></${tag}>`.repeat(time);
// }

// function secret(text) {
//   let tag = "";
//   let time = 0;
//   let opindex = text.indexOf("*");
//   for (let i = 0; i < text.length; i++) {
//     if (i < opindex) tag += text[i];
//     else if (i > opindex) time = text[i];
//   }
//   return `<${tag}></${tag}>`.repeat(time);
// }

// console.log(secret("div*2")); // "<div></div><div></div>"
// console.log(secret("p*1")); // "<p></p>"
// console.log(secret("li*3")); // "<li></li><li></li><li></li>"

// 49 => Is the Water Boiling?
// Create a function that determines if the temp of the water is considered boiling or not. temp will be measured in Fahrenheit and Celsius.

// function isBoiling(temp) {
//   let num = temp.slice(0, temp.length - 1);
//   if (temp[temp.length - 1] === "F") {
//     if (num >= 212) return true;
//     else return false;
//   } else if (temp[temp.length - 1] === "C") {
//     return num >= 100 ? true : false;
//   } else {
//     return false;
//   }
// }

// console.log(isBoiling("212F")); // true
// console.log(isBoiling("100C")); // true
// console.log(isBoiling("0F")); // false

// 50 =>True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.

// // function integerBoolean(n) {
// //   let arr = n.split("");
// //   let retval = arr.map((item) => {
// //     return item === "1" ? true : false;
// //   });
// //   return retval;
// }

// function integerBoolean(n) {
//   let retarr = [];
//   for (let i = 0; i < n.length; i++) {
//     if (n[i] === "1") retarr.push(true);
//     else retarr.push(false);
//   }

//   return retarr;
// }

// console.log(integerBoolean("100101")); // [true, false, false, true, false, true]
// console.log(integerBoolean("10")); // [true, false]
// console.log(integerBoolean("001")); // [false, false, true]

// 51 => Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

function filterArray(arr) {
  let retarr = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && arr[i] % 1 === 0) retarr.push(arr[i]);
  }
  return retarr;
}

console.log(filterArray([1, 2, 3, "a", "b", 4])); // [1, 2, 3, 4]
console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"])); // [0, 1729]
console.log(filterArray(["Nothing", "here"])); // []
console.log(filterArray([1, 2, 3, 3.5, "a", "b", 4, 5.8, 6])); // [1, 2, 3, 4 , 6]
