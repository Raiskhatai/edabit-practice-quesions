// 63 => Burglary Series (13): Sort That List
// The insurance guy tells you he needs an updated list of the stolen goods, and surely only to annoy you, he adds, "in reverse alphabetical order".

// Given an object with the stolen items, return a new object with the list in reverse alphabetical order.

function sortList(obj) {
  let val = Object.entries(obj).sort().reverse();
  const retval = Object.fromEntries(val);
  return retval;
}

const random = Math.random();
const obj = {
  c: 100,
  a: 50,
  b: 10,
  d: 50,
};

const obj2 = { ab: 10, ac: 10, ad: 10 };
const obj3 = { piano: random, stereo: 10, suitcase: 1 };

console.log(sortList(obj)); // { d: 50, c: 100, b: 10, a: 50 }
console.log(sortList(obj2)); // { ad: 10, ac: 10, ab: 10 }
console.log(sortList(obj3)); // { suitcase: 1, stereo: 10, piano:  }
