// 1 =>   Sandwich Fillings
// Given a sandwich (as an array), return an array of fillings inside the sandwich. This involves ignoring the first and last elements.

// function getFillings(arr)
// {
//     arr.splice(0,1);
//     arr.splice(arr.length-1,1);                      //done
//     return arr;
// }

// function getFillings(arr)
// {
//     let newarr=arr.slice(1,arr.length-1);            //done
//     return newarr;
// }

// function getFillings(arr)
// {
//     let newarr=[];
//     let j=0;
//     for(let i=1;i<arr.length-1;i++)                  //done
//     {
//         newarr[j]=arr[i];
//         j++;
//     }

//     return newarr;
// }

// console.log(getFillings(["bread", "ham", "cheese", "ham", "bread"]))            //  ["ham", "cheese", "ham"]

// console.log(getFillings(["bread", "sausage", "tomato", "bread"]))           //  ["sausage", "tomato"]

// console.log(getFillings(["bread", "lettuce", "bacon", "tomato", "bread"]))          //  ["lettuce", "bacon", "tomato"]

// 2=> Difference of Max and Min Numbers in Array
// Create a function that takes an array and returns the difference between the biggest and smallest numbers.

// function diffMaxMin(arr)
// {
//     arr.sort((a,b)=>a-b);
//     let min=arr[0];
//     let max=arr[arr.length-1];           //done
//     let diff=max-min;
//     return diff;
// }

// function diffMaxMin(arr)
// {
//     let max=-Infinity;
//     let min=Infinity;

//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]>max)
//         {
//             max=arr[i];
//         }
//     }

//     for(let i=0;i<arr.length;i++)                //done
//     {
//         if(arr[i]<min)
//         {
//             min=arr[i];
//         }
//     }

//     const diff=max-min;

//     return diff;
// }

// console.log(diffMaxMin([10, 4, 1, 4, -10, -50, 32, 21]))
// //  82
// // Smallest number is -50, biggest is 32.

// console.log(diffMaxMin([44, 32, 86, 19]))
// //  67
// // Smallest number is 19, biggest is 86.

// 3=> Remove Null from an Array
// Create a function to remove all null values from an array.

// function removeNull(arr) {
//   let newarr = [];
//   let j = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] != null) {
//       newarr[j] = arr[i];                        //done
//       j++;
//     }
//   }
//   return newarr;
// }

// function removeNull(arr)
// {
//     let newarr=arr.filter(item => item!=null)            //done
//     return newarr;
// }

// console.log(removeNull(["a", null, "b", null]));
// //  ["a", "b"]

// console.log(removeNull([null, null, null, null, null]));
// //  []

// console.log(removeNull([7, 8, null, 9]));
// //  [7, 8, 9]

// 4=> Hurdle Jump
// Create a function that takes an array of hurdle heights and a jumper's jump height, and determine whether or not the hurdler can clear all the hurdles.

//  A hurdler can clear a hurdle if their jump height is greater than or equal to the hurdle height.

// function hurdleJump(arr,val)
// {
//     let returnval;
//     arr.sort((a,b)=>a-b);
//     if(arr[arr.length-1]>val)
//     {
//         returnval=false;                                         //done
//     }
//     else
//     {
//         returnval=true;
//     }
//     return returnval;
// }

// function hurdleJump(arr, val) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > val) {
//       return false;
//     }                                                        //done
//   }

//   return true;
// }

// console.log(hurdleJump([1, 2, 3, 4, 5],5));
// //  true
// console.log(hurdleJump([5, 5, 3, 4, 5],3));
// //  false
// console.log(hurdleJump([5, 4, 5, 6],10));
// //  true
// console.log(hurdleJump([1, 2, 1],1));
// //  false

// 5=>  Return the First and Last Elements in an Array
// Create a function that takes an array of values and returns the first and last values in a new array.

// function firstLast(arr)
// {
//     let returnarr=[];
//     let f=arr.unshift();
//     let l=arr.pop();
//     returnarr.push(f,l)                                          //done
//     return returnarr;
// }

// function firstLast(arr)
// {
//     let newarr=[];
//     newarr.push(arr[0],arr[arr.length-1]);                                  //done
//     return newarr;
// }

// console.log(firstLast([5, 10, 15, 20, 25]))
// //  [5, 25]

// console.log(firstLast(["edabit", 13, null, false, true]))
// //  ["edabit", true]

// console.log(firstLast([undefined, 4, "6", "hello", null]))
// //  [undefined, null]

// 6=> Find the Smallest Number in an Array
// Create a function that takes an array of numbers and returns the smallest number in the set.

// function findSmallestNum(arr)
// {
//     let value=Infinity;
//     for(let i=0;i<arr.length;i++)
//     {
//         if(arr[i]<value)
//         {
//             value=arr[i];                                //done
//         }
//     }
//     return value;
// }

