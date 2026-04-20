// 70=> Round to Closest N
// Create a function that takes two integers, num and n, and returns an integer which is divisible by n and is the closest to num. If there are two numbers equidistant from num and divisible by n, select the larger one.

function roundNumber(num, n) {
  let great = [];
  const diff = [];
  for (let i = 1; i < num * 2; i++) {
    if (i % n == 0) {
      // console.log(i);
      if (num - i) {
        diff.push(num - i);
        great.push(i);
      }
    }
  }
  const one = num - great[0];
  const two = (great[1] - num) * -1;
  console.log(
   ( num //n)
  );
  //   return num - one < two - num ? one : two;
}

console.log(roundNumber(6247, 163)); // 6194)

// console.log(roundNumber(33, 25)); // 25
console.log(roundNumber(46, 7)); // 49
// console.log(roundNumber(133, 14)); // 140
