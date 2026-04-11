// 62 => Burglary Series (05): Third Most Expensive
// Time to call your lover to inform what he/she lost in the burglary.

// Given an object of the stolen objects, return the 3rd most expensive item on the list. If that is not possible, because there are not enough items, return false.

function thirdMostExpensive(obj) {
  const objValArr = Object.values(obj);
  const objarr = Object.entries(obj);
  if (objValArr.length <= 2) {
    return false;
  } else if (objValArr.length === 3) {
    objValArr.sort((a, b) => a - b);
    let retval = [];

    for (let i = 0; i < objarr.length; i++) {
      retval = objarr.find((item) => item[1] === objValArr[0]);
      return retval[0];
    }
    // return retval;
  } else {
    max = -Infinity;
    maxval = "";
    objValArr.sort((a, b) => a - b);
    let retval = [];
    for (let i = 0; i < objarr.length; i++) {
      // retval = objarr.find((item) => item[1] === objValArr[2]);
      objValArr[i];
      // console.log(objarr.find((item) => item[1] === objValArr[2]));
      break;
    }
    return retval[0];
  }
}

console.log(
  thirdMostExpensive({
    computer: 1000,
    piano: 500,
    stereo: 200,
    tv: 10,
    timmy: 1,
  }),
); // "stereo"
console.log(thirdMostExpensive({})); // false
console.log(thirdMostExpensive({ piano: 100, tv: 200 })); // false
console.log(thirdMostExpensive({ piano: 400, tv: 300, stereo: 200 })); // "stereo"
console.log(
  thirdMostExpensive({ piano: 1000, tv: 500, ball: 10, mirror: 200 }),
); // "mirror"
