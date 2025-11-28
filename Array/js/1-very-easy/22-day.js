// 1 =>  Nth Smallest Integer
// Given an unsorted array, create a function that returns the nth smallest integer (the smallest integer is the first smallest, the second smallest integer is the second smallest, etc).

// function nthSmallest(arr,val)
// {
//     arr.sort((a,b)=>a-b);
//     if(val>=arr.length)
//         return null;
//     else
//     return arr[val-1];
// }

// console.log(nthSmallest([1, 3, 5, 7], 1)); //  1
// console.log(nthSmallest([1, 3, 5, 7], 3)); //  5
// console.log(nthSmallest([1, 3, 5, 7], 5)); //  null
// console.log(nthSmallest([7, 3, 5, 1], 2)); //  3

// 2=>  Applying Discounts
// Create a function that applies a discount d to every number in the array.

// function getDiscounts(arr, val) {
//   let nval = "";
//   for (let i = 0; i < 2; i++) {
//     nval += val[i];
//   }
//   nval = nval - 0;
//   let rtnarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     rtnarr[i] = arr[i] * (nval / 100);
//   }
//   return rtnarr;
// }

// function getDiscounts(arr, val) {
//   val = val.substring(0, 2);
//   val = val - 0;
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newarr[i] = arr[i] * (val / 100);
//   }
//   return newarr;
// }

// function getDiscounts(arr, val) {
//   let newarr = [];
//   let newv = val.split("");
//   newv.pop();
//   newnewv = newv.join("");
//   for (let i = 0; i < arr.length; i++) {
//     newarr[i] = arr[i] * (newnewv / 100);
//   }
//   return newarr;
// }

// console.log(getDiscounts([2, 4, 6, 11], "50%")); //  [1, 2, 3, 5.5]
// console.log(getDiscounts([10, 20, 40, 80], "75%")); //  [7.5, 15, 30, 60]
// console.log(getDiscounts([100], "45%")); //  [45]

// 3=> Odd Up, Even Down
// Create a function that goes through the array, incrementing (+1) for each odd-valued number and decrementing (-1) for each even-valued number.

// function transform(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//       arr[i] = arr[i] - 1;
//     } else {
//       arr[i] = arr[i] + 1;
//     }
//   }
//   return arr;
// }

// function transform(arr) {
//   let newarr = arr.map((item) => {
//     if (item % 2 == 0) {
//       return item - 1;
//     } else {
//       return item + 1;
//     }
//   });
//   return newarr;
// }

// console.log(transform([1, 2, 3, 4, 5]));         //  [2, 1, 4, 3, 6]
// console.log(transform([3, 3, 4, 3]));        //  [4, 4, 3, 4]
// console.log(transform([2, 2, 0, 8, 10]));       //  [1, 1, -1, 7, 9]

// 4 => Return Only the Integer
// Write a function that takes an array of elements and returns only the integers.

// function returnOnlyInteger(arr) {
//   let newarr = [];
//   let j = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0 && typeof arr[i] == "number") {
//       newarr[j] = arr[i];
//       j++;
//     } else if (arr[i] % 2 === 1 && typeof arr[i] == "number") {
//       newarr[j] = arr[i];
//       j++;
//     }
//   }
//   return newarr;
// }

// function returnOnlyInteger(arr) {
//   let newarr = arr.filter((item) => {
//     if (typeof item === "number" && item % 2 == 0) {
//       return item;
//     } else if (typeof item === "number" && item % 2 == 1) {
//         return item;
//     }
//   });
//   return newarr;
// }

// function returnOnlyInteger(arr)
// {
//     let newarr=arr.filter(item => Number.isInteger(item));
//     return newarr;
// }

// console.log(returnOnlyInteger([9, 2, "space", "car", "lion", 16])); //  [9, 2, 16]
// console.log(returnOnlyInteger(["hello", 81, "basketball", 123, "fox"])); //  [81, 123]
// console.log(returnOnlyInteger([10, "121", 56, 20, "car", 3, "lion"])); //  [10, 56, 20, 3]
// console.log(returnOnlyInteger(["String", true, 3.3, 1])); //  [1]

// 5=>  Date Format
// Create a function that converts a date formatted as MM/DD/YYYY to YYYYDDMM.

// function formatDate(str) {
//   let newa = str.split("/");
//   newa = newa.reverse();
//   newa=newa.join("");
//   return newa;
// }


// console.log(formatDate("11/12/2019")); //  "20191211"
// console.log(formatDate("12/31/2019")); //  "20193112"
// console.log(formatDate("01/15/2019")); //  "20191501"
