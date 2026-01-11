// 98 => Flash Cards
// Create a function that outputs the results of a flashcard. A flashcard is an array of three elements: a number, an operator symbol, and another number. Return the mathematical result of that expression.

// There are 4 operators: + (addition), - (subtraction), x (multiplication), and / (division). If the flashcard displays a number being divided by zero, e.g. [3, "/", 0], then return undefined. For division, round to the hundredths place. So [10, "/", 3] should return 3.33.

// function flash([num1, op, num2]) {
//   switch (op) {
//     case "x":
//       return num1 * num2;
//     case "+":
//       return num1 + num2;
//     case "-":
//       return num1 - num2;
//     case "/":
//       if (num2 === 0) {
//         return undefined;
//       } else {
//         let result = num1 / num2;
//         return +result.toFixed(2);
//       }
//   }
// }

// function flash([num1, op, num2]) {
//   if (op === "x") {
//     return num1 * num2;
//   } else if (op === "+") {
//     return num1 + num2;
//   } else if (op === "-") {
//     return num1 - num2;
//   } else if (num2 === 0 && op === "/") {
//     return undefined;
//   } else {
//     let result = num1 / num2;
//     return +result.toFixed(2);
//   }
// }

// console.log(flash([3, "x", 7])); // 21
// console.log(flash([5, "+", 7])); // 12
// console.log(flash([10, "-", 9])); // 1
// console.log(flash([10, "/", 0])); // undefined
// console.log(flash([10, "/", 3])); // 3.33

// 99 Secret Function 4.0
// Create a function based on the input and output. Look at the examples, there is a pattern.

// function secret(text) {
//   text = text.split(".");
//   let tag = text.splice(0, 1);
//   text = text.join(" ");
//   return `<${tag} class="${text}"></${tag}>`;
// }

// console.log(secret("p.one.two.three")); // `<p class="one two three"></p>`
// console.log(secret("p.one")); // `<p class="one"></p>`
// console.log(secret("p.four.five")); // `<p class="four five"></p>`
