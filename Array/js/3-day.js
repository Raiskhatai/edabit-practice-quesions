// 1=> ES6: Destructuring Arrays I
// You can assign variables from arrays like this:

// const arr = [1, 2, 3, 4, 5, 6]
// let a = arr[0]                                // quetion samjh nhi aaya
// let b = arr[1]

// console.log(a) // outputs 1
// console.log(b) // outputs 2

// 2=> Return the Last Element in an Array
// Create a function that accepts an array and returns the last item in the array.

// function getLastItem(arr)
// {
//     let returnarr=[];                                                                //done
//     returnarr=arr[arr.length-1]
//     return returnarr ;
// }

// function getLastItem(arr)
// {
//     let returnarr=[];
//     let lastindex;

//     lastindex=arr.length-1;
//     let lastvalue=arr[lastindex]                                                      //done

//     // returnarr.push(lastvalue);
//     return returnarr
// }

// function getLastItem(arr)
// {
//     let lastindex=arr.length-1;
//     let returnarr=[];
//     // returnarr=(arr.slice(lastindex,3))                                       //done
//     returnarr=(arr.splice(lastindex,3))                                         //done

//     return returnarr;
// }

// console.log(getLastItem([1, 2, 3]))              //  3
// console.log(getLastItem(["cat", "dog", "duck"])       )          // "duck"
// console.log(getLastItem([true, false, true])    )            // true

// 3=> Convert an Array to a String
// Create a function that takes an array of numbers or letters and returns a string.

// function arrayToString(arr) {
//   let returnarr = [];
//   // returnarr=arr.join("")                                 //done
//   return returnarr;
// }

function arrayToString(arr) {
  let returnarr = "";
  for (i = 0; i < arr.length; i++) {
    // console.log(key)
    // returnarr += arr[i]; //done
    return arr.length.toString();
  }
  //   return returnarr;
}

console.log(arrayToString([1, 2, 3, 4, 5, 6])); //  "123456"
console.log(arrayToString(["a", "b", "c", "d", "e", "f"])); //  "abcdef"
console.log(arrayToString([1, 2, 3, "a", "s", "dAAAA"])); //  "123asdAAAA

// 4=> Find the Index
// Create a function that takes an array and a string as arguments and returns the index of the string.

// function findIndex(arr,str)
// {
//     let  returnarr;
//     for(i=0;i<=arr.length-1;i++)
//     {
//         if(arr[i]===str)                                         //done
//             break;
//     }

//     returnarr=i;
//     return returnarr;
// }

// function findIndex(arr,str)
// {
//     let  returnarr;
//     for(i=0;i<=arr.length-1;i++)
//     {

//         // returnarr=arr.slice(i,i+1)                                       //done
//         returnarr=arr.splice(i,i+1)                                         //adhura thoda
//         // console.log(returnarr)
//        if(returnarr==str)
//         return returnarr
//     }
// }

// console.log(findIndex(["hi", "edabit", "fgh", "abc"], "fgh")  )                  // 2
// console.log(findIndex(["Red", "blue", "Blue", "Green"], "blue"))                  // 1
// console.log(findIndex(["a", "g", "y", "d"], "d")  )                  // 3
// console.log(findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") )                  // 0

// 5=>  Buggy Code (Part 3)
// Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.

// function sumArray(arr)
// {
//     let sum=0;
//     for(i=0;i<=arr.length-1;i++)                                                 //done
//     {
//         sum+=arr[i];
//     }
//     return sum
// }

// function sumArray(arr)
// {
//     let sum=0;
//     for(let key of arr)                                                  //done
//     {
//         sum+=key;
//     }
//     return sum
// }

// function sumArray(arr)
// {
//     let sum=0;
//     for(i=0;i<=arr.length-1;i++)
//     {
//         let num=[];
//         num.push(arr[i])                                                            //done
//         sum=sum+Number(num);
//     }
//     return sum
// }

// console.log(sumArray([1, 2, 3, 4, 5]))                   // 15
// console.log(sumArray([-1, 0, 1])     )                // 0
// console.log(sumArray([0, 4, 8, 12])  )                   // 24

// 6=>  Find the Index (Part #2)
// Create a function that searches for the index of a given item in an array. If the item is present, it should return the index, otherwise, it should return -1.

// function search(arr,svalue)
// {
//     for(i=0;i<=arr.length-1;i++)
//     {
//         if(arr[i]===svalue)
//         {
//             return i;                                                   //done
//         }
//         else if(i==arr.length-1)
//         {
//             return -1;
//         }

//     }
// }

// console.log(search([1, 2, 3, 4], 3)); //  2
// console.log(search([2, 4, 6, 8, 10], 8)); //  3
// console.log(search([1, 3, 5, 7, 9], 11)); //  -1
