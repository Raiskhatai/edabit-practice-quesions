// 105 => Cumulative Array Sum
// Create a function that takes an array of numbers and returns an array where each number is the sum of itself + all previous numbers in the array.

// function cumulativeSum(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     arr[i] = arr[i] + arr[i - 1];
//   }
//   return arr;
// }

// console.log(cumulativeSum([1, 2, 3])); // [1, 3, 6]
// console.log(cumulativeSum([1, -2, 3])); // [1, -1, 2]
// console.log(cumulativeSum([3, 3, -2, 408, 3, 3])); // [3, 6, 4, 412, 415, 418]

// 106=> Stalactites or Stalagmites?
// Stalactites hang from the ceiling of a cave while stalagmites grow from the floor.

// Create a function that determines whether the input represents "stalactites" or "stalagmites". If it represents both, return "both". Input will be a 2D array, with 1 representing a piece of rock, and 0 representing air space.

// function mineralFormation(cave) {
//   let stalactites = 0;
//   let stalagmites = 0;
//   for (let i = 0; i < cave.length; i++) {
//     if (cave[0][i] == 1) {
//       stalactites++;
//       //   console.log(stalactites);
//     }
//     if (cave[cave.length - 1][i] == 1) {
//       stalagmites++;
//       //   console.log(stalagmites);
//     }
//   }
//   if (stalagmites > 0 && stalactites > 0) {
//     return "both";
//   } else if (stalactites > 0) {
//     return "stalactites";
//   } else if (stalagmites > 0) {
//     return "stalagmites";
//   }
// }

// function mineralFormation(cave) {
//   let stalactites = 0;
//   let stalagmites = 0;
//   cave.forEach((element, i, tarr) => {
//     if (tarr[0][i] == 1) {
//       stalactites++;
//     }
//     if (tarr[tarr.length - 1][i] == 1) {
//       stalagmites++;
//     }
//   });
//   return stalactites > 0 && stalagmites > 0
//     ? "both"
//     : stalactites > 0
//     ? "stalactites"
//     : "stalagmites";
// }

// console.log(mineralFormation([[1], [1], [0], [1]])); //"both"

// console.log(
//   mineralFormation([
//     [0, 1, 0, 1],
//     [0, 1, 0, 1],
//     [0, 0, 0, 1],
//     [0, 0, 0, 0],
//   ])
// ); // "stalactites"

// console.log(
//   mineralFormation([
//     [0, 0, 0, 0],
//     [0, 1, 0, 1],
//     [0, 1, 1, 1],
//     [0, 1, 1, 1],
//   ])
// ); // "stalagmites"

// console.log(
//   mineralFormation([
//     [1, 0, 1, 0],
//     [1, 1, 0, 1],
//     [0, 1, 1, 1],
//     [0, 1, 1, 1],
//   ])
// ); // "both"

// 107 => Making a Sandwich
// Given an array of ingredients i and a string flavour f as input, create a function that returns the array but with the elements bread around the selected ingredient.

// function makeSandwich(ingredients, flavour) {
//   for (let i = ingredients.length; i >= 0; i--) {
//     if (ingredients[i] == flavour) {
//       ingredients.splice(i + 1, 0, "bread");
//       ingredients.splice(i, 0, "bread");
//     }
//   }
//   return ingredients;
// }

// console.log(makeSandwich(["tuna", "ham", "tomato"], "ham")); // ["tuna", "bread", "ham", "bread", "tomato"]
// console.log(makeSandwich(["cheese", "lettuce"], "cheese")); // ["bread", "cheese", "bread", "lettuce"]
// console.log(makeSandwich(["ham", "ham"], "ham")); // ["bread", "ham", "bread", "bread", "ham", "bread"]
