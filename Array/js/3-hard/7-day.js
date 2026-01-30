// 18 => Pluralize!
// Given a list of words in the singular form, return a set of those words in the plural form if they appear more than once in the list.

// function pluralize(arr) {
//   let temp = {};
//   for (let key of arr) {
//     if (temp[key]) {
//       temp[key]++;
//     } else {
//       temp[key] = 1;
//     }
//   }
//   let ret = [];
//   for (let key in temp) {
//     if (temp[key] > 1) {
//       ret.push(key + "s");
//     } else ret.push(key);
//   }
//   return ret;
// }

// console.log(pluralize(["cow", "pig", "cow", "cow"])); // ["cows", "pig"]
// console.log(pluralize(["table", "table", "table"])); // ["tables"]
// console.log(pluralize(["chair", "pencil", "arm"])); // ["chair", "pencil", "arm"]

// 19 => Burglary Series (12): Get Vodka Bottle
// The insurance guy laughs, he's just kidding. He just needs an updated list. You just need one of those Rammstein Vodka bottles.

// Given an object with alcoholic drinks and a number, return a string with the name of the Rammstein bottle that matches the given number.

// const random = Math.random();
// const obj = {
//   absinth: 100,
//   whiskey: 100,
//   "Rammstein A": 100,
//   "Rammstein B": 50,
//   "Rammstein C": random,
// };

// function getVodkaBottle(obj, num) {
//   for (let key in obj) {
//     if (obj[key] == num && key[0] === "R" && key[8] === "n") {
//       return key;
//     }
//   }
// }

// console.log(getVodkaBottle(obj, 100)); //"Rammstein A")
// console.log(getVodkaBottle(obj, 50)); //"Rammstein B")
// console.log(getVodkaBottle(obj, random)); //"Rammstein C")

// 20 => How Many Unique Styles?
// There are many different styles of music and many albums exhibit multiple styles. Create a function that takes an array of musical styles from albums and returns how many styles are unique.

// function uniqueStyles(albums) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < albums.length; i++) {
//     newarr[j] = albums[i].split(",");
//     j++;
//   }
//   newarr = newarr.flat(1);
//   let checkedarr = [...new Set(newarr)];
//   return checkedarr.length;
// }

// console.log(
//   uniqueStyles([
//     "Dub,Dancehall",
//     "Industrial,Heavy Metal",
//     "Techno,Dubstep",
//     "Synth-pop,Euro-Disco",
//     "Industrial,Techno,Minimal",
//   ]),
// ); //9

// console.log(
//   uniqueStyles([
//     "Soul",
//     "House,Folk",
//     "Trance,Downtempo,Big Beat,House",
//     "Deep House",
//     "Soul",
//   ]),
// ); // 7

// 21 => Diamond Shaped Array
// Create a function that returns an array that expands by 1 from 1 to the value of the input, and then reduces back to 1. Items in the arrays will be the same as the length of the arrays.

// function diamondArrays(x) {
//   let arr = [];
//   for (let i = 0; i < x; i++) {
//     let other = [];
//     for (let k = 0; k < i + 1; k++) {
//       other.push(i + 1);
//     }
//     arr.push(other);
//   }
//   let other = [...arr];
//   for (let i = other.length - 2; i >= 0; i--) {
//     arr.push(other[i]);
//   }
//   return arr;
// }

// console.log(diamondArrays(1)); // [[1]]
// console.log(diamondArrays(2)); // [[1], [2, 2], [1]]
// console.log(diamondArrays(5)); // [[1], [2, 2], [3, 3, 3], [4, 4, 4, 4], [5, 5, 5, 5, 5], [4, 4, 4, 4], [3, 3, 3], [2, 2], [1]]

// 22 => Basic Arithmetic Operations on a String Number
// Create a function to perform basic arithmetic operations that includes addition, subtraction, multiplication and division on a string number (e.g. "12 + 24" or "23 - 21" or "12 / 12" or "12 * 21").

// Here, we have 1 followed by a space, operator followed by another space and 2. For the challenge, we are going to have only two numbers between 1 valid operator. The return value should be a number.

// eval() is not allowed. In case of division, whenever the second number equals "0" return -1.

// "15 / 0"  ➞ -1

// function arithmeticOperation(n) {
//   let arr = n.split(" ");
//   let num1 = +arr[0];
//   let operator = arr[1];
//   let num2 = +arr[2];
//   if (num2 == 0) return -1;
//   else if (operator == "+") return num1 + num2;
//   else if (operator == "-") return num1 - num2;
//   else if (operator == "*") return num1 * num2;
//   else if (operator == "/") return num1 / num2;
// }

// function arithmeticOperation(n) {
//   let arr = n.split(" ");
//   let num1 = +arr[0];
//   let operator = arr[1];
//   let num2 = +arr[2];
//   if (num2 == 0) return -1;
//   switch (operator) {
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "*":
//       return num1 * num2;
//     case "/":
//       return num1 / num2;
//   }
// }

// console.log(arithmeticOperation("12 + 12")); // 24 // 12 + 12 = 24
// console.log(arithmeticOperation("12 - 12")); // 24 // 12 - 12 = 0
// console.log(arithmeticOperation("12 * 12")); // 144 // 12 * 12 = 144
// console.log(arithmeticOperation("12 / 0")); // -1 // 12 / 0 = -1
