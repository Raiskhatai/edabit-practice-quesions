// 1=> Largest Numbers
// Create a function that takes two arguments of an array of numbers arr and a constant number n and returns the n largest numbers from the given array.

// function largestNumbers(n, arr) {
//   let sortedarr = arr.sort((a, b) => b - a);
//   let lastindex = arr.length - 1;
//   let j = 0;
//   let returnarr = [];

//   if (n === 0) {
//     return [];
//   } else {
//     for (i = n - 1; i >= 0; i--) {
//       returnarr[j] = sortedarr[i];                       //done
//       lastindex--;
//       j++;
//     }
//     return returnarr;
//   }
// }

// function largestNumbers(n, arr) {
//   let returnarr = [];
//   let sortedarr=arr.sort((a,b)=>a-b);
//   let lastindex=arr.length-1;

//   if (n === 0) {
//     return [];
//   } 
//   else {
//     for (let i = 0; i< n; i++)                           //done
//          {
//             returnarr.unshift(sortedarr[lastindex]);
//             lastindex--;
//          }
//          return returnarr;
//   }
// }


// console.log(largestNumbers(2, [4, 3, 2, 1])); //  [3, 4]
// console.log(largestNumbers(1, [7, 19, 4, 2])); //  [19]
// console.log(largestNumbers(3, [14, 12, 57, 11, 18, 16])); //  [16, 18, 57]
// console.log(largestNumbers(0, [1, 3, 4, 2])); //  []




// 2=> Return Last Item
// Create a function that returns the last value of the last item in an array or string.


// function lastItem(input)
// {
//     let lastindex=input.length-1;
//     if(input==[])
//     {
//         return undefined;                                    //done
//     }        
//     return input[lastindex];
// }


// console.log(lastItem([0, 4, 19, 34, 50, -9, 2]))         //  2
// console.log(lastItem("The quick brown fox jumped over the lazy dog"))        //  "g"
// console.log(lastItem([]))        //  undefined




// 3=> Less Than 100 Array Remix
// Given an array of numbers, return true if the sum of the array is less than 100; otherwise return false.


// function arrayLessThan100(arr)
// {
//         let sum=arr.reduce(function(a,c){
//             return a+c;  
//         },0)

//         if(sum<100)
//         {
//             return true;                             //done
//         }
//         else
//         {
//             return false;
//         }
// }



// function arrayLessThan100(arr)
// {
//     let sum=0;
//     for(i=0;i<arr.length;i++)
//     {
//         sum+=arr[i];
//     }
//     if(sum<100)
//     {
//         return true;                                 //done
//     }
//     else
//     {
//         return false;
//     }
// }


// console.log(arrayLessThan100([5, 57]))                          //  true
// console.log(arrayLessThan100([77, 30]))                         //  false
// console.log(arrayLessThan100([0]))                          //  true