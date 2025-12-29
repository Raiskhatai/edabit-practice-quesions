// 82 => 25-Mile Marathon
// Mary wants to run a 25-mile marathon. When she attempts to sign up for the marathon, she notices the sign-up sheet doesn't directly state the marathon's length. Instead, the marathon's length is listed in small, different portions. Help Mary find out how long the marathon actually is.
// Return true if the marathon is 25 miles long, otherwise, return false.

// function marathonDistance(d) {
//   let sum = 0;
//   for (let i = 0; i < d.length; i++) {
//     if (d[i] < 0) {
//       sum += d[i] * -1;
//     } else {
//       sum += d[i];
//     }
//   }
//   if (sum === 25) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function marathonDistance(d) {
//   let sum = 0;
//   d.forEach((item) => {
//     item < 0 ? (sum += item * -1) : (sum += item);
//   });
//   return sum === 25 ? true : false;
// }

// console.log(marathonDistance([1, 2, 3, 4])); // false
// console.log(marathonDistance([1, 9, 5, 8, 2])); // true
// console.log(marathonDistance([-6, 15, 4])); // true

// 83 => Numbers to Objects
// Mubashir needs your help in a simple task.

// Given an array of numbers arr:

// Create an object for each given number.
// The object key will be the number converted to a string.
// The value will be the corresponding character code converted to a string (check ASCII table).
// Return an array of the resulting objects.

// function numObj(arr) {
//   let newarr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let temp = String(arr[i]);
//     let ascii_code = String.fromCharCode(temp);
//     newarr[i] = {
//       [arr[i]]: ascii_code,
//     };
//   }
//   return newarr;
// }

// console.log(numObj([118, 117, 120])); // [{'118':'v'}, {'117':'u'}, {'120':'x'}]
// console.log(numObj([101, 121, 110, 113, 103])); // [{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'103':'g'}]
// console.log(numObj([118, 103, 110])); // [{"118":"v"}, {"103":"g"}, {"110":"n"}]

