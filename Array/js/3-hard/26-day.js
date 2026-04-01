// 56 => Modify Words
// Create a function that takes an array of any length. Modify each element (capitalize, reverse, hyphenate).

// function editWords([...arr]) {
//   getModifyArr = () => {
//     const val = arr.map((item) => {
//       const hyphIndex =
//         item.length % 2 == 1
//           ? Math.round(item.length / 2 - 1)
//           : Math.round(item.length / 2);
//       let strarr = [...item];
//       strarr.splice(hyphIndex, 0, "-");
//       const revstr = strarr;
//       return revstr.reverse().join("").toUpperCase();
//     });
//     return val;
//   };
//   return getModifyArr();
// }

// console.log(editWords(["new york city"])); // ["YTIC KR-OY WEN"]
// console.log(editWords(["null", "undefined"])); // ["LL-UN", "DENIF-EDNU"]
// console.log(editWords(["hello", "", "world"])); // ["OLL-EH", "-", "DLR-OW"]
// console.log(editWords([""])); // ["-"]

// 57 => In N Days...
// If today was Monday, in two days, it would be Wednesday.

// Create a function that takes in an array of days as input and the number of days to increment by. Return an array of days after n number of days has passed.

function afterNDays(arr, num) {
  //   [
  //     { sunday: 1 },
  //     { monday: 2 },
  //     { tuesday: 3 },
  //     { wednesday: 4 },
  //     { thursday: 5 },
  //     { friday: 6 },
  //     { saturday: 7 },
  //   ];
  const weak = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const retVal = arr.map((item) => {
    const ind = weak.indexOf(item);
    return ind + num < 7 ? weak[ind + num] : weak[ind+num>7];
  });
  console.log(retVal);
}

console.log(afterNDays(["Thursday", "Monday"], 4)); // ["Monday", "Friday"]
console.log(afterNDays(["Sunday", "Sunday", "Sunday"], 1)); // ["Monday", "Monday", "Monday"]
console.log(afterNDays(["Monday", "Tuesday", "Friday"], 1)); // ["Tuesday", "Wednesday", "Saturday"]
