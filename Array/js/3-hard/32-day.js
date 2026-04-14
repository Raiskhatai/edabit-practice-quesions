// 65 => Building a Staircase
// Create a function that builds a staircase given the height and the type of building block.

function buildStaircase(height, block) {
  let retarr = [].fill("-", height);
  for (let i = 0; i < height; i++) {
    let temp = [];
    for (let k = 0; k < height; k++) {
      temp.push(block);
    }
    temp.fill("_", i + 1, height);
    retarr.push(temp);
  }
  return retarr;
}

console.log(
  buildStaircase(4, "A"),
  // [['A', '_', '_', '_'],
  // ['A', 'A', '_', '_'],
  // ['A', 'A', 'A', '_'],
  // ['A', 'A', 'A', 'A']]
);

console.log(buildStaircase(3, "#"));
// [
//   (["#", "_", "_"], ["#", "#", "_"], ["#", "#", "#"])
// ];

console.log(buildStaircase(4, "#"));
// [
//   (["#", "_", "_", "_"],
//   ["#", "#", "_", "_"],
//   ["#", "#", "#", "_"],
//   ["#", "#", "#", "#"])
// ];

console.log(buildStaircase(3, "A"));
// [
//   (["A", "_", "_"], ["A", "A", "_"], ["A", "A", "A"])
// ];

// height = 3 and building block = "A"

console.log(buildStaircase(4, "$"));
// [
//   (["$", "_", "_", "_"],
//   ["$", "$", "_", "_"],
//   ["$", "$", "$", "_"],
//   ["$", "$", "$", "$"])
// ];

// height = 4 and building block = "$"
