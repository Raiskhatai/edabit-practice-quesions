// 69 => Find the Missing Letter
// Create a function that takes an array of increasing letters and return the missing letter.

function missingLetter(arr) {
  let smallArr = [];
  for (let i = 0; i < arr.length; i++) {
    smallArr.push([arr[i].charCodeAt(0)]);
  }
  let exitNum = 0;
  smallArr = smallArr.flat(Infinity);
  for (let i = 0; i < smallArr.length - 1; i++) {
    // console.log(
    //   String.fromCharCode(smallArr[i + 1]),
    //   String.fromCharCode(smallArr[i]),
    // );
    if (smallArr[i + 1] - smallArr[i] === 2) {
      exitNum = smallArr[i + 1] - 1;
    }
  }
  //   return String.fromCharCode(exitNum);
}

console.log(missingLetter(["a", "b", "c", "e", "f", "g"])); // "d"
console.log(missingLetter(["O", "Q", "R", "S"])); // "P"
console.log(missingLetter(["t", "u", "v", "w", "x", "z"])); // "y"
console.log(missingLetter(["m", "o"])); // "n"
