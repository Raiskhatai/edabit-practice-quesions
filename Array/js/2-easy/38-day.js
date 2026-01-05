// 91=> String Match by Two Letters
// Create a function that takes two strings, a and b. Return the number of times the two strings contain the same two letters at the same index. The two letters must appear at consecutive indices.

// For example, if a = "bboiizz" and b = "bbuiiz", your function should return 3, since the "bb", "ii", and "iz" appear at the same place in both strings.

// function strMatchBy2char(a,b){
//     counter=0;
//     for(let i=0;i<a.length-1;i++){
//         if(a[i]==b[i] && a[i+1]==b[i+1]){
//             counter++;
//         }
//     }
//     return counter;
// }

// console.log(strMatchBy2char("yytaazz", "yyjaaz")) // 3
// console.log(strMatchBy2char("edabit", "ed")) // 1
// console.log(strMatchBy2char("", "")) // 0

// 92 => Balancing Scales
// Given an array with an odd number of elements, return whether the scale will tip "left" or "right" based on the sum of the numbers. The scale will tip on the direction of the largest total. If both sides are equal, return "balanced".

// function scaleTip(arr) {
//   let index = arr.indexOf("I");
//   let first_sum = 0;
//   let second_sum = 0;
//   for (let i = 0; i < index; i++) {
//     first_sum += arr[i];
//   }
//   for (let i = index+1; i < arr.length; i++) {
//     second_sum += arr[i];
//   }
//   let result=first_sum>second_sum?"left":first_sum==second_sum?"balanced":"right";
//  return result;
// }

// function scaleTip(arr) {
//   let index = arr.indexOf("I");
//   let first_sum = 0;
//   let second_sum = 0;
//   arr.forEach((item, i) => {
//     if (i < index) {
//       first_sum += item;
//     } else if (i > index) {
//       second_sum += item;
//     }
//   });
//   let result =
//     first_sum > second_sum? "left": first_sum == second_sum? "balanced": "right";
//   return result;
// }

// console.log(scaleTip([0, 0, "I", 1, 1])); // "right"
// // 0 < 2 so it will tip right
// console.log(scaleTip([1, 2, 3, "I", 4, 0, 0])); // "left"
// // 6 > 4 so it will tip left
// console.log(scaleTip([5, 5, 5, 0, "I", 10, 2, 2, 1])); // "balanced"
// // 15 = 15 so it will stay balanced
