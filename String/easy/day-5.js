// 36 => Spaces Between Each Character
// Create a function that takes a string and returns a string with spaces in between all of the characters.

// function spaceMeOut(str) {
//   let retstr = "";
//   for (let i = 0; i < str.length; i++) {
//     retstr += str[i] + " ";
//   }
//   return retstr.trimEnd();
// }

// console.log(spaceMeOut("space")); // "s p a c e"
// console.log(spaceMeOut("far out")); // "f a r   o u t"
// console.log(spaceMeOut("elongated musk")); // "e l o n g a t e d   m u s k"

// 37 => Amazing Edabit!
// Create a function that takes a string and changes the word amazing to not amazing. Return the string without any change if the word edabit is part of the string.

// function amazingEdabit(str) {
//   if (str.includes("edabit")) return str;
//   else {
//     let val = str.indexOf("amazing");
//     return str.slice(0, val) + "not " + str.slice(val);
//   }
// }

// console.log(amazingEdabit("edabit is amazing.")); // "edabit is amazing."
// console.log(amazingEdabit("Mubashir is amazing.")); // "Mubashir is not amazing."
// console.log(amazingEdabit("Infinity is amazing.")); // "Infinity is not amazing."

// 38 => WordCharWord
// Create a function that will put the first argument, a character, between every word in the second argument, a string.

// function add(char, str) {
//   let val = str;
//   let retval = "";
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//       retval += char;
//     } else {
//       retval += str[i];
//     }
//   }
//   return retval;
// }

// console.log(add("R", "javascript is fun")); // "javascriptRisRfun"
// console.log(add("#", "hello world!")); // "hello#world!"
// console.log(add("#", " ")); // "#"

// 39 => City School Creating IDS
// Many IDS (for emails or Google ID) are created using the person's name.

// Create a function that will return a four-character ID using the person's first name and last name. The first character will be the first letter of the first name but in lowercase. The next three characters will be the first three characters of the last name, but the first letter will be capitalized and the other two will be in lower case.

// function createID(firstname, lastname) {
//   return (
//     firstname.slice(0, 1).toLowerCase() +
//     lastname[0].toUpperCase() +
//     lastname.slice(1, 3).toLowerCase()
//   );
// }

// console.log(createID("mary", "lamb")); // "mLam"
// console.log(createID("John", "SMITH")); // "jSmi"
// console.log(createID("mary", "smith")); // "mSmi"

// 40 => How Many D's Are There?
// Create a function that counts how many D's are in a sentence.

// function countDs(sentence) {
//   let count = 0;
//   sentence = sentence.toLowerCase();
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === "d") count++;
//   }
//   return count;
// }

// console.log(countDs("My friend Dylan got distracted in school.")); // 4
// console.log(countDs("Debris was scattered all over the yard.")); // 3
// console.log(countDs("The rodents hibernated in their den.")); // 3

// 41 => Modifying the Last Character
// Create a function which makes the last character of a string repeat n number of times.

// function modifyLast(str, n) {
//   return str.padEnd(str.length + n - 1, str[str.length - 1]);
// }

// console.log(modifyLast("Hello", 3)); // "Hellooo"
// console.log(modifyLast("hey", 6)); // "heyyyyyy"
// console.log(modifyLast("excuse me what?", 5)); // "excuse me what?????"

// 42 => Lowercase, Uppercase or Mixed?
// Create a function which returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.

function getCase(str) {
  let lower = 0;
  let upper = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i].charCodeAt(0) <= 97) {
      lower++;
    } else {
      upper++;
    }
  }
  if (lower > 0 && upper > 0) {
    return "mixed";
  } else if (lower > 0) {
    return "lower";
  } else {
    return "upper";
  }
}

console.log(getCase("whisper...")); // "lower"
console.log(getCase("SHOUT!")); // "upper"
console.log(getCase("Indoor Voice")); // "mixed"
