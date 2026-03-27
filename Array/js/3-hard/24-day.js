// // 53=> Sum of Prime Numbers
// // Create a function that takes an array of numbers and returns the sum of all prime numbers in the array.

// function sumPrimes(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let k = 2; k <= arr[i]; k++) {
//       if (arr[i] == k) {
//         sum += arr[i];
//       } else if (arr[i] % k == 0) {
//         break;
//       }
//     }
//   }
//   return sum;
// }

// console.log(sumPrimes([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 17
// console.log(sumPrimes([2, 3, 4, 11, 20, 50, 71])); // 87
// console.log(sumPrimes([])); // 0

// 54 => Imaginary Coding Interview
// Create a function to check if a candidate is qualified in an imaginary coding interview of an imaginary tech startup.

// The criteria for a candidate to be qualified in the coding interview is:

// The candidate should have complete all the questions.
// The maximum time given to complete the interview is 120 minutes.
// The maximum time given for very easy questions is 5 minutes each.
// The maximum time given for easy questions is 10 minutes each.
// The maximum time given for medium questions is 15 minutes each.
// The maximum time given for hard questions is 20 minutes each.
// If all the above conditions are satisfied, return "qualified", else return "disqualified".

// You will be given an array of time taken by a candidate to solve a particular question and the total time taken by the candidate to complete the interview.

// Given an array, in a true condition will always be in the format [very easy, very easy, easy, easy, medium, medium, hard, hard].

// The maximum time to complete the interview includes a buffer time of 20 minutes.

// function interview(arr, tot) {
//   if (arr.length < 8) {
//     return "disqualified";
//   } else if (tot > 120) {
//     return "disqualified";
//   } else {
//     let val = 0;
//     let returnval = "";
//     for (let index = 0; index < arr.length; index++) {
//       if (index % 2 == 0) {
//         val += 5;
//       }
//       //   console.log(index, item, val);
//       if (val >= arr[index]) {
//         returnval = "qualified";
//       } else {
//         if (arr[index] > val) return "disqualified";
//       }
//     }
//     return returnval;
//   }
// }

// console.log(interview([5, 5, 10, 10, 15, 15, 20], 120)); // "disqualified");
// console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130)); // "disqualified");

// console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 120)); // "qualified"
// console.log(interview([2, 3, 8, 6, 5, 12, 10, 18], 64)); //  "qualified"
// console.log(interview([5, 5, 10, 10, 25, 15, 20, 20], 120)); // "disqualified"
// //// Exceeded the time limit for a medium question.

// console.log(interview([5, 5, 10, 10, 15, 15, 20], 120)); // "disqualified"
// //// Did not complete all the questions.

// console.log(interview([5, 5, 10, 10, 15, 15, 20, 20], 130)); // "disqualified"
// //// Solved all the questions in their respected time limits but exceeded the total time limit of the interview.
