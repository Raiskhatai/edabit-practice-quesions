// 61 Increment to Top
// Create a function that returns the total number of steps it takes to transform each element to the maximal element in the array. Each step consists of incrementing a digit by one.

// function incrementToTop(arr) {
//   arr.sort((a, b) => a - b);
//   let steps = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     let temp = arr[i] - arr[arr.length - 1];
//     steps += temp;
//   }
//   return steps < 0 ? steps * -1 : steps;
// }

// console.log(incrementToTop([3, 4, 5])); // 3
// // Maximal element in the array is 5.
// // To transform 3 to 5 requires 2 steps: 3 -> 4, 4 -> 5.
// // To transform 4 to 5 requires 1 step: 4 -> 5.
// // Total steps required is 3.

// console.log(incrementToTop([4, 3, 4])); // 1
// // Maximal element in the array is 4.
// // To transform 3 to 4 requires 1 steps: 3 -> 4.
// // Total steps required is 1.

// console.log(incrementToTop([3, 3, 3])); // 0

// console.log(incrementToTop([3, 10, 3])); // 14

// 62 => Don't Roll Doubles!
// John is playing a dice game. The rules are as follows.

// Roll two dice.
// Add the numbers on the dice together.
// Add the total to your overall score.
// Repeat this for three rounds.
// But if you roll DOUBLES, your score is instantly wiped to 0 and your game ends immediately!

// Create a function which takes in a matrix as input, and return John's score after his game has ended.

// function diceGame(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][0] == arr[i][1]) {
//         return (sum = 0);
//       } else {
//         sum += arr[i][k];
//       }
//     }
//   }
//   return sum;
// }

// console.log(
//   diceGame([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//   ])
// ); // 21
// console.log(
//   diceGame([
//     [1, 1],
//     [5, 6],
//     [6, 4],
//   ])
// ); // 0
// console.log(
//   diceGame(
//     [4, 5],
//     [4, 5],
//     [4, 5],
//   ])
// ); // 27
