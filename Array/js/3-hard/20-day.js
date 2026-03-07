// 49 => Filter Primes from an Array
// Create a function that takes an array and returns a new array containing only prime numbers.

function filterPrimes(arr) {
  let primes = [];
  for (let i = 0; i < arr.length; i++) {
    for (let k = 3; k < arr.length; k++) {
      if (arr[k] % 2 == 0 || arr[k] % 3 == 0) break;
      else primes.push(arr[i]);
    }
  }
  return primes;
}

console.log(filterPrimes([7, 9, 3, 9, 10, 11, 27])); // [7, 3, 11]
console.log(filterPrimes([10007, 1009, 1007, 27, 147, 77, 1001, 70])); // [10007, 1009]
console.log(
  filterPrimes([
    1009, 10, 10, 10, 3, 33, 9, 4, 1, 61, 63, 69, 1087, 1091, 1093, 1097,
  ]),
); // [1009, 3, 61, 1087, 1091, 1093, 1097
