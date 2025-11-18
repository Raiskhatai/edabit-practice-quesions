// 1=> Is Sam with Frodo?
// Sam and Frodo need to be close. If they are side by side in the array, your function should return true. If there is a name between them, return false.

// function middleEarth(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i]=="Frodo" && arr[i+1]=="Sam" || arr[i]=="Sam" && arr[i+1]=="Frodo"){
//         return true;
//     }
//   }
//   return false;
// }

// console.log(middleEarth(["Frodo", "Sam", "Gandalf"])); //  true
// console.log(middleEarth(["Frodo", "Saruman", "Sam"])); //  false
// console.log(middleEarth(["Orc", "Sam", "Frodo", "Legolas"])); //  true

// 2=>  Basic Statistics: Mean
// The mean of a group of numbers is calculated by summing all numbers, and dividing this sum by the total count of numbers in the group. Given a sorted array of numbers, return the mean (rounded to one decimal place).

// function mean(arr){
//     let sum=0;
//     for(let i=0;i<arr.length;i++){
//         sum+=arr[i];
//     }
//     sum=sum/arr.length;
//     return sum.toFixed(1);
// }

// function mean(arr) {
//   let sum = arr.reduce((accumaltor, value) => {
//     return accumaltor + value;
//   }, 0);
//   sum = sum / arr.length;
//   return sum.toFixed(1);
// }

// console.log(mean([1, 6, 6, 7, 8, 8, 9, 10, 10])); //  7.2
// console.log(mean([1, 3, 8, 9, 9, 10])); //  6.7
// console.log(mean([2, 3, 3, 6, 6, 8, 9, 10])); //  5.9

// 3=> Product of All Odd Integers
// Create a function that returns the product of all odd integers in an array.

// function oddProduct(arr) {
//   let odd_product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//       odd_product *= arr[i];
//     }
//   }
//   return odd_product;
// }

// console.log(oddProduct([3, 4, 1, 1, 5])); //  15
// console.log(oddProduct([5, 5, 8, 2, 4, 32])); //  25
// console.log(oddProduct([1, 2, 1, 2, 1, 2, 1, 2])); //  1

// 4=> Minimum Removals to Make Sum Even
// Create a function that returns the minimum number of removals to make the sum of all elements in an array even.

// function minimumRemovals(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum % 2 == 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// function minimumRemovals(arr) {
//   sum = arr.reduce((a, v) => {
//     return a + v;
//   });

//   if (sum % 2 == 0) {
//     return 0;
//   } else {
//     return 1;
//   }
// }

// console.log(minimumRemovals([1, 2, 3, 4, 5])); //  1
// console.log(minimumRemovals([5, 7, 9, 11])); //  0
// console.log(minimumRemovals([5, 7, 9, 12])); //  1
// console.log(minimumRemovals([11, 22, 33, 44, 55])); //  1
// console.log(minimumRemovals([100, 101, 102, 103])); //  0

// 5=> Even Number Generator
// Create a function that finds all even numbers from 1 to the given number.

// function findEvenNums(val) {
//   let arr = [];
//   j = 0;
//   for (let i = 1; i <= val; i++) {
//     if (i % 2 == 0) {
//       arr[j] = i;
//       j++;
//     }
//   }
//   return arr;
// }

// function findEvenNums(val){
//     let arr=[];
//     j=0;
//     for(let i=2;i<=val;i+=2){
//         arr[j]=i;
//         j++;
//     }
//     return arr;
// }

// function findEvenNums(val){
//         let arr=[];
//         for(let i=1;i<=val;i++){
//             arr.push(i);
//         }
//         arr=arr.filter(item => item%2==0)
//         return arr;
// }

// console.log(findEvenNums(8)); //  [2, 4, 6, 8]
// console.log(findEvenNums(4)); //  [2, 4]
// console.log(findEvenNums(2)); //  [2]
