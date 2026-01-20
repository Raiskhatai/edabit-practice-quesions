// 121 => Shopping for Memorial Day!
// Create a function that takes an array of objects and calculate the total based on the quantity of items purchased. Apply a 6% sales tax for each item when appropriate.

// function checkout(cart) {
//   let sum = 0;
//   for (let i = 0; i < cart.length; i++) {
//     let price = cart[i].prc;
//     if (cart[i].taxable == true) {
//       price = price * cart[i].qty;
//       sum += price + (price * 6) / 100;
//     } else {
//       price = price * cart[i].qty;
//       sum += price;
//     }
//   }
//   return sum;
// }

// function checkout(arr) {
//   let sum = arr.reduce((a, v) => {
//     let price = v["prc"] * v.qty;
//     if (v["taxable"] == true) {
//       return (a += price + (price * 6) / 100);
//     } else {
//       return (a += price);
//     }
//   }, 0);
//   return sum;
// }

// console.log(
//   checkout([
//     { desc: "potato chips", prc: 2, qty: 2, taxable: false },
//     { desc: "soda", prc: 3, qty: 2, taxable: false },
//     { desc: "paper plates", prc: 5, qty: 1, taxable: true },
//   ]),
// ); // 15.3

// 122 => Sum of Every Nth Number
// Given an array of numbers and a positive value for n, return the sum of every nth number in the array.

// function sumEveryNth(numbers, n) {
//   let sum = 0;
//   for (let i = n - 1; i < numbers.length; i += n) {
//     sum += numbers[i];
//   }
//   return sum;
// }

// console.log(sumEveryNth([4, 8, 6, 6, 7, 9, 3], 1)); // 43
// // 4+8+6+6+7+9+3 = 43
// console.log(sumEveryNth([7, 3, 10, 4, 5, 8, 4, 9, 6, 9, 10, 1, 4], 4)); // 14
// // 4+9+1 = 14
// console.log(sumEveryNth([10, 6, 5, 4, 5, 2, 3, 3, 8, 10, 7, 2], 8)); // 3
// // 3
// console.log(sumEveryNth([6, 8, 9, 4, 6, 4, 7, 1, 5, 6, 10, 2], 13)); // 0
// // only 12 numbers in array

// 123 =>  Basic Statistics: Median
// The median of a group of numbers is the middle number when the group is sorted. If the size of the group is even, the median is the average of the middle two numbers. Given a sorted array of numbers, return the median (rounded to one decimal place if the median isn't an integer).

// function median(nums) {
//   index = Math.floor(nums.length / 2);
//   if (nums.length % 2 != 0) {
//     return nums[index];
//   } else {
//     return (nums[index] + nums[index - 1]) / 2;
//   }
// }

// function median(nums) {
//   index = Math.floor(nums.length / 2);
//   return nums.length % 2 != 0
//     ? nums[index]
//     : (nums[index] + nums[index - 1]) / 2;
// }

// console.log(median([1, 2, 4, 5, 6, 8, 8, 8, 10])); // 6
// console.log(median([2, 2, 6, 8, 8, 10, 10])); // 8
// console.log(median([1, 2, 2, 4, 7, 8, 9, 10])); // 5.5
