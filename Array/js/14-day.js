// 1=> Sum of Even Pairs in Array
// Given an array with an even amount of numbers, return true if the sum of two numbers in the array is even and false if the sum of two numbers in the array is odd.

// To illustrate:

// 11, 15, 6, 8, 9, 10
// 11 + 15 = 26 = true
// 15 + 6 = 21 = false
// 6 + 8 = 14 = true
// 8+ 9 = 17 = false
// 9 + 10 = 19 = false
// Therefore, solution = [true, false, true, false, false]

// function oddSum(arr)
// {
//     let sum=[];
//     j=0;
//     for(let i=0;i<5;i++)
//     {
//         let temp;
//         temp=arr[i]+arr[i+1];
//         sum[j]=temp;
//         j++;
//     }
//     const returnarr=[];
//     for(let i=0;i<sum.length;i++)
//     {                                                                        //done
//         if(sum[i]%2==0)
//         {
//            returnarr.push(true)
//         }
//         else
//         {
//             returnarr.push(false);
//         }
//     }
//     return returnarr;
// }

// function oddSum(arr)
// {
//     let sum=[];
//     j=0;
//     for(i=0;i<5;i++)
//     {
//         sum[j]=arr[i]+arr[i+1];
//         j++;
//     }
//     // console.log(sum)
//     let returnarr=sum.map(function(elm){                         //done
//         if(elm%2==0)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     })
//     return returnarr;
// }

// console.log(oddSum([11, 15, 6, 8, 9, 10]))        //       [true, false, true, false, false]
// console.log(oddSum([12, 21, 5, 9, 65, 32]))       //       [false, true, true, true, false]
// console.log(oddSum([1, 2, 3, 4, 5, 6]))           //   [false, false, false, false, false]

// 2=> Sum of Numbers in an Array
// Create a function that takes an array of numbers nums as an argument. Square each number in the array if the number is even and square root √ the number if it is odd. Return the sum of the new array rounded to two decimal places.

// [2, 4, 9]  ➞ 23
// 2 ^ 2 + 4 ^ 2 + √9 = 4 + 16 + 3 = 23

// function arraySum(arr) {
//   let square = 0;
//   let square_root = 0;
//   let returnarr = 0;
//   arr.forEach((element) => {
//     if (element % 2 == 0) {
//       square += Math.pow(element, 2);
//     } else {
//       square_root += Math.sqrt(element);                         //done
//     }
//   });

//   returnarr = square + square_root;
//   returnarr = returnarr.toFixed(2);
//   return returnarr;
// }

// console.log(arraySum([1, 3, 3, 1, 10])); //  105.46
// console.log(arraySum([2, 3, 4, 5])); //  23.97
// console.log(arraySum([1, 31, 3, 11, 0])); //  11.62






// 3=> Move Zeroes
// Create a function that takes an array arr of numbers and moves all zeros to the end, preserving the order of the other elements.

// function moveZeros(arr)
// {
//    for(i=0;i<arr.length;i++)
//    {
//         if(arr[i]===0)
//         {
//             arr.splice(i,1)[0];
//             // value=value.join("");                     //last wala sahi nhi bas
//             // value=Number(value);
//             arr.push(0);
//         }
//    }

//    return arr;
// }



// function moveZeros(arr)
// {
   
//     arr.forEach(function(element,i){
//          if(element===0)
//         {
//             arr.splice(i,1)[0];
//             // value=value.join("");                     //last wala sahi nhi bas
//             // value=Number(value);
//             arr.push(0);
//         }

//    });
//     return arr;    
   
// }




// console.log(moveZeros([1, 0, 1, 2, 0, 1, 3]))            //[1, 1, 2, 1, 3, 0, 0]
// console.log(moveZeros([0, 1, null, 2, false, 1, 0]))           //  [1, null, 2, false, 1, 0, 0]

// console.log(moveZeros(['a', 0, 0, 'b', 'c', 'd', 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])) 

// //['a', 'b', 'c', 'd', 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]










// 4=>  Even and Last
// Given an array of integers arr, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// If the sequence is empty, you should return 0.


// function evenLast(arr)
// {
//     let sum=0;
//     let last_index=arr.length-1;
//     if(arr==0)
//     {
//         return 0;
//     }
//     else
//     {
//         for(i=0;i<arr.length;i=i+2)
//     {
//         sum+=arr[i];
//     }
//     }
//     let returnarr=sum*arr[last_index];
    
//     return returnarr;
// }


// console.log(evenLast([2, 3, 4, 5]))                                // 30
// // // numbers at even index = 2, 4
// // number at last index = 5
// // 2*5 + 4*5 = 10 + 20 = 30

// console.log(evenLast([1, 3, 3, 1, 10]))                                // 140
// console.log(evenLast([]))                              // 0






// 5=> Characters in Shapes
// Create a function to calculate how many characters in total are needed to make up the shape. You will be given an array of strings which make up a shape in the compiler (i.e. a square, a rectangle or a line).



// function countCharacters(arr)
// {
//     let str=arr.join("");
//     console.log(str.length);                             //done
// }





