// 1=> Get the Sum of All Array Elements
// Create a function that takes an array and returns the sum of all numbers in the array.

// function getSumOfItems(arr)
// {
//     sum=0;
//     arr.forEach((elm) => {                   //done
//         sum+=elm; 
//     });
//     return sum;
// }

// function getSumOfItems(arr)
// {
//     let sum=0;
//     for(i=0;i<arr.length;i++)            //done
//     {
//         sum=sum+arr[i]
//     }
//     return sum;
// }


// console.log(getSumOfItems([2, 7, 4]) )                      //  13
// console.log(getSumOfItems([45, 3, 0]) )                     //  48
// console.log(getSumOfItems([-2, 84, 23]) )                       //  105




// 2=> Rotate the Array by One 🔄
// Given an array, rotate the values clockwise by one (the last value is sent to the first position).

// Check the examples for a better understanding.


// function rotateByOne(arr)
// {
//     let returnarr=[0];
//     let last_index=arr.length-1;
//     let last_value=arr[last_index];
//     j=1;
//     console.log(last_value)                          //done
//     arr.forEach((elm) => {
//             returnarr[j]=elm;
//             j++;
//     });
//     returnarr[0]=last_value;
//     returnarr.pop();
//     return returnarr;
// }


// function rotateByOne(arr){
//     let forunshift=[];
//     arr.forEach((elm) => {
//         forunshift.unshift(elm);
//     });
                                                        //done
//     j=0;
//     for(i=1;i<arr.length;i++)
//     {
//         forunshift[i]=arr[i-1];
//     }
//     return forunshift;
// }



// console.log(rotateByOne([1, 2, 3, 4, 5]) )             //  [5, 1, 2, 3, 4]
// console.log(rotateByOne([6, 5, 8, 9, 7]) )             //  [7, 6, 5, 8, 9]
// console.log(rotateByOne([20, 15, 26, 8, 4]) )              //  [4, 20, 15, 26, 8]






// 3=> Invert an Array
// Create a function that takes an array of numbers arr and returns an inverted array.

// function invertArray(arr)
// {
//     let invert=[];
//     arr.forEach((elm) => {
//         if(elm===0)
//         {
//             return invert=[0];               //done
//         }
//         invert.push(-1*elm)
//     });
//     return invert;
// }



// function invertArray(arr)
// {
//     let invert=[];
//     for(i=0;i<arr.length;i++){
//         if(arr[i]===0)
//         {
//             return invert=[0];               //done
//         }
       
//         invert.push(-1*arr[i])
//     };
//     return invert;

// }


// console.log(invertArray([1, 2, 3, 4, 5]))                  //   [-1, -2, -3, -4, -5]
// console.log(invertArray([1, -2, 3, -4, 5]))                //   [-1, 2, -3, 4, -5]
// console.log(invertArray([]))                   //  []
// console.log(invertArray([0]))                   //  []






// 4=>  Array From a Range of Numbers
// Create a function that returns an array of all the integers between two given numbers start and end.
// If start == end, return an empty array.



// function rangeOfNum(start,end)
// {
    // rtnarr=[]
    // j=0;
    // if(start==end)
    // {
    //     return rtnarr;
    // }
    // else
    // {
    //         for(let i=start+1;i<end;i++)             //done
    //         {
    //             rtnarr[j]=i;
    //             j++;
    //         }
    //         return rtnarr;
    // }
// }


// console.log(rangeOfNum(2, 4))                       //  [3]
// console.log(rangeOfNum(5, 9))                       //  [6, 7, 8]
// console.log(rangeOfNum(2, 11))                      //  [3, 4, 5, 6, 7, 8, 9, 10]



// 5=> Skip the Drinks with Too Much Sugar
// Write a function that takes an array of drinks and returns an array of only drinks with no sugar in them. Drinks that contain sugar (in this challenge) are:

// cola
// fanta

// function skipTooMuchSugarDrinks(arr)
// {
//     arr.forEach((elm) => {
//         if(elm=="fanta")
//         {
                                                                        //adhura samjh nhi aaya
//         }
//     });
//         console.log(arr);

// }


// console.log(skipTooMuchSugarDrinks(["fanta", "cola", "water"]))             //  ["water"]
// console.log(skipTooMuchSugarDrinks(["fanta", "cola"]))              //  []
// console.log(skipTooMuchSugarDrinks(["lemonade", "beer", "water"]))              //  ["lemonade", "beer", "water"]




// 5=> Add the Index
// Given an array of numbers, create a function which returns the same array but with each element's index in the array added to itself. This means you add 0 to the number at index 0, add 1 to the number at index 1, etc...


// function addIndexes(arr)
// {
//     let rtn=[];
//     j=0;
//     for(let i=0;i<arr.length;i++)                                            //done
//     {
//         rtn[j]=i+arr[i];
//         j++
//     }
//     return rtn;
// }

// function addIndexes(arr)
// {
//     let rtn=[];
//     let i=0;
//     arr.forEach((elm) => {
//         rtn[i]=elm+i;                                                            //done
//         i++;
//     });
//     return rtn;
// }


// function addIndexes(arr)
// {
//     let rtn=[];
//     let i=0;
//     arr.forEach((elm) => {
//         rtn.push(elm+i)                                                            //done
//         i++;
//     });
//     return rtn;
// }


// console.log(addIndexes([0, 0, 0, 0, 0]) )                   //  [0, 1, 2, 3, 4]
// console.log(addIndexes([1, 2, 3, 4, 5]) )                   //  [1, 3, 5, 7, 9]
// console.log(addIndexes([5, 4, 3, 2, 1]) )                   //  [5, 5, 5, 5, 5]