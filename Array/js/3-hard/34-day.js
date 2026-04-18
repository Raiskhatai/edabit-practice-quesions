// 68 => Number of Times a Character Appears
// Create a function that returns the number of times a character appears in each word in a sentence. Treat upper and lower case characters of the same letter as being identical (e.g. a exists in Anna twice, not once).

function charAppears(sentence, char) {
  sentence = sentence.toLowerCase();
  char = char.toLowerCase();
  let str = sentence.split(" ");
  let retArr = [];
  str.forEach((element) => {
    element = element.split("");
    let count = 0;
    element.forEach((item) => {
      if (char === item) {
        count++;
      }
    });
    if (count > 0) {
      retArr.push(count);
    } else {
      retArr.push(0);
    }
  });
  return retArr;
}

console.log(charAppears("She sells sea shells by the seashore.", "s"));
// [1, 2, 1, 2, 0, 0, 2]
// "s" shows up once in "She", twice in "sells", once in "sea", twice in "shells", etc.
console.log(charAppears("Peter Piper picked a peck of pickled peppers.", "P"));
// [1, 2, 1, 0, 1, 0, 1, 3]
// "p" shows up once in "Peter", ... 3 times in "peppers".
console.log(
  charAppears("She hiked in the morning, then swam in the river.", "t"),
);
// [0, 0, 0, 1, 0, 1, 0, 0, 1, 0]
