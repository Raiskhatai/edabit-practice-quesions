
// 1=> Array of Word Lengths
// Create a function that takes an array of words and transforms it into an array of each word's length.


// function wordLengths(arr){
//     let returnarr=[];
//     j=0;
//     arr.forEach((key) => {
//         returnarr[j]=key.length;                                 //done
//         j++;
//     });

//     return returnarr;
// }

// function wordLengths(arr)
// {
//     let returnarr=[];
//     j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr[j]=arr[i].length;                          //done
//         j++;
//     }
//     return returnarr;
// }


// function wordLengths(arr)
// {
//     let returnarr=[];
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr.push(arr[i].length);                   //done
//     }
//     return returnarr;
// }


// function wordLengths(arr)
// {
//     let returnarr=[];
//     j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         let elm_length=arr.slice(i,i+1);                    //samjh nhi aaya thoda
//         returnarr[j]=elm_length;
//         j++;
//         console.log(returnarr[i].length);
//     }

// }

// console.log(wordLengths(["hello", "world"]) )    //  [5, 5]
// console.log(wordLengths(["Halloween", "Thanksgiving", "Christmas"]) )                   //  [9, 12, 9]
// console.log(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) )                   //  [3, 5, 9, 4, 2, 3, 8]

// 2=> First Class, Second Class and Third Class Levers
// Levers are simple machines with a rigid beam and a fulcrum. From the picture below, you can see that there are 3-types of levers: first class, second class and third class.

// In a first class lever, the fulcrum is situated in the middle with the effort and the load being positioned opposite of each other.
// In a second class lever, the fulcrum is situated in the right with the effort on the left and the load in the middle.
// In a third class lever, the fulcrum is situated in the left with the effort being in the middle and the load being on the right.


// Given an array that contains the fulcrum "f", the effort "e", and the load "l", write a function that determines whether or not the array shows a first class lever, second class lever, or a third class lever.


// function determineLever(arr)
// {
    
//     switch(arr[1])
//     {
//         case "f": return "first class lever"
//         case "l": return "second class lever"                    //done
//         case "e": return "third class lever"
//     }
// }

// function determineLever(arr)
// {
//         let returnarr;
//         returnarr=arr[1];
//         if(returnarr==="f")
//         {
//             return "first class lever";
//         }

//         else if(returnarr==="l")                                     //done
//         {
//             return "second class lever";
//         }

//         else
//         {
//             return "third class lever";
//         }
// }


// function determineLever(arr)
// {
//     let first_index=0;
//     let last_index=arr.length-1;

//     if(arr[first_index]==="e" && arr[last_index]==="l")
//     {
//         return  "first class lever";
//     }

//     else if(arr[first_index]==="e" && arr[last_index]==="f")                 //done
//     {
//         return "second class lever";
//     }

//     else if(arr[first_index]==="f" && arr[last_index]==="l")
//     {
//         return "third class lever";
//     }
// }


// console.log(determineLever(["e", "f", "l"]) )//  "first class lever"
// console.log(determineLever(["e", "l", "f"]) )//  "second class lever"
// console.log(determineLever(["f", "e", "l"]) )//  "third class lever"





// 3=> Difference of Volumes of Cuboids
// Create a program that will take two arrays of integers, a and b. Each array will consist of 3 positive integers, representing the dimensions of cuboids a and b. Find the difference of the cuboids' volumes.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.


// function findDifference(a,b){

    // let num1=1;
    // let num2=1;
    // a.forEach((elm) => {
    //     num1*=elm;
    // });

    //  b.forEach((elm) => {
    //     num2*=elm;
    // });

    // let final=(num1-num2)                                        //done

    // if(final<0)
    // {
    //     final=-1*final;
    //     return final;
    // }
    // else
    // {
    //     return final;
    // }

// }



// console.log(findDifference([ 28, 16, 29 ], [ 7, 8, 17 ]))                               //   12040
// console.log(findDifference([ 9, 22, 18 ], [ 16, 24, 10 ]))                              //   276
// console.log(findDifference([ 1, 9, 25 ], [ 10, 7, 9 ]))                             //   405
// console.log(findDifference([ 7, 6, 16 ], [ 26, 9, 26 ]))                                //   5412





// Even or Odd?
// Given an array of integers, determine whether the sum of its elements is even or odd.

// The return value should be a string ("odd" or "even").

// If the input array is empty, consider it as an array with a zero ([0]).



// function evenOrOdd(arr)
// {
//         let sum=0;
//         arr.forEach((elm) => {
//             sum+=elm;
//         });

//         if(sum==0)
//         {
//             return "even";
//         }
//         else if(sum==1)                                  //nhi hua the
//         {
//             return "odd";
//         }

//         else if(sum%2==0)
//         {
//             return "even"
//         }
//         else if(sum%2==1)
//         {
//             return "odd"
//         }
// }

// function evenOrOdd(arr)
// {
//     let sum=0;
//     if(arr==[] || arr==0 )
//     {
//         return "even";
//     }
//     else if(arr==1)
//     {
//         return "odd";
//     }
//     else
//     {
//         for(i=0;i<arr.length;i++)                        //done
//         {
//             sum+=arr[i];
//         }
//         if(sum%2==0)
//         {
//             return "even";
//         }
//         else
//         {
//             "odd";
//         }
//     }
// }



// console.log(evenOrOdd([0]))                       //  "even"
// console.log(evenOrOdd([1]))                        //  "odd"
// console.log(evenOrOdd([]))                        //  "even"
// console.log(evenOrOdd([0, 1, 5]))                         //  "even"