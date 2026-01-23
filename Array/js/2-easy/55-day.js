// 125 => Musical Cadences
// In music, cadences act as punctuation in musical phrases, and help to mark the end of phrases. Cadences are the two chords at the end of a phrase. The different cadences are as follows:

// V followed by I is a Perfect Cadence
// IV followed by I is a Plagal Cadence
// V followed by Any chord other than I is an Interrupted Cadence
// Any chord followed by V is an Imperfect Cadence
// Create a function where given a chord progression as an array, return the type of cadence the phrase ends on.

// function findCadence(chords) {
//   let last_idx = chords[chords.length - 1];
//   let s_last_idx = chords[chords.length - 2];
//   if (last_idx == "I" && s_last_idx == "V") {
//     return "perfect";
//   } else if (last_idx == "I" && s_last_idx == "IV") {
//     return "plagal";
//   } else if (last_idx != "I" && s_last_idx == "V") {
//     return "interrupted";
//   } else if(last_idx==="V"){
//     return "imperfect";
//   }else{
//     return "no cadence";
//   }
// // }

// console.log(findCadence(["I", "IV", "V"])); // "imperfect"
// console.log(findCadence(["ii", "V", "I"])); // "perfect"
// console.log(findCadence(["I", "IV", "I", "V", "vi"])); // "interrupted"

// 126 => Boolean Chain
// Write three functions:

// AND
// OR
// XOR
// These functions should evaluate an array of true and false values, starting from the leftmost element and evaluating pairwise.

// function and(arr) {
//   let val = 0;
//   for (let i = 0; i < arr.length - 1; i++) {
//     val = arr[i] && arr[i + 1];
//     if (val == false) {
//       return false;
//     }
//   }
//   return val;
// }
// function or(arr) {
//   let val = 0;
//   val = arr[0] || arr[1];
//   for (let i = 1; i < arr.length - 1; i++) {
//     val = val || arr[i + 1];
//   }
//   return val;
// }
// function xor(arr) {
//   let val = 0;
//   val = arr[0] != arr[1];
//   for (let i = 1; i < arr.length - 1; i++) {
//     val = val != arr[i + 1];
//   }
//   return val;
// }

// console.log(and([true, true, false, true])); // false
// // and([true, true, false, true]) => and([true, false, true]) => and([false, true]) => false

// console.log(or([true, true, false, false])); // true
// // or([true, true, false, true]) => or([true, false, false]) => or([true, false]) => true

// console.log(xor([true, true, false, false])); // false
// // xor([true, true, false, false]) => xor([false, false, false]) => xor([false, false]) => false

// 127 => Count the Points in a Circle
// Count the total number of coordinates on a two-dimensional grid that are inside a given circle. The function has four parameters: the points (provided as a list of objects), the circle's center x coordinate, the circle's center y coordinate, and the circle's radius. For example:

// function pointsInCircle(points, centerX, centerY, radius) {
//   let counter = 0;
//   for (let i = 0; i < points.length; i++) {
//     let { x, y } = points[i];
//     val = (x - centerX) ** 2 + (y - centerY) ** 2;
//     if (val < radius ** 2) {
//       counter++;
//     }
//   }

//   return counter;
// }

// console.log(
//   pointsInCircle(
//     [
//       { x: 0, y: 0 },
//       { x: 1, y: 1 },
//       { x: 0, y: 5 },
//       { x: 10, y: 10 },
//     ],
//     0,
//     0,
//     5,
//   ),
// ); // 2
