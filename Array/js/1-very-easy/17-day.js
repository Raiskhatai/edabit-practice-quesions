// 1=>  Unlucky 13
// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

// function unlucky13(arr)
// {
//     let lucky=arr.filter(function(item){
//         return item%13!=0;
//     })                                               //done

//    return lucky
// }

// function unlucky13(arr)
// {
//     let lucky=[];
//     let j=0;
//         for(i=0;i<arr.length;i++)
//         {
//             if(arr[i]%13!==0)
//             {
//                 lucky[j]=arr[i];             //done
//                 j++;
//             }
//         }
//         return lucky;
// }

// console.log(unlucky13([53, 182, 435, 591, 637]))            //  [53, 435, 591]// 182 and 637 are divisible by 13.

// console.log(unlucky13([24, 316, 393, 458, 1279]))           //  [24, 316, 393, 458, 1279]// No numbers in the array are divisible by 13.

// console.log(unlucky13([104, 351, 455, 806, 871]))           //  []// All numbers in the array are divisible by 13.

// 2 =>  Fix the Error: Filtering out Empty Arrays
// I am trying to filter out empty arrays from an array. In other words, I want to transform something that looks like this: ["a", "b", [], [], [1, 2, 3]] to look like ["a", "b", [1, 2, 3]]. My code looks like this:

// function removeEmptyArrays(arr) {
//   return arr.filter(x => x !== [])
// }
// However, somehow, the empty arrays still exist. Fix this incorrect code to remove the empty arrays.

// function removeEmptyArrays(arr) {
//   let det;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length == 0) {
//       det = arr.splice(i, 1);                    //done
//     }
//   }
//   return arr;
// }

// function removeEmptyArrays(arr)
// {
//     let returnarr=arr.filter(item => item!=0)        //done
//     return returnarr;
// }

// // What I want:
// console.log(removeEmptyArrays(["a", "b", []])); //  ["a", "b"]
// console.log(removeEmptyArrays([1, 2, [], 4])); //  [1, 2, 4]

// What I am getting:
// console.log(removeEmptyArrays(["a", "b", []]))          //  ["a", "b", []]
// console.log(removeEmptyArrays([1, 2, [], 4]))           //  [1, 2, [], 4]

// 3 => String Pairs
// Create a function that takes a string str and returns an array of two-paired characters. If the string has an odd number of characters, add an asterisk * in the final pair.

// See the below examples for a better understanding:

// function stringPairs(arr) {
//   let returnarr = [];
//   let j = 0;

//   if (arr.length % 2 == 0) {
//     arrbreak(arr);
//   } else {
//     let nakliarr = [...arr];                                 //done
//     nakliarr.push("*");
//     arrbreak(nakliarr);
//   }

//   function arrbreak(duplicate) {
//     console.log(duplicate)
//     for (i = 0; i < duplicate.length; i += 2) {
//       returnarr[j] = duplicate[i] + duplicate[i + 1];
//       j++;
//     }
//   }

//   return returnarr;
// }



// function stringPairs(arr)
// {
//     if(arr.length%2==0)
//     {
//         return arrbreak(arr);
//     }
//     else
//     {
//         let copyarr=arr;
//         copyarr.push("*");
//         // console.log(copyarr)
//         return arrbreak(copyarr);                   // is method se nhi
//     }


//     function arrbreak(arr1)
//     {
//         let breaked=[];
//         let j=0;
//         for(i=0;i<arr1.length;i+=2)
//         {
//             breaked[j]=arr1.slice(i,i+2)
//             j++;
//         }
//         return breaked;
//     }
// }




// console.log(stringPairs("mubashir")); //  ["mu", "ba", "sh", "ir"]
// console.log(stringPairs("edabit")); //  ["ed", "ab", "it"]
// console.log(stringPairs("airforces")); //  ["ai", "rf", "or", "ce", s*"]








// 4=> Product Divisible by Sum?
// Write a function that returns true if the product of an array is divisible by the sum of that same array. Otherwise, return false.


// function divisible(arr)
// {
//     let sum=0;
//     let multiply=1;

//     for(let i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }

//     for(let i=0;i<arr.length;i++)
//     {
//         multiply*=arr[i];
//     }

//     if(multiply%sum==0)
//     {
//         return true;
//     }
//     else
//     {
//        return false;
//     }
// }


// function divisible(arr)
// {
//         let multiply=arr.reduce((acc,value)=> acc*value,1)   

//         let sum=arr.reduce((acc,value) => acc + value,0)

//         if(multiply%sum==0)
//         {
//             return true ;
//         }
//         else
//         {
//             return false;
//         }
// }


// console.log(divisible([3, 2, 4, 2]))                //  false
// console.log(divisible([4, 2, 6]))               //  true
// // 4 * 2 * 6 / (4 + 2 + 6)

// console.log(divisible([3, 5, 1]))               //  false




// 5=> Where is Bob!?!
// Write a function that searches an array of names (unsorted) for the name "Bob" and returns the location in the array. If Bob is not in the array, return -1.


// function findBob(arr)
// {
//     let index=arr.indexOf("Bob");            //done
//     return index;
// }   

// function findBob(arr)
// {
//     let value=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]=="Bob")
//         {
//             value=i;
//             break;
//         }
//         else
//         {
//             value=-1; 
//         }
//     }

//     return value;
// }



// console.log(findBob(["Jimmy", "Layla", "Bob"]))     //  2
// console.log(findBob(["Bob", "Layla", "Kaitlyn", "Patricia"]))       //  0
// console.log(findBob(["Jimmy", "Layla", "James"]))       //  -1