// 50 => Array Chunking
// Given an array and chunk size "n", create a function such that it divides the array into many subarrays where each subarray is of length size "n".

function chunk(array, size) {
  let other = [];
  if (array.length < size) {
    return [array];
  } else {
    for (let i = 0; i < array.length; i = i + size) {
      let temp = array.slice(i, size+i);
      other.push(temp);
    }
  }
  return other;
}

console.log(chunk([1, 2, 3, 4], 2));
//  [
//   [1, 2], [3, 4]
// ]

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3));
//  [
//   [1, 2, 3], [4, 5, 6], [7]
// ]

console.log(chunk([1, 2, 3, 4, 5], 10));
//  [
//   [1, 2, 3, 4, 5]
// ]
