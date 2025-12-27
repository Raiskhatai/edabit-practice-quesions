// 78 => Sum of Two Numbers in Array Equal to Given Number
// Create a function that takes an array of numbers arr and a number n. Return true if the sum of any two elements is equal to the given number. Otherwise, return false.

// function checkSum(arr, n) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let k = i + 1; k < arr.length; k++) {
//       if (arr[i] + arr[k] == n) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(checkSum([10, 12, 4, 7, 9, 11], 16)); // true
// console.log(checkSum([4, 5, 6, 7, 8, 9], 13)); // true
// console.log(checkSum([0, 98, 76, 23], 174)); // true
// console.log(checkSum([0, 9, 7, 23, 19, 18, 17, 66], 39)); // false
// console.log(checkSum([2, 8, 9, 12, 45, 78], 1)); // false

//  79 => Removing Enemies
// Remove enemies from the array of people, even if the enemy shows up twice.

// function removeEnemies(names, enemies) {
//   for (let i = 0; i < enemies.length; i++) {
//     for (let k = names.length; k >= 0; k--) {
//       if (enemies[i] == names[k]) {
//         names.splice(k, 1);
//       }
//     }
//   }
//   return names;
// }


console.log(removeEnemies(["Fred"], [])); // ["Fred"]
console.log(removeEnemies(["Adam", "Emmy", "Tanya", "Emmy"], ["Emmy"])); // ["Adam", "Tanya"]
console.log(removeEnemies(["John", "Emily", "Steve", "Sam"], ["Sam", "John"])); // ["Emily", "Steve"]
