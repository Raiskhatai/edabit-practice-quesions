// 6 => Calculate the Total Price of Groceries
// Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. A grocery object has a product, a quantity and a price, for example:

// {
//   "product": "Milk",
//   "quantity": 1,
//   "price": 1.50
// }

// function getTotalPrice(groceries) {
//   let sum = 0;
//   for (let key of groceries) {
//     sum += key["quantity"] * key["price"];
//   }
//   return typeof +sum.toFixed(1);
// }

// function getTotalPrice(groceries) {
//   sum = groceries.reduce((a, v) => (a += v["quantity"] * v["price"]), 0);
//   return +sum.toFixed(1);
// }

// 1 bottle of milk:
// console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.5 }])); // 1.5
// // 1 bottle of milk & 1 box of cereals:
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Cereals", quantity: 1, price: 2.5 },
//   ]),
// ); // 4
// // 3 bottles of milk:
// console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.5 }])); // 4.5
// // Several groceries:
// console.log(
//   getTotalPrice([
//     { product: "Milk", quantity: 1, price: 1.5 },
//     { product: "Eggs", quantity: 12, price: 0.1 },
//     { product: "Bread", quantity: 2, price: 1.6 },
//     { product: "Cheese", quantity: 1, price: 4.5 },
//   ]),
// ); // 10.4
// // Some cheap candy:
// console.log(
//   getTotalPrice([
//     { product: "Chocolate", quantity: 1, price: 0.1 },
//     { product: "Lollipop", quantity: 1, price: 0.2 },
//   ]),
// ); // 0.3

// 7 => Case and Index Inverter
// Write a function that takes a string input and returns the string in a reversed case and order.

// function invert(s) {
//   let ret = s.split("");
//   ret = ret.reverse();
//   ret = ret.map((item) =>
//     item.charCodeAt(0) >= 97 ? item.toUpperCase() : item.toLowerCase(),
//   );
//   ret = ret.join("");
//   return ret;
// }

// function invert(s) {
//   let ret = "";
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i].charCodeAt(0) >= 97) ret += s[i].toUpperCase();
//     else ret += s[i].toLowerCase();
//   }
//   return ret;
// }

// console.log(invert("dLROW YM sI HsEt")); // "TeSh iS my worlD"
// console.log(invert("ytInIUgAsnOc")); // "CoNSaGuiNiTY"
// console.log(invert("step on NO PETS")); // "step on NO PETS"
// console.log(invert("XeLPMoC YTiReTXeD")); // "dExtErIty cOmplEx"

// 8 => Switching Between Pencils
// When coloring a striped pattern, you may start by coloring each square sequentially, meaning you spend time needing to switch coloring pencils.

// Create a function where given an array of colors cols, return how long it takes to color the whole pattern. Note the following times:

// It takes 1 second to switch between pencils.
// It takes 2 seconds to color a square.
// See the example below for clarification.

// function colorPatternTimes(cols) {
//   let switchCount = 0;
//   for (let i = 0; i < cols.length - 1; i++) {
//     if (cols[i] != cols[i + 1]) {
//       switchCount++;
//     }
//   }
//   let colsCount = cols.length * 2;
//   return switchCount + colsCount;
// }

// function colorPatternTimes(cols) {
//   let switchCount = 0;
//   cols.forEach((element, i, arr) => {
//     if (element != arr[i + 1] && i < arr.length - 1) switchCount++;
//   });
//   let final = cols.length * 2 + switchCount;
//   return final;
// }

// console.log(colorPatternTimes(["Red", "Blue", "Red", "Blue", "Red"])); //14
// // There are 5 colors so it takes 2 seconds to color each one (2 x 5 = 10).
// // You need to switch the pencils 4 times and it takes 1 second to switch (1 x 4 = 4).
// // 10 + 4 = 14

// console.log(colorPatternTimes(["Blue"])); // 2
// console.log(colorPatternTimes(["Red", "Yellow", "Green", "Blue"])); //11
// console.log(colorPatternTimes(["Blue", "Blue", "Blue", "Red", "Red", "Red"])); //13

// 9 => Broken Keyboard
// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// findBrokenKeys(correct phrase, what you actually typed)

// function findBrokenKeys(str1, str2) {
//   let other = [];
//   let j = 0;
//   for (let i = 0; i < str1.length; i++) {
//     if (str1[i] != str2[i]) {
//       other[j] = str1[i];
//       j++;
//     }
//   }
//   other = [...new Set(other)];
//   return other;
// }

// function findBrokenKeys(str1, str2) {
//   str1 = str1.split("");
//   str2 = str2.split("");
//   let ret = str1.filter((item, i) => {
//     if (item != str2[i]) return item;
//   });
//   ret = [...new Set(ret)];
//   return ret;
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday")); // ["p"]
// console.log(findBrokenKeys("starry night", "starrq light")); // ["y", "n"]
// console.log(findBrokenKeys("beethoven", "affthoif5")); // ["b", "e", "v", "n"]

