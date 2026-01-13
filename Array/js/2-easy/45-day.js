// 100 => Potential Friend?
// Given two arrays of two people's different interests, return whether both people have at least two things in common or have exact interests. Return true if there's a potential friend!

// function isPotentialFriend(set1, set2) {
//   count = 0;
//   for (i = 0; i < set1.length; i++) {
//     for (let k = 0; k < set2.length; k++) {
//       if (set1[i].includes(set2[k])) {
//         count++;
//       }
//     }
//   }
//   if (set1.length == set2.length) {
//     if (count >= 1) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (set1.length != set2.length) {
//     if (count >= 2) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }

// console.log(
//   isPotentialFriend(
//     ["sports", "music", "chess"],
//     ["coding", "music", "netflix", "chess"]
//   )
// ); // true

// console.log(
//   isPotentialFriend(
//     ["cycling", "technology", "drawing"],
//     ["dancing", "drawing"]
//   )
// ); // false

// console.log(isPotentialFriend(["history"], ["history"])); // true

// 101 => Array Multiplier
// Create a function that takes an array as an argument and returns a new nested array for each element in the original array. The nested array must be filled with the corresponding element (string or number) in the original array and each nested array has the same amount of elements as the original array.

// function multiply(arr) {
//   let other = [];
//   for (let i = 0; i < arr.length; i++) {
//     let inner = [];
//     for (let k = 0; k < arr.length; k++) {
//       inner.push(arr[i]);
//     }
//     other.push(inner);
//   }
//   return other;
// }

// console.log(multiply([4, 5])); // [[4, 4], [5, 5]]
// console.log(multiply(["*", "%", "$"])); // [["*", "*", "*"], ["%", "%", "%"], ["$", "$", "$"]]
// console.log(multiply(["A", "B", "C", "D", "E"])); // [["A", "A", "A", "A", "A"], ["B", "B", "B", "B", "B"], ["C", "C", "C", "C", "C"], ["D", "D", "D", "D", "D"], ["E", "E", "E", "E", "E"]]
