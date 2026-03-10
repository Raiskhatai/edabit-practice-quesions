// 51 => Get Students with Names and Top Notes
// Create a function that takes an array of objects like { name: "John", notes: [3, 5, 4] } and returns an array of objects like { name: "John", topNote: 5 }.

// If student has no notes (an empty array) then let's assume topNote: 0.

// function getStudentsWithNamesAndTopNotes(students) {
//   let retval = students.map((items, idx) => {
//     if (items.notes.length == 0) return { name: items.name, topNote: 0 };
//     let topval = items.notes.sort((a, b) => a - b).reverse()[0];
//     return { name: items.name, topNote: topval };
//   });
//   return retval;
// }

// function getStudentsWithNamesAndTopNotes(students) {
//   let retval = [];
//   for (let i = 0; i < students.length; i++) {
//     if (students[i].notes.length == 0)
//       retval.push({ name: students[i].name, topNotes: 0 });
//     else {
//       let topval = students[i].notes.sort((a, b) => a - b).reverse()[0];
//       retval.push({ name: students[i]["name"], topNote: topval });
//     }
//   }
//   return retval;
// }

// console.log(
//   getStudentsWithNamesAndTopNotes([
//     { name: "John", notes: [3, 5, 4] },
//     { name: "Max", notes: [1, 4, 6] },
//     { name: "Zygmund", notes: [1, 2, 3] },
//     { name: "Zygmund", notes: [] },
//   ]),
// );
//  [
//   { "name": "John", "topNote": 5 },
//   { "name": "Max", "topNote": 6 },
//   { "name": "Zygmund", "topNote": 3 }
// ]
