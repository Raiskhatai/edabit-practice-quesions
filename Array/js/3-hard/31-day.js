// 63 => Burglary Series (13): Sort That List
// The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

// Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

// function sortList(obj) {
//   let val = Object.entries(obj).sort().reverse();
//   const retval = Object.fromEntries(val);
//   return retval;
// }

// const random = Math.random();
// const obj = {
//   c: 100,
//   a: 50,
//   b: 10,
//   d: 50,
// };

// const obj2 = { ab: 10, ac: 10, ad: 10 };
// const obj3 = { piano: random, stereo: 10, suitcase: 1 };

// console.log(sortList(obj)); // { d: 50, c: 100, b: 10, a: 50 }
// console.log(sortList(obj2)); // { ad: 10, ac: 10, ab: 10 }
// console.log(sortList(obj3)); // { suitcase: 1, stereo: 10, piano:  }

// 64 => Burglary Series (17): Who is the Winner?
// The fight between you and your spouse is over. Based on your perception of how the fight went, determine who won.

// Given an object with three rounds, with nested objects as your points per round, determine the winner by counting who won the most rounds. The winner of the round is whoever scored the most points in that round. Draws are possible, both in rounds as in the final result.

// If you won more rounds than your spouse, return "ME!"
// If your spouse won more rounds, return "SPOUSE!"
// If you are tied, return "NOBODY!"

function determineWinnerOfFight(obj) {
  const arrobj = Object.entries(obj);
  let me = 0;
  let spouse = 0;
  arrobj.forEach((item) => {
    console.log(item[1].me, item[1].spouse);
    if (item[1].me == item[1].spouse) {
      me++;
      spouse++;
    } else if (item[1].me < item[1].spouse) {
      spouse++;
    } else {
      me++;
    }
  });
  return me === spouse ? "NOBODY!" : spouse < me ? "ME!" : "SPOUSE!";
}

console.log(
  determineWinnerOfFight({
    round1: {
      me: 10,
      spouse: 5,
    },
    round2: {
      me: 5,
      spouse: 20,
    },
    round3: {
      me: 10,
      spouse: 10,
    },
  }),
); // "NOBODY!"

console.log(
  determineWinnerOfFight({
    round1: {
      me: 40,
      spouse: 5,
    },
    round2: {
      me: 9,
      spouse: 10,
    },
    round3: {
      me: 9,
      spouse: 10,
    },
  }),
); // "SPOUSE!"
