// 93 => Superheroes
// Create a function that takes an array of superheroes / superheroines names and returns an array of only superheroe names ending in "man". Return the names in alphabetical order.

// function superheroes(arr) {
//   let other = [];
//   for (let i = 0; i < arr.length; i++) {
//     let name = arr[i].toLowerCase();
//     if (name.endsWith("man") && !name.endsWith("woman")) {
//       other.push(arr[i]);
//     }
//   }
//   return other;
// }

// function superheroes(arr) {
//   let retarr = arr.filter((item) => {
//     let name = item.toLowerCase();
//     if (name.toLowerCase().endsWith("man") && !name.endsWith("woman")) {
//       return name;
//     }
//   });
//   return retarr;
// }

// console.log(superheroes(["Batman","Superman","Spider-man","Hulk","Wolverine","Wonder-Woman",
//   ])
// ); // ["Batman", "Spider-man", "Superman"]
// console.log(superheroes(["Catwoman","Deadpool","Dr.Strange","Captain-America","Aquaman","Hawkeye",
//   ])
// ); // ["Aquaman"]
// console.log(superheroes(["Wonder-Woman", "Catwoman", "Invisible-Woman"])); // []
