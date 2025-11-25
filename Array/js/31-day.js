// 1=>  Is One Array a Subset of Another?
// Create a function that returns true if the first array is a subset of the second. Return false otherwise.

// function isSubset(arr1, arr2) {
//   let count = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     for (let k = 0; k < arr1.length; k++) {
//       if (arr2[i] == arr1[k]) {
//         count++;
//       }
//     }
//   }
//   let res = true;
//   if (count != arr1.length) {
//     res = false;
//   }
//   return res;
// }

// function isSubset(arr1, arr2) {
//   let res;
//   for (let i = 0; i < arr1.length; i++) {
//     res = arr2.includes(arr1[i]);
//   }
//   return res;
// }

// console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2])); //  true
// console.log(isSubset([8, 9], [7, 1, 9, 8, 4, 5, 6])); //  true
// console.log(isSubset([1, 2], [3, 5, 9, 1])); //  false

// 2=> Summing a Slice
// Given an array and an integer n, return the sum of the first n numbers in the array.

// sliceSum([9, 8, 7, 6], 3) ➞ 24
// The parameter n is specified as 3.
// The first 3 numbers in the list are 9, 8 and 7.
// The sum of these 3 numbers is 24 (9 + 8 + 7).
// Return the answer.

// function sliceSum(arr, val) {
//   let newarr = arr.slice(0, val);
//   let sum = 0;
//   for (let i = 0; i < newarr.length; i++) {
//     sum += newarr[i];
//   }
//   return sum;
// }

// function sliceSum(arr, val) {
//   let sum = 0;
//   for (let i = 0; i < val; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// console.log(sliceSum([1, 3, 2], 2)); //  4
// console.log(sliceSum([4, 2, 5, 7], 4)); //  18
// console.log(sliceSum([3, 6, 2], 0)); //  0

// 3=> Numbers to Arrays and Vice Versa
// Write two functions:

// toArray(), which converts a number to an array of its digits.
// toNumber(), which converts an array of digits back to its number.

// function toArray(num) {
//   num = num + "";
//   let newarr = num.split("");
//   newarr = newarr.map((element) => {
//     return element * 1;
//   });
//   return newarr;
// }

// function toNumber(arr) {
//   let newnum = arr.join("");
//   newnum = newnum * 1;
//   return newnum;
// }

// console.log(toArray(235)); //  [2, 3, 5]
// console.log(toArray(0)); //  [0]
// console.log(toNumber([2, 3, 5])); //  235
// console.log(toNumber([0])); //  0

// 4 => Chat Room Status
// Write a function that returns the number of users in a chatroom based on the following rules:

// If there is no one, return "no one online".
// If there is 1 person, return "user1 online".
// If there are 2 people, return "user1 and user2 online".
// If there are n>2 people, return the first two names and add "and n-2 more online".
// For example, if there are 5 users, return:

// "user1, user2 and 3 more online"

// function chatroomStatus(arr) {
//   if (arr.length === 0) {
//     return "no one online";
//   } else if (arr.length === 1) {
//     return `${arr[0]} online`;
//   } else if (arr.length == 2) {
//     return `${arr[0]}  and ${arr[1]} online`;
//   } else {
//     return `${arr[0]}, ${arr[1]} and ${arr.length - 2} more online`;
//   }
// }

// function chatroomStatus(arr) {
//   let num = arr.length;
//   switch (num) {
//     case 0:
//       return `no one online`;
//     case 1:
//       return `${arr[0]} online`;
//     case 2:
//       return `${arr[0]} and ${arr[1]} online`;
//     case num:
//       return `${arr[0]} ${arr[1]} and ${arr.length - 2} more online`;
//     default:
//       "wrong input";
//   }
// }

// console.log(chatroomStatus([])); //  "no one online"
// console.log(chatroomStatus(["paRIE_to"])); //  "paRIE_to online"
// console.log(chatroomStatus(["s234f", "mailbox2"])); //  "s234f and mailbox2 online"
// console.log(
//   chatroomStatus([
//     "pap_ier44",
//     "townieBOY",
//     "panda321",
//     "motor_bike5",
//     "sandwichmaker833",
//     "violinist91",
//   ])
// ); // "pap_ier44, townieBOY and 4 more online"

// 5=> Count Ones in a 2D Array
// Create a function to count the number of 1s in a 2D array.

// function countOnes(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 0; k < arr[i].length; k++) {
//       if (arr[i][k] === 1) {
//         count++;
//       }
//     }
//   }
//   return count;
// }

// console.log(
//   countOnes([
//     [1, 0],
//     [0, 0],
//   ])
// ); //  1

// console.log(
//   countOnes([
//     [1, 1, 1],
//     [0, 0, 1],
//     [1, 1, 1],
//   ])
// ); //  7

// console.log(
//   countOnes([
//     [1, 2, 3],
//     [0, 2, 1],
//     [5, 7, 33],
//   ])
// ); //  2
