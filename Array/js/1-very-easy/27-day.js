// 1=> Sum of Resistance in Series Circuits
// When resistors are connected together in series, the same current passes through each resistor in the chain and the total resistance, RT, of the circuit must be equal to the sum of all the individual resistors added together. That is:

// RT = R1 + R2 + R3 ...
// Create a function that takes an array of values resistance that are connected in series, and calculates the total resistance of the circuit in ohms. The ohm is the standard unit of electrical resistance in the International System of Units ( SI ).

// function seriesResistance(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   if (sum > 1) {
//     return `${sum} ohms`;
//   } else {
//     return `${sum} ohm`;
//   }
// }

// function seriesResistance(arr) {
//   let sum = arr.reduce((a, v) => a + v, 0);
//   if (sum > 1) {
//     return `${sum} ohms`;
//   } else {
//     return `${sum} ohm`;
//   }
// }

// console.log(seriesResistance([1, 5, 6, 3])); //  "15 ohms"
// console.log(seriesResistance([16, 3.5, 6])); //  "25.5 ohms"
// console.log(seriesResistance([0.5, 0.5])); //  "1.0 ohm"

// 2=> Number Split
// Given a number, return an array containing the two halves of the number. If the number is odd, make the rightmost number higher.

// function numberSplit(val) {
//   let half = val / 2;
//   half = half.toFixed(0);
//   let next_half = val - half;
//   next_half = next_half.toFixed(0);

//   let returnarr = [];
//   if (val % 2 == 1) {
//     if (half > next_half) {
//       returnarr[0] = Number(next_half);
//       returnarr[1] = Number(half);
//     } else {
//       returnarr[1] = Number(next_half);
//       returnarr[0] = Number(half);
//     }
//   } else {
//     returnarr[0] = Number(half);
//     returnarr[1] = Number(next_half);
//   }

//   return returnarr;
// // }

// function numberSplit(val) {
//   let half = val / 2;
//   half = Math.floor(half);
//   let next_half = val - half;

//   let returnarr = [];
//   if (val % 2 == 1) {
//     if (half > next_half) {
//       returnarr[0] = next_half;
//       returnarr[1] = half;
//     } else {
//       returnarr[1] = next_half;
//       returnarr[0] = half;
//     }
//   } else {
//     returnarr[0] = half;
//     returnarr[1] = next_half;
//   }

//   return returnarr;
// }

// console.log(numberSplit(4)); //  [2, 2]
// console.log(numberSplit(10)); //  [5, 5]
// console.log(numberSplit(11)); //  [5, 6]
// console.log(numberSplit(-9)); //  [-5, -4]

// 3=> Tuck in Array
// Create a function that takes two arrays and insert the second array in the middle of the first array.

// function tuckIn(arr1, arr2) {
//   lastvalue = arr1[arr1.length - 1];
//   for (i = 1; i <= arr2.length; i++) {
//     arr1[i] = arr2[i - 1];
//   }
//   arr1[arr1.length] = lastvalue;
//   return arr1;
// }

// console.log(tuckIn([1, 10], [2, 3, 4, 5, 6, 7, 8, 9])); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(tuckIn([15, 150], [45, 75, 35])); //  [15, 45, 75, 35, 150]
// console.log(
//   tuckIn(
//     [
//       [1, 2],
//       [5, 6],
//     ],
//     [[3, 4]]
//   )
// ); //  [[1, 2], [3, 4], [5, 6]]

// 4=> Check if One Array can be Nested in Another
// Create a function that returns true if the first array can be nested inside the second and false otherwise.

// arr1 can be nested inside arr2 if:

// arr1's min is greater than arr2's min.
// arr1's max is less than arr2's max.

// function canNest(arr1,arr2){
//     arr1.sort((a,b) => a-b);
//     arr2.sort((a,b) => a-b);
//     let last_index=arr1.length-1;
//     if(arr1[0]>arr2[0] && arr1[last_index]<arr2[1])
//     {
//         return true;
//     }
//     return false;
// }

// console.log(canNest([1, 2, 3, 4], [0, 6]))      //  true
// console.log(canNest([3, 1], [4, 0]))        //  true
// console.log(canNest([9, 9, 8], [8, 9]))     //  false
// console.log(canNest([1, 2, 3, 4], [2, 3]))      //  false

// 5=> Find the Smallest and Biggest Numbers
// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr){
//     arr.sort((a,b) => a-b);
//     min=arr[0];
//     max=arr[arr.length-1];
//     let newarr=[];
//     newarr.push(min,max);
//     return newarr;
// }

// console.log(minMax([1, 2, 3, 4, 5]))        //  [1, 5]
// console.log(minMax([2334454, 5]))       //  [5, 2334454]
// console.log(minMax([1]))        //  [1, 1]