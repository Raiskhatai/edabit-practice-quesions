// 13 => Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// function jazzify(arr) {
//   const newarr = arr.map((item) => {
//     if (!item.includes("7")) {
//       return item + "7";
//     } else {
//       return item;
//     }
//   });
//   return newarr;
// }

// function jazzify(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].indexOf("7") < 0) {
//       newarr[i] = arr[i] + "7";
//     } else {
//       newarr[i] = arr[i];
//     }
//   }
//   return newarr;
// }

// console.log(jazzify(["G", "F", "C"])); // ["G7", "F7", "C7"]
// console.log(jazzify(["Dm", "G", "E", "A"])); // ["Dm7", "G7", "E7", "A7"]
// console.log(jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"])); // ["F7", "E7", "A7", "Ab7", "Gm7", "C7"]
// console.log(jazzify([])); // []

// 14=> Let's Sort This Array!
// Create a function that takes an array of numbers arr, a string str and return an array of numbers as per the following rules:

// "Asc" returns a sorted array in ascending order.
// "Des" returns a sorted array in descending order.
// "None" returns an array without any modification.

// function ascDesNone(arr, val) {
//   if (val == "Asc") {
//     return arr.sort((a, b) => a - b);
//   } else if (val == "Des") {
//     return arr.sort((a, b) => a - b).reverse();
//   } else {
//     return arr;
//   }
// }

// console.log(ascDesNone([4, 3, 2, 1], "Asc")); // [1, 2, 3, 4]
// console.log(ascDesNone([7, 8, 11, 66], "Des")); // [66, 11, 8, 7]
// console.log(ascDesNone([1, 2, 3, 4], "None")); // [1, 2, 3, 4]

// 15 => Burglary Series (01): Calculate Total Losses
// You just returned home to find your mansion has been robbed! Given an object of the stolen items, return the total amount of the burglary (number). If nothing was robbed, return the string "Lucky you!".

// function stolenItems(obj) {
//   let sum = 0;
//   for (let key in obj) {
//     sum += obj[key];
//   }
//   if (sum == 0) {
//     return "Lucky you!";
//   }
//   return sum;
// }

// function stolenItems(obj) {
//   let newarr = Object.values(obj);
//   let sum = newarr.reduce((a, v) => a + v, 0);
//   if (sum == 0) {
//     return "Lucky you!";
//   }
//   return sum;
// }

// console.log(
//   stolenItems({
//     tv: 30,
//     skate: 20,
//     stereo: 50,
//   })
// ); // 100

// console.log(
//   stolenItems({
//     painting: 20000,
//   })
// ); // 20000

// console.log(stolenItems({})); // "Lucky you!"

// 16 => ES6: Destructuring Arrays V
// ES6 Destructuring can come in handy when you use regular expressions. Here is a function that uses a regular expression to parse a URL.

// // const parsedURL = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(url)

// function parseURL(str) {
//   let newarr = str.split("/");
//   //   console.log(newarr);
//   protocol = newarr.slice(0, 1)[0];
//   host = newarr.slice(2, 3)[0];
//   path = newarr.slice(3, 6);
//   console.log(str, protocol, host, path[0], path[1], path[2]);
// }

// console.log(parseURL("https://developer.mozilla.org/en-US/Web/JavaScript"));
// returns ["https://developer.mozilla.org/en-US/Web/JavaScript", "https", "developer.mozilla.org", "en-US/Web/JavaScript"]

// the protocol = https
// the host = developer.mozilla.org
// the path = en-US/Web/JavaScript

// 17=> Get Sum of People's Budget
// Create the function that takes an array with objects and returns the sum of people's budgets.

// function getBudgets(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].budget;
//   }
//   return sum;
// }

// function getBudgets(arr) {
//   let sum = arr.reduce((a, v) => a + v.budget, 0);
//   return sum;
// }

// console.log(
//   getBudgets([
//     { name: "John", age: 21, budget: 23000 },
//     { name: "Steve", age: 32, budget: 40000 },
//     { name: "Martin", age: 16, budget: 2700 },
//   ])
// ); // 65700

// console.log(
//   getBudgets([
//     { name: "John", age: 21, budget: 29000 },
//     { name: "Steve", age: 32, budget: 32000 },
//     { name: "Martin", age: 16, budget: 1600 },
//   ])
// ); // 62600

// 18 => Match the Last Item
// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// function matchLastItem(arr) {
//   let all_items = "";
//   let last_item = arr[arr.length - 1];
//   for (let i = 0; i < arr.length - 1; i++) {
//     all_items += arr[i];
//   }
//   if (all_items === last_item) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"])); // true
// The last item is the rest joined.

console.log(matchLastItem([1, 1, 1, "11"])); // false
// The last item should be "111".

console.log(matchLastItem([8, "thunder", true, "8thundertrue"])); // true
