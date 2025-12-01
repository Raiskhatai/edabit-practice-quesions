// function print(n) {
//   if (n > 5) return;
//   //   console.log(n);
//   print(n + 1);
// }

// print(1);

function factorial(n) {
  if (n === 1) return 1;
  console.log(n);
  return n * factorial(n - 1);
}

console.log(factorial(5));
