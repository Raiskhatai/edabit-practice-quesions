// 94 => Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

// function mostExpensiveItem(obj) {
//   let max = -Infinity;
//   let val = "";
//   for (let key in obj) {
//     if (obj[key] > max) {
//       max = obj[key];
//       val = key;
//     }
//   }
//   return val;
// }

// 95 => Sum of Array Elements Except Itself
// An array is given. Return a new array having the sum of all its elements except itself. For more clarity, check the examples below.

// Clarification
// [1, 2, 3, 4] = for first element => sum will be 2+3+4 = [9]
// [1, 2, 3, 4] = for second element => sum will be 1+3+4 = [9, 8]
// [1, 2, 3, 4] = for third element => sum will be 1+2+4 = [9, 8, 7]
// [1, 2, 3, 4] = for fourth element => sum will be 1+2+3 = [9, 8, 7, 6]

function arrEleSum(args) {
  let newargs = [];
  for (let i = 0; i < args.length; i++) {
    let sum = 0;
    for (let k = 0; k < args.length; k++) {
      if (k == i) {
        continue;
      } else {
        sum += args[k];
      }
    }
    newargs.push(sum);
  }
  return newargs;
}

console.log(arrEleSum([1, 2, 3, 2, 1])); // [8, 7, 6, 7, 8]
console.log(arrEleSum([1, 2])); // [2, 1]
console.log(arrEleSum([1, 2, 3])); // [5, 4, 3]
console.log(arrEleSum([1, 2, 3, 4, 5])); // [14, 13, 12, 11, 10]
console.log(arrEleSum([10, 20, 30, 40, 50, 60])); // [200, 190, 180, 170, 160, 150]
