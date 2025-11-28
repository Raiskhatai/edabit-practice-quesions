// 1 => Return the First Element in an Array
// Create a function that takes an array containing only numbers and return the first element.

// function getFirstValue(arr){
//     let result = arr[0];
//     return result;
// }

// function getFirstValue(arr){
//     // let result=arr.shift();
//     // let result=arr.slice(0,1);
//     let result=arr.splice(0,1);
//     return result;
// }

// console.log(getFirstValue([1, 2, 3]))    // 1
// console.log(getFirstValue([80, 5, 100]))     // 80
// console.log(getFirstValue([-500, 0, 50]))    // -500

// 2 =>Pair Management
// Given two arguments, return an array which contains these two arguments.

// function makePair() {
//     let arr=[];
//     for(let i=0;i<arguments.length;i++)
//     {
//         arr[i]=arguments[i];
//     }
//     return arr;
// }

// function makePair(arg1,arg2)
// {
//     arr=[];
//     arr[0]=arg1;
//     arr[1]=arg2;
//     return arr;
// }

// function makePair(){
//     let arr=[];
//     for(let i=0;i<arguments.length;i++)
//         {
//             // arr.push(arguments[i]);
//             // arr.unshift(arguments[i]);
//         }
//         return arr;
// }

// console.log(makePair(1, 2)); /*[1, 2]*/
// console.log(makePair(51, 21)); /*[51, 21]*/
// console.log(makePair(512124, 215)); /* [512124, 215]*/

// ************* 3 => Learn Lodash: _.drop, Drop the First Elements of an Array
// According to the lodash documentation, _.drop creates a slice of an array with n elements dropped from the beginning.

// Your challenge is to write your own version using vanilla JavaScript.

// function drop(arr,n)
// {
//     arr.splice(0,n)
//     return arr;
// }

// function drop(arr,n)
// {
//     let newarr=[];
//     let returnarr=[];
//     for(i=0;i<n;i++)
//     {
//         newarr[i]=arr[i];
//         returnarr=arr-newarr;
//     }
//     return returnarr;
// }

// console.log(drop([1, 2, 3], 1))         //  [2, 3]
// console.log(drop([1, 2, 3], 2))            //  [3]
// console.log(drop([1, 2, 3], 5))             //  []
// console.log(drop([1, 2, 3], 0))      //  [1, 2, 3]

// 4=> Upvotes vs Downvotes
// Given an object containing counts of both upvotes and downvotes, return what vote count should be displayed. This is calculated by subtracting the number of downvotes from upvotes.

// function getVoteCount(obj)
// {
// //    let final= obj.upvotes-obj.downvotes;
//     // let final=obj["upvotes"]-obj["downvotes"]

//     return final;
// }

// console.log(getVoteCount({ upvotes: 13, downvotes: 0 }))  // 13
// console.log(getVoteCount({ upvotes: 2, downvotes: 33 }))  // -31
// console.log(getVoteCount({ upvotes: 132, downvotes: 132 }))  // 0

// // 5 => Reverse an Array
// // Write a function to reverse an array.

// function reverse(arr)
// {
//    let returnarr=[];
//     for(let i=arr.length-1;i>=0;i--)
//     {
//        returnarr.push(arr[i])
//     }
//     return returnarr
// }

// function reverse(arr)
// {
//    let returnarr=[];
//     for(let i=0;i<=arr.length-1;i++)
//     {
//     returnarr.unshift(arr[i])

//     }
//     return returnarr
// }

// function reverse(arr) {
//   let j = arr.length - 1;
//   let returnarr = [];
//   for (i = 0; i < j; i++) {
//     let temp;
//     temp = arr[i]; //done
//     arr[i] = arr[j];
//     arr[j] = temp;
//     j--;
//   }

//   return arr;
// }

// console.log(reverse([1, 2, 3, 4])); //  [4, 3, 2, 1]
// console.log(reverse([9, 9, 2, 3, 4])); //  [4, 3, 2, 9, 9]
// console.log(reverse([])); //  []
