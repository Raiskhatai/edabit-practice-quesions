// 65 =>Formatting Text on Edabit
// Edabit allows for markdown formatting, meaning that it's possible to format words by surrounding text with special characters. For example, to get bold text, you surround the text with double asterisks, like this **bold**.

// Here is a list of the possible formatting options in Edabit and how to apply them:

// **bold**
// _italics_
// `inline code`
// ~~strikethrough~~
// Challenge
// Given a string and a style character, return the newly formatted string. Style characters are single letters that represent the different types of formatting.

// For the purposes of this challenge, the style characters are as follows:

// "b" is for bold
// "i" is for italics
// "c" is for inline code
// "s" is for strikethrough

// function mdFormat(word, style) {
//   if (style === "b") return `**${word}**`;
//   else if (style === "i") return `_${word}_`;
//   else if (style === "c") return "`" + word + "`";
//   else if (style === "s") return `~~${word}~~`;
// }

// console.log(mdFormat("Bold", "b")); // "**Bold**"
// console.log(mdFormat("leaning text", "i")); // "_leaning text_"
// console.log(mdFormat("Edabit", "c")); // "`Edabit`"
// console.log(mdFormat("That's a strike!", "s")); // "~~That's a strike!~~"

// 66 Count the Capital Letters
// Given a string of letters, how many capital letters are there?

// function capitalLetters(str) {
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i].charCodeAt(0) >= 65 && str[i].charCodeAt(0) <= 90) count++;
//   }
//   return count;
// }

// console.log(capitalLetters("fvLzpxmgXSDrobbgMVrc")); // 6
// console.log(capitalLetters("JMZWCneOTFLWYwBWxyFw")); // 14
// console.log(capitalLetters("mqeytbbjwqemcdrdsyvq")); // 0

// 67 => Owofied a Sentence
// Create a function that takes a sentence and turns every "i" into "wi" and "e" into "we", and add "owo" at the end.

// function owofied(sentence) {
//   return sentence.replaceAll("i", "wi").replaceAll("e", "we") + " owo";
// }

// function owofied(sentence) {
//   let retStr = "";
//   for (let i = 0; i < sentence.length; i++) {
//     if (sentence[i] === "i") retStr += "wi";
//     else if (sentence[i] === "e") retStr += "we";
//     else retStr += sentence[i];
//   }
//   return retStr + " owo";
// }

// console.log(owofied("I'm gonna ride 'til I can't no more"));
// // "I'm gonna rwidwe 'twil I can't no morwe owo"

// console.log(owofied("Do you ever feel like a plastic bag"));
// // "Do you wevwer fwewel lwikwe a plastwic bag owo"

// console.log(owofied("Cause baby you're a firework"));
// // "Causwe baby you'rwe a fwirwework owo"

// 68 => Hot Pics of Danny DeVito!
// I'm trying to watch some lectures to study for my next exam but I keep getting distracted by meme compilations, vine compilations, anime, and more on my favorite video platform.

// Your job is to help me create a function that takes a string and checks to see if it contains the following words or phrases:

// "anime"
// "meme"
// "vines"
// "roasts"
// "Danny DeVito"
// If it does, return "NO!". Otherwise, return "Safe watching!".

// function preventDistractions(str) {
//   if (/"anime| meme |vines |roasts |Danny| DeVito""/.test(str)) {
//     return "NO!";
//   } else return "Safe watching!";
// }

// function preventDistractions(str) {
//   const words = ["anime", "meme", "vines", "roasts", "Danny DeVito"];
//   if (
//     words.some((item, idx) => {
//       return str.includes(item);
//     })
//   )
//     return "NO!";
//   else return "Safe watching!";
// }

// console.log(preventDistractions("vines that butter my eggroll")); // "NO!"
// console.log(preventDistractions("Hot pictures of Danny DeVito")); // "NO!"
// console.log(preventDistractions("How to ace BC Calculus in 5 Easy Steps")); // "Safe watching!"

// 69 => Get Word Count
// Create a function that takes a string and returns the word count. The string will be a sentence.

// function countWords(str) {
//   str = str.split(" ");
//   return str.length;
// }

// function countWords(str) {
//   let count = 1;
//   for (key of str) {
//     if (key === " ") count++;
//   }
//   return count;
// }

// console.log(countWords("Just an example here move along")); // 6
// console.log(countWords("This is a test")); // 4
// console.log(countWords("What an easy task, right")); // 5

// 70 Western Showdown
// Wild Roger is participating in a Western Showdown, meaning he has to draw (pull out and shoot) his gun faster than his opponent in a gun standoff.

// Given two strings,p1 and p2, return which person drew their gun the fastest. If both are drawn at the same time, return "tie".

// function showdown(p1, p2) {
//   let one = p1.indexOf("B");
//   let two = p2.indexOf("B");
//   if (one < two) return "p1";
//   else if (one > two) return "p2";
//   else return "tie";
// }

// console.log(showdown("   Bang!        ", "        Bang!   ")); //"p1"

// // p1 draws his gun sooner than p2

// console.log(showdown("               Bang! ", "             Bang!   ")); //"p2"

// console.log(showdown("     Bang!   ", "     Bang!   ")); //"tie"
