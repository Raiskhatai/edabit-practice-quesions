// 94 => Burglary Series (02): Most Valuable Item
// You call your spouse to inform his/her most precious item is gone! Given an object of stolen items, return the most expensive item on the list.

function mostExpensiveItem(obj) {
  let max = -Infinity;
  let val = "";
  for (key in obj) {
    if (obj[key] > max) {
      max = obj[key];
      val = key;
    }
  }
  return val;
}

console.log(
  mostExpensiveItem({
    piano: 2000,
  })
); // "piano"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
  })
); // "tv"

console.log(
  mostExpensiveItem({
    tv: 30,
    skate: 20,
    stereo: 50,
  })
); // "stereo"
