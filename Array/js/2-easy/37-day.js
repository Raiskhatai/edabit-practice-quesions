// 90 => All Numbers in Array Are Prime
// Create a function that takes an array of integers and returns true if every number is prime. Otherwise, return false.
// 1 is not a prime number.

// function allPrime(nums) {
//   let num = 4;
//   let flag = null;
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] == 1) {
//       return false;
//     }
//     for (let k = 2; k < nums[i]; k++) {
//       if (nums[i] == k) {
//         flag = true;
//       } else if (nums[i] % k == 0) {
//         return false;
//       } else {
//         flag = true;
//       }
//     }
//   }
//   return flag;
// }

// console.log(allPrime([7, 5, 2, 4, 6])); // false
// console.log(allPrime([2, 3, 5, 7, 13, 17, 19, 23, 29])); // true
// console.log(allPrime([1, 5, 3])); // false
