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

// 19 => Luke, I Am Your ...
// Luke Skywalker has family and friends. Help him remind them who is who. Given a string with a name, return the relation of that person to Luke.

// Person	Relation
// Darth Vader	father
// Leia	sister
// Han	brother in law
// R2D2	droid

// function relationToLuke(name) {
//   switch (name) {
//     case "Darth Vader":
//       return "Luke, I am your father.";
//     case "Leia":
//       return "Luke, I am your sister.";
//     case "Han":
//       return "Luke, I am your brother in law.";
//     case "R2D2":
//       return "Luke, I am your droid.";
//     default:
//       "wrong case";
//   }
// }

// console.log(relationToLuke("Darth Vader")); // "Luke, I am your father."
// console.log(relationToLuke("Leia")); // "Luke, I am your sister."
// console.log(relationToLuke("Han")); // "Luke, I am your brother in law."

// 20 => Stuttering Function
// Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.

// function stutter(word) {
//   let half = word.slice(0, 2) + "... ";
//   let repeated = half.repeat(2);
//   return `${repeated}${word}?`;
// }

// console.log(stutter("incredible")); // "in... in... incredible?"
// console.log(stutter("enthusiastic")); // "en... en... enthusiastic?"
// console.log(stutter("outstanding")); // "ou... ou... outstanding?"

// 21 => Concatenating First and Last Character of a String
// Create a function that takes a string and returns the concatenated first and last character.

// function firstLast(name) {
//   let val = name.slice(0, 1);
//   let valend = name.slice(name.length - 1);
//   return val + valend;
// }

// console.log(firstLast("ganesh")); // "gh"
// console.log(firstLast("kali")); // "ki"
// console.log(firstLast("shiva")); // "sa"
// console.log(firstLast("vishnu")); // "vu"
// console.log(firstLast("durga")); // "da"

// 22 => Is the Last Character an "N"?
// Create a function that takes a string (a random name). If the last character of the name is an "n", return true, otherwise return false.

// function isLastCharacterN(word) {
//   let lastword = word.slice(word.length - 1);
//   return lastword === "n" ? true : false;
// }

// console.log(isLastCharacterN("Aiden")); // true
// console.log(isLastCharacterN("Piet")); // false
// console.log(isLastCharacterN("Bert")); // false
// console.log(isLastCharacterN("Dean")); // true

// 23 => Extract City Facts
// Create a function that takes an object as an argument and returns a string with facts about the city. The city facts will need to be extracted from the object's three properties:

// name
// population
// continent
// The string should have the following format: X has a population of Y and is situated in Z (where X is the city name, Y is the population and Z is the continent the city is situated in).

// function cityFacts({ name, population, continent }) {
//   return `${name} has a population of ${population} and is situated in ${continent}`
// }

// function cityFacts({ name, population, continent }) {
//   return `${city.name} has a population of ${city.population} and is situated in ${city.continent}`;
// }

// console.log(
//   cityFacts({
//     name: "Paris",
//     population: "2,140,526",
//     continent: "Europe",
//   }),
// ); // "Paris has a population of 2,140,526 and is situated in Europe"

// console.log(
//   cityFacts({
//     name: "Tokyo",
//     population: "13,929,286",
//     continent: "Asia",
//   }),
// ); // "Tokyo has a population of 13,929,286 and is situated in Asia"

// 24 => Check String for Spaces
// Create a function that returns true if a string contains any spaces.

// function hasSpaces(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(hasSpaces("hello")); // false
// console.log(hasSpaces("hello, world")); // true
// console.log(hasSpaces(" ")); // true
// console.log(hasSpaces("")); // false
// console.log(hasSpaces(",./!@#")); // false

// 25 => Is the Word Singular or Plural?
// Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

// function isPlural(word) {
//   if (word.slice(word.length - 1) === "s") return true;
//   else return false;
// }

// console.log(isPlural("changes")); // true
// console.log(isPlural("change")); // false
// console.log(isPlural("dudes")); // true
// console.log(isPlural("magic")); // false
