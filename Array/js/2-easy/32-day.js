// 84 => Numbered Cards
// You have a pack of 5 randomly numbered cards, which can range from 0-9. You can win if you can produce a higher two-digit number from your cards than your opponent. Return true if your cards win that round.

// function winRound(you, opp) {
//   you.sort((a, b) => a - b);
//   let max = you[you.length - 1];
//   let max2 = you[you.length - 2];

//   opp.sort((a, b) => a - b);
//   let num = opp[opp.length - 1];
//   let num2 = opp[opp.length - 2];
//   let final_num1 = "" + max + "" + max2;
//   let final_num2 = "" + num + "" + num2;

//   if (final_num1 > final_num2) {
//     return true;
//   }
//   return false;
// }

// function winRound(you, opp) {
//   you.sort((a, b) => a - b);
//   opp.sort((a, b) => a - b);

//   let [, , , umax1, umax2] = you;
//   let [, , , oppmax1, oppmax2] = opp;

//   let umax = `${umax2}${umax1}`;
//   let oppmax = `${oppmax2}${oppmax1}`;
//   return umax > oppmax ? true : false;
// }

// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); // true
// console.log(winRound([2, 5, 2, 6, 9], [3, 7, 3, 1, 2])); // true
// console.log(winRound([1, 2, 3, 4, 5], [9, 8, 7, 6, 5])); // false
// console.log(winRound([4, 3, 4, 4, 5], [3, 2, 5, 4, 1])); // false

// 85 => Changing Mixed Types
// Create a function that changes all the elements in an array as follows:

// Add 1 to all even integers, nothing to odd integers.
// Concatenates "!" to all strings and make the first letter of the word a capital letter.
// Changes all boolean values to its opposite.

// function changeTypes(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//       let temp = arr[i][0].toUpperCase();
//       temp += arr[i].slice(1);
//       temp += "!";
//       arr.splice(i, 1, temp);
//     } else if (arr[i] === true) {
//       arr.splice(i, 1, false);
//     } else if (arr[i] === false) {
//       arr.splice(i, 1, true);
//     } else if (typeof arr[i] === "number") {
//       if (arr[i] % 2 === 0) {
//         arr[i] += 1;
//       }
//     }
//   }
//   return arr;
// }

// console.log(changeTypes(["a", 12, true])); // ["A!", 13, false]
// console.log(changeTypes([13, "13", "12", "twelve"])); // [13, "13!", "12!", "Twelve!"]
// console.log(changeTypes([false, "false", "true"])); // [true, "False!", "True!"]