// function findSmallestNum(arr)
// {
//     arr.sort((a,b)=>a-b)
//     let svalue=arr[0];                                                   //done
//     return svalue;
// }

// console.log(findSmallestNum([34, 15, 88, 2]));
// //  2

// console.log(findSmallestNum([34, -345, -1, 100]));
// //  -345

// console.log(findSmallestNum([-76, 1.345, 1, 0]));
// //  -76

// console.log(findSmallestNum([0.4356, 0.8795, 0.5435, -0.9999]));
// //  -0.9999

// console.log(findSmallestNum([7, 7, 7]));
// //  7

// 7=>Additive Inverse
// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.

// function additiveInverse(arr)
// {
//     let newarr=[];
//     for(let i=0;i<arr.length;i++)                                //done
//     {
//         newarr[i]=arr[i]*-1;
//     }

//     return newarr;
// }

// function additiveInverse(arr)
// {
//     let newarr=arr.map((item)=>item*(-1));                               //done
//     return newarr;
// }

// console.log(additiveInverse([5, -7, 8, 3]))
// //  [-5, 7, -8, -3]

// console.log(additiveInverse([1, 1, 1, 1, 1]))
// //  [-1, -1, -1, -1, -1]

// console.log(additiveInverse([-5, -25, 35]))
// //  [5, 25, -35]

// 8 =>  X and Y Coordinates
// Create a function that converts two arrays of x- and y- coordinates into an array of (x, y) coordinates.

// function convertCartesian(arr1,arr2)
// {
//     let newarr=[];
//     let returnarr=[];
//     for(let i=0;i<arr1.length;i++)
//     {
//         newarr.push(arr1[i],arr2[i]);
//     }
//     let j=0;
//     for(i=0;i<newarr.length;i=i+2)
//     {
//         returnarr[j]=newarr.slice(i,i+2);        //done
//         j++;
//     }
//     return returnarr;
// }

// function convertCartesian(arr1, arr2) {
//   let newarr = [];
//   for (let i = 0; i < arr1.length; i++) {
//     newarr[i] = arr1[i];
//   }

//   let j = 0;
//   for (let i = arr1.length; i < arr2.length + arr1.length; i++) {
//     newarr[i] = arr2[j];
//     j++;
//   }

//   j = 0;
//   let combo = [];
//   let mididx = arr1.length;
//   for (let i = 0; i < newarr.length; i += 2) {                  // nhi hua isse
//     for (let k = i; k < 1; k++) {
//       let little = [];
//       little[0] = newarr[k];
//       little[1] = newarr[k + 1];
//       combo[j] = little;
//       j++;
//     }
//   }

//   return combo;
// }

// console.log(convertCartesian([1, 5, 3, 3, 4], [5, 8, 9, 1, 0]));
// //  [[1, 5], [5, 8], [3, 9], [3, 1], [4, 0]]

// console.log(convertCartesian([9, 8, 3], [1, 1, 1]));
// //  [[9, 1], [8, 1], [3, 1]]

// 9=> Generate a Countdown of Numbers in an Array
// Create a function that takes a number as an argument and returns an array of numbers counting down from this number to zero.

// function countdown(val)
// {
//     let arr=[];
//     let j=0;
//     for(let i=val;i>=0;i--)                                  //done
//     {
//         arr[j]=i;
//         j++;
//     }
//     return arr ;
// }

// function countdown(val)
// {
//     let arr=[];
//     for(let i=val;i>=0;i--)
//     {                                                    //done
//         arr.push(i);
//     }
//     return arr;
// }

// function countdown(val)
// {
//     let arr=[];
//     for(let i=val;i>=0;i--)                          //done
//     {
//         arr[i]=val-i;
//     }

//     return arr;
// }

// console.log(countdown(5));
// //  [5, 4, 3, 2, 1, 0]

// console.log(countdown(1));
// //  [1, 0]

// console.log(countdown(0));
//  [0]

// 10 =>  Find the Bug: Checking Even Numbers
// Create a function that takes in an array and returns true if all its values are even, and false otherwise.

// Not a big deal, your friend says. He writes the following code:

// function checkAllEven(arr) {
//   return arr.every(x % 2 === 0)
// }

// The code above leads to a Reference Error, with x being undefined. Fix the code above so that all tests pass:

// the error in friends code is

// function checkAllEven(arr){
//     return arr.every(x => x%2==0)                                //done
// }

function checkAllEven(arr)
{
    for(i=0;i<arr.length;i++)
    {
        if(arr[i]%2!=0)
        {
            return false;                                        //done
        }
        return true;
    }
}

console.log(checkAllEven([1, 2, 3, 4]))
//  false

console.log(checkAllEven([2, 4, 6]))
//  true

console.log(checkAllEven([5, 6, 8, 10]))
//  false

console.log(checkAllEven([-2, 2, -2, 2]))
//  true
