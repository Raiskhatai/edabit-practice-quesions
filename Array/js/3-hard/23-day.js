// 52 => Sieve of Eratosthenes
// Given num as input, return an array with all primes up to num included.

// Alternative Text

function eratosthenes(n) {
  let arr = [];
  for (let i = 2; i <= n; i++) {
    for (let k = 2; k <= i; k++) {
      if (i == k) {
        arr.push(i);
      } else if (i % k == 0) {
        break;
      }
    }
  }
  if (n < 2) return [];
  return arr;
}

// console.log(eratosthenes(1000)); // []
console.log(eratosthenes(1)); // []
console.log(eratosthenes(10)); // [2, 3, 5, 7]
console.log(eratosthenes(20)); // [2, 3, 5, 7, 11, 13, 17, 19]
console.log(eratosthenes(0)); // []
