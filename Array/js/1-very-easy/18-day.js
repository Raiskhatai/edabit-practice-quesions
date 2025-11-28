// 1=> Find the Largest Number in an Array
// Create a function that takes an array of numbers. Return the largest number in the array.

// function findLargestNum(arr)
// {

// let largest=arr.sort((a,b)=>a-b);                        // done
// return largest[arr.length-1]
// }

// function findLargestNum(arr)
// {
//     let biggest=-Infinity;
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]>biggest)                       //done
//         {
//             biggest=arr[i]
//         }
//     }
//     return biggest;
// }

// console.log(findLargestNum([4, 5, 1, 3]))           //  5
// console.log(findLargestNum([300, 200, 600, 150]))           //  600
// console.log(findLargestNum([1000, 1001, 857, 1]))           //  1001

// 2=> Typing Game
// You're in the midst of creating a typing game.

// Create a function that takes in two arrays: the array of user-typed words, and the array of correctly-typed words and outputs an array containing 1s (correctly-typed words) and -1s (incorrectly-typed words).

// Inputs:
// User-typed Array: ["cat", "blue", "skt", "umbrells", "paddy"]
// Correct Array: ["cat", "blue", "sky", "umbrella", "paddy"]

// Output: [1, 1, -1, -1, 1]

// function correctStream(arr1, arr2) {
//   let correct = [];
//   for (i = 0; i < arr1.length; i++) {
//     if(arr1[i]==arr2[i])
//     {
//     correct[i]=1;
//     }
//     else
//     {
//         correct[i]=-1;                       //done
//     }
//   }
//   return correct;
// }

// function correctStream(arr1,arr2)
// {
//     let correct=arr1.map(function(item,index){
//         if(item===arr2[index])
//         {
//             return 1;
//         }
//         else
//         {
//             return -1;                                           //done
//         }
//     })

//     return correct;
// }

// console.log(correctStream(["it", "is", "find"], ["it", "is", "fine"]));
// //  [1, 1, -1]

// console.log(
//   correctStream(
//     ["april", "showrs", "bring", "may", "flowers"],
//     ["april", "showers", "bring", "may", "flowers"]
//   )
// );
//  [1, -1, 1, 1, 1]

// 3 => Next Element in Arithmetic Sequence
// Create a function that returns the next element in an arithmetic sequence. In an arithmetic sequence, each element is formed by adding the same constant to the previous element.

// function nextElement(arr)
// {
//     let gap;
//     let last_index=arr.length-1;
//     let lastvalue=arr[last_index];
//     gap=lastvalue-arr[last_index-1];                     //done

//     let return_value=lastvalue+gap;
//     return return_value;
// }

// function nextElement(arr)
// {
//     let gap=arr[arr.length-1]-(arr[(arr.length-1)-1]);
//     let value=(arr[arr.length-1]+gap);
//     return value;
// }

// console.log(nextElement([3, 5, 7, 9]))                   //  11
// console.log(nextElement([-5, -6, -7]))                   //  -8
// console.log(nextElement([2, 2, 2, 2, 2]) )                   //  2

// 4 => Word Endings
// Create a function that adds a string ending to each member in an array.

// function addEnding(arr,value)
// {
//     let ending=arr.map((item,idx) =>  item+value);              //done
//     return ending
// }


// function addEnding(arr,value)
// {
//     let newarr=[];
//     for(i=0;i<arr.length;i++)
//     {
//         newarr[i]=arr[i]+value;                                  //done
//     }

//     return newarr;
// }


// console.log(addEnding(["clever", "meek", "hurried", "nice"], "ly"));
// //  ["cleverly", "meekly", "hurriedly", "nicely"]

// console.log(addEnding(["new", "pander", "scoop"], "er"));
// //  ["newer", "panderer", "scooper"]

// console.log(addEnding(["bend", "sharpen", "mean"], "ing"));
// //  ["bending", "sharpening", "meaning"]



// 5=>  Array of Consecutive Numbers
// Implement a function that returns an array containing all the consecutive numbers in ascendant order from the given value low up to the given value high (bounds included).

// function getSequence(a,b)
// {
//     let arr=[];
//     j=0;
//     for(let i=a;i<=b;i++)                                            // done
//     {
//         arr[j]=i;
//         j++
//     }
//     return arr;
// }



// console.log(getSequence(1, 5))                      //  [1, 2, 3, 4, 5]
// console.log(getSequence(98, 100))                       //  [98, 99, 100]
// console.log(getSequence(1000, 1000))                        //  [1000]