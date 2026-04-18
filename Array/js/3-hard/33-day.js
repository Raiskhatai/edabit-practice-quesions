// 66=> Number of Even or Odd Digits
// Create a function that takes in an array of integers returns the number of even or odd digits for each number, depending on the parameter.

// function countDigits(arr, type) {
//   const splitArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     splitArr.push(String(arr[i]).split(""));
//   }
//   let retVal = splitArr.map((item) => {
//     let count = 0;
//     item.forEach((elem) => {
//       if (type == "odd") {
//         if (elem % 2 != 0) count++;
//       } else {
//         if (elem % 2 == 0) count++;
//       }
//     });
//     return count;
//   });
//   return retVal;
// }

// console.log(countDigits([22, 53, 99, 61, 777, 8], "odd")); // [0, 2, 2, 1, 3, 0]
// console.log(countDigits([22, 53, 99, 61, 777, 8], "even")); // [2, 0, 0, 1, 0, 1]
// console.log(countDigits([54, 113, 89, 10], "odd")); // [1, 3, 1, 1]
// console.log(countDigits([54, 113, 89, 10], "even")); // [1, 0, 1, 1]

// 67 => Poker Full House
// Create a function that determines whether or not a player is holding a Full House in their hand. A hand is represented as an array of 5 cards. A full house is defined as a pair of cards and a three-of-a-kind.

// To illustrate: ["A", "A", "A", "K", "K"] would be a Full House, since the player holds 3 aces and 2 kings.

// function isFullHouse(hand) {
//   let count = 0;
//   let check = hand[0];
//   hand.forEach((element) => {
//     if (check === element) {
//       count++;
//     }
//   });
//   return count === 3 ? true : false;
// }

// console.log(isFullHouse(["A", "A", "A", "K", "K"])); // true
// console.log(isFullHouse(["3", "J", "J", "3", "3"])); // true
// console.log(isFullHouse(["10", "J", "10", "10", "10"])); // false
// console.log(isFullHouse(["7", "J", "3", "4", "2"])); // false
