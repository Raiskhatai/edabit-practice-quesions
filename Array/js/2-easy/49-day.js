// 113 => Sum Fractions
// Create a function that takes an array containing nested arrays as an argument. Each subarray has 2 elements. The first element is the numerator and the second element is the denominator. Return the sum of the fractions rounded to the nearest whole number.

// function sumFractions(arr){
// let sum=0;
// for(let i=0;i<arr.length;i++){
//     let [a,b]=arr[i];
//     sum+=a/b;
// }
// sum=Math.floor(sum);
// return sum;
// }

// function sumFractions(arr){
//     let sum=arr.reduce((a,v)=>{
//         let [n,d]=v;
//         return a+=n/d;
//     },0)
//     sum=Math.floor(sum);
//     return sum;
// }

// console.log(sumFractions([[18, 13], [4, 5]]) )// 2
// console.log(sumFractions([[36, 4], [22, 60]]) )// 9
// console.log(sumFractions([[11, 2], [3, 4], [5, 4], [21, 11], [12, 6]]) )// 11

// 114 => Count the Number of Duplicate Characters
// Create a function that returns the amount of duplicate characters in a string. It will be case sensitive and spaces are included. If there are no duplicates, return 0.

// function duplicates(str) {
//   let sum = 0;
//   for (let i = 0; i < str.length; i++) {
//     let counter = 0;
//     for (let k = i + 1; k < str.length; k++) {
//       if (str[i] == str[k]) {
//         counter++;
//         break;
//       }
//     }
//     sum += counter;
//   }
//   return sum;
// }

// console.log(duplicates("Hello World!")); // 3
// // "o" = 2, "l" = 3.
// // "o" is duplicated 1 extra time and "l" is duplicated 2 extra times.
// // Hence 1 + 2 = 3

// console.log(duplicates("foobar")); // 1
// console.log(duplicates("helicopter")); // 1
// console.log(duplicates("birthday")); // 0
// // If there are no duplicates, return 0

// 115 => Intersecting Intervals
// Create a function that takes in an array of intervals and returns how many intervals overlap with a given point.

// An interval overlaps a particular point if the point exists inside the interval, or on the interval's boundary. For example the point 3 overlaps with the interval [2, 4] (it is inside) and [2, 3] (it is on the boundary).

// To illustrate:

// function countOverlapping(intervals,point){
//     let counter=0;
//     for(let i=0;i<intervals.length;i++){
//         let [a,b]=intervals[i];
//         if((point > a && point < b) || point == a || point == b){
//             counter++;
//         }
//     }
//     return counter;
// }

// function countOverlapping(intervals,point){
//     let counter=0;
//     intervals.forEach(element => {
//         let [a,b]=element;
//         if((point > a && point < b) || point == a || point == b)
//         {
//             counter++;
//         }
//     });
//     return counter;
// }

// console.log(countOverlapping([[1, 2], [2, 3], [1, 3], [4, 5], [0, 1]], 2) )// 3
// // Since [1, 2], [2, 3] and [1, 3] all overlap with point 2.

// console.log(countOverlapping([[1, 2], [2, 3], [3, 4]], 5) )// 0
// console.log(countOverlapping([[1, 2], [5, 6], [5, 7]], 5) )// 2
// console.log(countOverlapping([[1, 2], [5, 8], [6, 9]], 7) )// 2
