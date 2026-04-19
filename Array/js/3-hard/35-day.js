// 69 => Find the Missing Letter
// Create a function that takes an array of increasing letters and return the missing letter.

function missingLetter(arr) {
  let smallArr = [];
  for (let i = 0; i < arr.length; i++) {
    smallArr.push([arr[i].toLowerCase().charCodeAt(0)]);
  }
  smallArr = smallArr.flat(Infinity);
  let quiteNum = 0;
  smallArr.forEach((element, idx) => {
    console.log(
      element - arr[0].charCodeAt(0),
      arr[idx].charCodeAt(0) - arr[0].charCodeAt(0),
    );
  });
}

console.log(missingLetter(["a", "b", "c", "e", "f", "g"])); // "d"
console.log(missingLetter(["O", "Q", "R", "S"])); // "P"
console.log(missingLetter(["t", "u", "v", "w", "x", "z"])); // "y"
console.log(missingLetter(["m", "o"])); // "n"
