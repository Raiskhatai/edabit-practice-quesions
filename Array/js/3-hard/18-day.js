// 48 => Expand a Number I
// Create a function that expands a number into a string as shown below:

// 25 ➞ "20 + 5"
// 70701 ➞ "70000 + 700 + 1"
// 685 ➞ "600 + 80 + 5"

function expandedForm(num) {
  let str = "";
  let copy = num + "";
  copy = copy.split("");
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] == 0) {
      continue;
    } else {
      str += copy[i];
    }
    for (let k = i + 1; k < copy.length; k++) {
      str += 0;
    }
    str += " + ";
  }
  str = str.split("");
  str.splice(str.length - 2, 1);
  str = str.join("");
	str=str.trim()
  return str;
}

console.log(expandedForm(70304)); // "70000 + 300 + 4"
console.log(expandedForm(1037903)); // "1000000 + 30000 + 7000 + 900 + 3"
console.log(expandedForm(802539)); // "800000 + 2000 + 500 + 30 + 9"
