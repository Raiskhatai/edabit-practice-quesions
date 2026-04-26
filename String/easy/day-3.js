// 11 => Word without First Character
// Create a function that takes a word and returns the new word without including the first character.

// function newWord(str) {
//   return str.slice(1, str.length);
// }

// console.log(newWord("apple")); // "pple"
// console.log(newWord("cherry")); // "herry"
// console.log(newWord("plum")); // "lum"

// 12 => Name Greeting!
// Create a function that takes a name and returns a greeting in the form of a string. Don't use a normal function, use an arrow function.

// const helloName = (name) => `Hello ${name}!`;

// console.log(helloName("Gerald")); // "Hello Gerald!"
// console.log(helloName("Tiffany")); // "Hello Tiffany!"
// console.log(helloName("Ed")); // "Hello Ed!"

// 13 => Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr, str) {
//   return arr.indexOf(str);
// }

// function findIndex(arr, str) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === str) return i;
//   }
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")); // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue")); // 1
// console.log(findIndex(["a", "g", "y", "d"], "d")); // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple")); // 0

// 14 => Evaluate an Equation
// Create a function that evaluates an equation.

// function eq(evaluate) {
//   return eval(evaluate);
// }

// console.log(eq("1+2")); // 3
// console.log(eq("6/(9-7)")); // 3
// console.log(eq("3+2-4")); // 1

// 15 => Fraction Greater Than One
// Given a fraction as a string, return whether or not it is greater than 1 when evaluated.

// function greaterThanOne(frac) {
//   let val = eval(frac);
//   return val > 1 ? true : false;
// }

// console.log(greaterThanOne("1/2")); // false
// console.log(greaterThanOne("7/4")); // true
// console.log(greaterThanOne("10/10")); // false

// 16 => Reverse Psychology
// For this challenge, you will NOT be given a string. Your task isn't to add "Do not" before the given string. If there is no given string, you will not return "Do not do anything." Do not check the examples to know how to do this challenge.

// function reversePsychology(s) {
//   if (s === undefined) return `Do not do anything`;
//   return `Do not ${s}`;
// }

// console.log(reversePsychology()); // "Do not do anything.""
// console.log(reversePsychology("wash the dishes")); // "Do not wash the dishes."
// console.log(reversePsychology("eat your lunch")); // "Do not eat your lunch."
// console.log(reversePsychology("go to school")); // "Do not go to school."

// 17 => Front 3 - Slice Check Repeat Concatenate
// Create a function that takes a string; we'll say that the front is the first three characters of the string. If the string length is less than three characters, the front is whatever is there. Return a new string, which is three copies of the front.

// function frontThree(str) {
//   let firstThree = str.substring(0, 3);
//   return firstThree.repeat(3);
// }

// console.log(frontThree("Python")); // "PytPytPyt"
// console.log(frontThree("Cucumber")); // "CucCucCuc"
// console.log(frontThree("bioshock")); // "biobiobio"

// 18 => Format I: Template String
// Write a template string according to the following example:

// const a = "John";
// const b = "Joe";
// const c = "Jack";
// const template = "your template string" ➞ "Their names were:  John,  Joe  and  Jack."
// Tips
// A template string is a string that uses a Dollar sign and curly braces inside backticks ${} as a placeholder that can then be formatted:

// function format(a, b, c) {
// // the result string must give: "Their names were: a, b and c."
// 	const template = `Their names were: ${a}, ${b} and ${c}.`
// 	return template
// }
// const name = John;
// `hello, my name is ${name}.` ➞ "hello, my name is John."
// You can put an expression inside the curly braces :

// const age = 12;
// `Hello, you are ${age < 18 ? 'young' : 'old'}.` ➞ "Hello, you are young."
