// // 12 => Dance for Cash
// // Your local bank has decided to upgrade its ATM machines by incorporating motion sensor technology. The machines now interpret a series of consecutive dance moves in place of a PIN number.

// // Create a program that converts a customer's PIN number to its dance equivalent. There is one dance move per digit in the PIN number. A list of dance moves is given in the code.

// // notes
// // Each dance move will be selected from a list by index based on the current digit's value plus that digit's index value. If this value is greater than the last index value of the dance list, it should cycle to the beginning of the list.
// // Valid input will always be a string of four digits. Output will be a string array.
// // If the input is not four valid numbers, return the string, "Invalid input."

// const MOVES = [
//   "Shimmy",
//   "Shake",
//   "Pirouette",
//   "Slide",
//   "Box Step",
//   "Headspin",
//   "Dosado",
//   "Pop",
//   "Lock",
//   "Arabesque",
// ];

// function danceConvert(pin) {
//   pin = pin.split("");
//   let ret = [];
//   let minus = 1;
//   for (let i = 0; i < pin.length; i++) {
//     if (Object.is(pin.length < 4 || +pin[i], NaN)) {
//       return "Invalid input.";
//     } else if (+pin[i] + i < 10) {
//       ret.push(MOVES[+pin[i] + i]);
//     } else {
//       ret.push(MOVES[(+pin[i] + i) % 10]);
//       minus++;
//     }
//   }
//   return ret;
// }
// console.log(danceConvert("0000")); // ["Shimmy", "Shake", "Pirouette", "Slide"]
// console.log(danceConvert("3856")); // [ "Slide", "Arabesque", "Pop", "Arabesque" ]
// console.log(danceConvert("9999")); // [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
// console.log(danceConvert("32a1")); // "Invalid input."
// console.log(danceConvert("8888")); // ['Lock', 'Arabesque', 'Shimmy', 'Shake']

// 13 => The Frugal Gentleman
// Atticus has been invited to a dinner party, and he decides to purchase a bottle of wine. However, he has little knowledge of how to choose a good bottle. Being a very frugal gentleman (yet disliking looking like a cheapskate), he decides to use a very simple rule. In any selection of two or more wines, he will always buy the second-cheapest.

// Given an array of wine objects, write a function that returns the name of the wine he will buy for the party. If given an empty array, return null. If given an array of only one, Atticus will buy that wine.

// function chosenWine(wines) {
//   if (wines.length == 0) return null;
//   else if (wines.length == 1) return wines[0].name;
//   else if (wines.length == 2)
//     return wines[0].name > wines[1].name ? wines[0].name : wines[1].name;
//   let result = "";
//   let prices = [];
//   max = Infinity;
//   for (let key of wines) {
//     if (key.price < max) {
//       max = key.price;
//     }
//   }
//   let second_max = Infinity;
//   for (let key of wines) {
//     if (key.price < second_max && key.price > max) {
//       second_max = key.price;
//     }
//   }
//   for (let key of wines) {
//     if (key.price == second_max) {
//       result = key.name;
//     }
//   }
//   if (wines.length > 2) return result;
// }

// console.log(
//   chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine 32", price: 13.99 },
//     { name: "Wine 9", price: 10.99 },
//   ]),
// ); // "Wine 9"

// console.log(
//   chosenWine([
//     { name: "Wine A", price: 8.99 },
//     { name: "Wine B", price: 9.99 },
//   ]),
// ); //  "Wine B"
// console.log(chosenWine([{ name: "Wine A", price: 8.99 }])); // "Wine A"

// 14 => Concatenate to Form Target Array
// Create a function that returns true if smaller arrays can concatenate to form the target array and false otherwise.

// function canConcatenate(arr, target) {
//   arr = arr.flat(Infinity);
//   arr = arr.sort((a, b) => a - b);
//   target = target.sort((a, b) => a - b);
//   if (arr.length != target.length) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(canConcatenate([[1, 2, 3, 4], [5, 6], [7]], [1, 2, 3, 4, 5, 6, 7])); // true
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6],
//     ],
//     [7, 6, 5, 4, 3, 2, 1],
//   ),
// ); // true
// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7, 6, 7],
//     ],
//     [1, 2, 3, 4, 5, 6, 7],
//   ),
// ); // false// Duplicate 7s not found in target array.

// console.log(
//   canConcatenate(
//     [
//       [2, 1, 3],
//       [5, 4, 7],
//     ],
//     [1, 2, 3, 4, 5, 6, 7],
//   ),
// ); // false// Missing 6 from target array.

// 15 => Combined Consecutive Sequence
// Write a function that returns true if two arrays, when combined, form a consecutive sequence. A consecutive sequence is a sequence without any gaps in the integers, e.g. 1, 2, 3, 4, 5 is a consecutive sequence, but 1, 2, 4, 5 is not.

// function consecutiveCombo(a1, a2) {
//   let arr = [...a1, ...a2];
//   arr = arr.sort((a, b) => a - b);
//   for (let i = arr[0]; i <= arr.length; i++) {
//     if (arr[i - 1] != i) {
//       return false;
//     } else {
//     }
//   }
//   return true;
// }

// console.log(consecutiveCombo([7, 4, 5, 1], [2, 3, 6])); // true
// console.log(consecutiveCombo([1, 4, 6, 5], [2, 7, 8, 9])); // false
// console.log(consecutiveCombo([1, 4, 5, 6], [2, 3, 7, 8, 10])); // false
// console.log(consecutiveCombo([44, 46], [45])); // true
