// 89 => Longest Word
// Write a function that finds the longest word in a sentence and returns it. If two or more words are the biggest, return the word closest to the start of the sentence. Characters such as apostrophe, commas, periods, etc count as letters (e.g. O'Connor is 8 characters long).

// function longestWord(sentence) {
//   let arr = sentence.split(" ");
//   let longest_value = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > longest_value.length) {
//       longest_value = arr[i];
//     }
//   }
//   return longest_value;
// }

// console.log(longestWord("Hello darkness my old friend")); // "darkness"
// console.log(longestWord("Hello there mate")); // "Hello"
// console.log(longestWord("Kayla's toy is plastic")); // "Kayla's"
