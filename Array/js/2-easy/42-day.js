// 96 => Total Count of Numbers in a MultiDimensional Array
// Create a function that takes a multidimensional array and return the total count of numbers in that array.

// function countNumber(arr) {
//   arr = arr.flat(Infinity);
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number") {
//       count++;
//     }
//   }
//   return count;
// }

// function countNumber(arr) {
//   arr = arr.flat(Infinity);
//   let count = 0;
//   arr.forEach((item) => (typeof item === "number" ? count++ : 0));
//   return count;
// }

// console.log(countNumber([["", 17.2, 5, "edabit"]])); // 2
// // 17.2 and 5.
// console.log(countNumber([[[[[2, 14]]], 2, 3, 4]])); // 5
// // 2, 14, 2, 3 and 4.
// console.log(countNumber([["balkot"]])); // 0

// 97 => Edabit Experience Points
// As you complete questions on Edabit, you gain experience points depending on the difficulty of the question. The points for each difficulty are as follows:

// Difficulty	Experience Points
// Very Easy	5XP
// Easy	10XP
// Medium	20XP
// Hard	40XP
// Very Hard	80XP
// Given an object of how many questions a person has completed of each difficulty, return how many experience points they'll have.

// function getXP(obj) {
//   let count = 0;
//   for (let key in obj) {
//     if (key === "Very Easy") {
//       count += obj[key] * 5;
//     } else if (key === "Easy") {
//       count += obj[key] * 10;
//     } else if (key === "Medium") {
//       count += obj[key] * 20;
//     } else if (key === "Hard") {
//       count += obj[key] * 40;
//     } else if (key === "Very Hard") {
//       count += obj[key] * 80;
//     }
//   }
//   let result = count + "XP";
//   return result;
// }

// function getXP(obj) {
//   let count = 0;
//   for (let key in obj) {
//     switch (key) {
//       case "Very Easy":
//         count += obj[key] * 5;
//         break;
//       case "Easy":
//         count += obj[key] * 10;
//         break;
//       case "Medium":
//         count += obj[key] * 20;
//         break;
//       case "Hard":
//         count += obj[key] * 40;
//         break;
//       case "Very Hard":
//         count += obj[key] * 80;
//         break;
//       default:
//         "wrong value";
//     }
//   }
//   result = count + "XP";
//   return result;
// }

// console.log(
//   getXP({
//     "Very Easy": 89,
//     Easy: 77,
//     Medium: 30,
//     Hard: 4,
//     "Very Hard": 1,
//   })
// ); // "2055XP"

// console.log(
//   getXP({
//     "Very Easy": 254,
//     Easy: 32,
//     Medium: 65,
//     Hard: 51,
//     "Very Hard": 34,
//   })
// ); // "7650XP"

// console.log(
//   getXP({
//     "Very Easy": 11,
//     Easy: 0,
//     Medium: 2,
//     Hard: 0,
//     "Very Hard": 27,
//   })
// ); // "2255XP"
