// 1 = >Negate the Array of Numbers
// Given an array of numbers, negate all elements contained within.

// Negating a positive value -+n will return -n, because all +'s are removed.
// Negating a negative value --n will return n, because the first - turns the second minus into a +.

// function negate(arr)
// {
//     let newarr=[];
//     for(let i=0;i<arr.length;i++)                        //done
//     {
//         newarr[i]=-1*arr[i]
//     }
//     return newarr;
// }

// function negate(arr)
// {
//     let newarr=arr.map(function(item){                           //done
//         return item*-1;
//     })
//     return newarr;
// }

// console.log(negate([1, 2, 3, 4]))                   //  [-1, -2, -3, -4]
// console.log(negate([-1, 2, -3, 4]))                 //  [1, -2, 3, -4]
// console.log(negate([]))                 //  []

// 2 =>  Return the Four Letter Strings
// Create a function that takes an array of strings and returns the words that are exactly four letters.

// function isFourLetters(arr) {
//   let newarr = [];
//   j = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i].length == 4) {
//       newarr[j] = arr[i];                                    //done
//       j++;
//     }
//   }

//   return newarr;
// }


// function isFourLetters(arr)
// {
//     let newarr=arr.filter((item) => item.length===4)             //done
//     return newarr;
// }



// console.log(isFourLetters(["Tomato", "Potato", "Pair"])); // ["Pair"]
// console.log(isFourLetters(["Kangaroo", "Bear", "Fox"])); // ["Bear"]
// console.log(isFourLetters(["Ryan", "Kieran", "Jason", "Matt"])); // ["Ryan", "Matt"]




// 3 => Maximum Difference
// Given an array of integers, return the difference between the largest and smallest integers in the array.


// function difference(arr)
// {
//     let value=-Infinity;
//     let svalue=Infinity;
//         for(let i=0;i<arr.length;i++)
//         {
//             if(arr[i]>value)
//             {
//                 value=arr[i];
//             }
//         }
//          for(let i=0;i<arr.length;i++)                               //done
//         {
//             if(arr[i]<svalue)
//             {
//                 svalue=arr[i];
//             }
//         }

//         let returnvalue=value-svalue;
//         return returnvalue;
// }


// function difference(arr)
// {
//     arr.sort((a,b) => a-b);
//     let bvalue=arr[arr.length-1];                            //DONE
//     let svalue=arr[0];
//     returnarr=bvalue-svalue;
//     return returnarr;
// }


// console.log(difference([10, 15, 20, 2, 10, 6]))                  // 18
// // 20 - 2 = 18

// console.log(difference([-3, 4, -9, -1, -2, 15]))                    //  24
// // 15 - (-9) = 24

// console.log(difference([4, 17, 12, 2, 10, 2]))                  //  15



// 4=> Eliminate Odd Numbers within an Array
// Create a function that takes an array of numbers and returns only the even values.


// function noOdds(arr)
// {
//     let newarr=[];
//     let j=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]%2==0)
//         {
//             newarr[j]=arr[i];                                        //done
//             j++;
//         }
//     }
//     return newarr;
// }


// function noOdds(arr)
// {
//     let newarr=arr.filter((item) => item%2==0)                       //done
//     return newarr;
// }


// console.log(noOdds([1, 2, 3, 4, 5, 6, 7, 8]))               //  [2, 4, 6, 8]
// console.log(noOdds([43, 65, 23, 89, 53, 9, 6]))             //  [6]
// console.log(noOdds([718, 991, 449, 644, 380, 440]))             //  [718, 644, 380, 440]



// 5 => Multiply by Length
// Create a function to multiply all of the values in an array by the amount of values in the given array.


// function multiplyByLength(arr)
// {
//     let arr_length=arr.length;
//     let newarr=[];
//     for(let i=0;i<arr_length;i++)                                //done
//     {
//         newarr[i]=arr[i]*arr_length;
//     }
//     return newarr;
// }


// function multiplyByLength(arr)
// {
//     let newarr=arr.map((item,i,arr) => item*arr.length)                      //done
//     return newarr;
// }


// console.log(multiplyByLength([2, 3, 1, 0]))                  //  [8, 12, 4, 0]
// console.log(multiplyByLength([4, 1, 1])   )                  //  ([12, 3, 3])
// console.log(multiplyByLength([1, 0, 3, 3, 7, 2, 1])   )                  //   [7, 0, 21, 21, 49, 14, 7]

// console.log(multiplyByLength([0]) )                  //  ([0])