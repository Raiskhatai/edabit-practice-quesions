// 17 => Burglary Series (15): Number of Occurrences
// To further increase the statistical knowledge of your fight, count the number of times a certain adjective was used.

// Given an object that contains several adjectives as values, return a new object where you count the ocurrences of each adjective.

// function countNumberOfOccurrences(obj) {
//   let newobj = {};
//   for (let key in obj) {
//     let value = obj[key];
//     if (newobj[value]) {
//       newobj[value]++;
//     } else newobj[value] = 1;
//   }
//   return newobj;
// }

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "scumbag",
//     c: "moron",
//     d: "idiot",
//     e: "idiot",
//   }),
// ); // { moron: 2, scumbag: 1, idiot: 2 }

// console.log(
//   countNumberOfOccurrences({
//     a: "moron",
//     b: "moron",
//     c: "moron",
//   }),
// ); // { moron: 3 }

// console.log(
//   countNumberOfOccurrences({
//     a: "idiot",
//     b: "scumbag",
//   }),
// ); // { idiot: 1, scumbag: 1 }
