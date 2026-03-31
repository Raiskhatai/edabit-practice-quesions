// 54=> Gold Distribution
// Mubashir and his friend Matt found some gold piles. They decided to follow simple rules to distribute the gold among them.

// Gold will be divided into n piles.
// Each person will choose bigger gold pile either from far left or far right.
// If the weight of both piles is equal then the person will choose left pile.
// Help them by creating a function that takes an array of gold piles gold and returns a two-element array with [Mubashir's Gold, Matt's Gold].

// function goldDistribution(gold) {
//   let Mubashir = 0;
//   let Matt = 0;

//   let copy = [...gold];
//   let flip = 0;

//   for (let i = 0; i <= gold.length - 1; i++) {
//     for (let k = 0; k < 1; k++) {
//       flip = !flip;
//       let start = 0;
//       let end = copy.length - 1;
//       function check(name) {
//         if (copy[0] > gold[gold.length - 1]) {
//           name = copy[0];
//           copy.splice(start, 1);
//           return name;
//         } else if (copy[0] === gold[gold.length - 1]) {
//           name = copy[0];
//           copy.splice(start, 1);
//           return name;
//         } else {
//           name = copy[copy.length - 1];
//           copy.splice(end, 1);
//           return name;
//         }
//       }
//       if (flip) {
//         Mubashir += check(Mubashir);
//       } else {
//         Matt += check(Matt);
//       }
//     }
//   }
//   return [Mubashir, Matt];
// }

// console.log(goldDistribution([4, 7, 2, 9, 5, 2])); // [11, 18]
// console.log(goldDistribution([4, 2, 9, 5, 2, 7])); // [14, 15]
// // Mubashir will choose 7, Remaining piles = [4, 2, 9, 5, 2]
// // Matt will choose 4, Remaining piles = [2, 9, 5, 2]
// // Mubashir will choose 2, Remaining piles = [9, 5, 2]
// // Matt will choose 9, Remaining piles = [5, 2]
// // Mubashir will choose 5, Remaining piles = [2]
// // Matt will choose 2
// // Mubashir = 7+2+5 = 14, Matt = 4+9+2 = 15

// console.log(goldDistribution([10, 1000, 2, 1])); // [12, 1001]
// console.log(goldDistribution([10, 9, 1, 2, 8, 4])); // [16, 18]
