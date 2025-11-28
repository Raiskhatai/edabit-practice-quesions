// 1=> Less Than, Greater Than
// Create a function that takes two numbers num1, num2, and an array arr and returns an array containing all the numbers in arr greater than num1 and less than num2.

// function arrBetween(num1, num2, arr) {
//   let returnarr = [];
//   arr.forEach(function (key) {
//     if (key > num1 && key < num2) {                     //done
// //       returnarr.push(key);
//     }
//   });
//   return returnarr;
// }

// function arrBetween(num1,num2,arr)
// {
//         let returnarr=[];
//         let j=0
//         for(let i=0;i<=arr.length-1;i++)                     //done
//         {
//                 if(arr[i]>num1 && arr[i]<num2)
//                 {
//                         returnarr[j] = arr[i];
//                         j++
//                 }
//         }
//     return returnarr;
// }

// console.log(arrBetween(3, 8, [1, 5, 95, 0, 4, 7])); //  [5, 4, 7]
// console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6])); //  [8, 6]
// console.log(arrBetween(7, 32, [1, 2, 3, 78])); //  []



// 2 => 50-30-20 Strategy
// The 50-30-20 strategy is a simple way to budget, which involves spending 50% of after-tax income on needs, 30% after tax income on wants, and 20% after-tax income on savings or paying off debt.

// Given the after-tax income as ati, what you are supposed to do is to make a function that will return an object that shows how much a person needs to spend on needs, wants, and savings.


// function fiftyThirtyTwenty(value)
// {
         
//         let obj={
//                 need:value/100*50,
//                 wants:value/100*30,                                          //done
//                 savings:value/100*20,
//         }

//        return obj;
// }


// console.log(fiftyThirtyTwenty(10000))               //  { "Needs": 5000, "Wants": 3000, "Savings": 2000 }
// console.log(fiftyThirtyTwenty(50000))               //  { "Needs": 25000, "Wants": 15000, "Savings": 10000 }
// console.log(fiftyThirtyTwenty(13450))               //  { "Needs": 6725, "Wants": 4035, "Savings": 2690 }





//  3=> Similar Bread
// Given two arrays, which represent two sandwiches, return whether both sandwiches use the same type of bread. The bread will always be found at the start and end of the array.


// function hasSameBread(arr1,arr2)
// {
//     for(let i=0;i<arr1.length-1;i++)
//     {
//         let last_index=arr1.length-1;
//         if(arr1[i]===arr2[i] && arr1[last_index]===arr2[last_index])                     //done
//         {
//                 return true;
//         }
//         else
//         {
//            return false;
//         }
//     }
// }


// function hasSameBread(arr1,arr2)
// {
//         let last_index=arr1.length-1;
//         let i=0;
//         let returnarr1=arr1.slice(i,last_index+1);
//         let returnarr2=arr2.slice(i,last_index+1);
//         if(returnarr1[i]===returnarr2[i] && returnarr2[i]===returnarr2[last_index])      //done
//         {
//          return true;
//         }
//         else
//         {
//            return false
//         }
// }


// function hasSameBread(arr1,arr2)
// {
//         let last_index=arr1.length-1;
//         let i=0;
//         let returnarr1=arr1.splice(i,last_index+1);
//         let returnarr2=arr2.splice(i,last_index+1);                          //done

//         if(returnarr1[i]===returnarr2[i] && returnarr2[i]===returnarr2[last_index])
//         {
//          return true;
//         }
//         else
//         {
//            return false
//         }
// }


// console.log(hasSameBread(
//   ["white bread", "lettuce", "white bread"],
//   ["white bread", "tomato", "white bread"]
// ) )
// // true

// console.log(hasSameBread(
//   ["brown bread", "chicken", "brown bread"],
//   ["white bread", "chicken", "white bread"]
// ) )
// // false

// console.log(hasSameBread(
//   ["toast", "cheese", "toast"],
//   ["brown bread", "cheese", "toast"]
// ) )
// // false







// 4 => Convert All Array Items to String
// Create a function that takes an array of integers and strings. Convert integers to strings and return the new array.

// function parseArray(arr)
// {
//     let returnarr=[];
//     let j=0;
//     arr.forEach(function(key){                                   //done
//         returnarr[j]=""+key;
//         j++;
//     })

//       return returnarr;
// }

// function parseArray(arr)
// {
//     let returnarr=[];
//     arr.forEach(function(key){
//         returnarr.push(""+key)                                   //done
//     })

//       return returnarr;
// }

// function parseArray(arr)
// {
//     let returnarr=[];
//     j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr[j]=''+arr[i];
//         j++;
//     }

//     return returnarr;
// }

// console.log(parseArray([1, 2, "a", "b"]))            //  ["1", "2", "a", "b"]
// console.log(parseArray(["abc", 123, "def", 456]) )           //  ["abc", "123", "def", "456"]
// console.log(parseArray([1, 2, 3, 17, 24, 3, "a", "123b"]))           //  ["1", "2", "3", "17", "24", "3", "a", "123b"]
// console.log(parseArray([]))          //  []





// 5=> Return Types
// Create a function that takes an array and returns the types of values (data types) in a new array.



// function arrayValuesTypes(arr)
// {
//     let returnarr=[];
//     j=0;
//         arr.forEach(function(key){
//                 returnarr[j]=typeof(key);                        //done
//                 j++;
//         });
//         return returnarr ;
// }


// function arrayValuesTypes(arr)
// {
//     let returnarr=[];
//         arr.forEach(function(key){
//                 returnarr.push(typeof(key));                     //done
//         });
//         return returnarr ;
// }

// function arrayValuesTypes(arr){
//     let returnarr=[];
//     let j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr[j]=typeof arr[i];
//         j++;
//     }
//     return returnarr;
// }


// console.log(arrayValuesTypes([1, 2, "null", []]))                   //  ["number", "number", "string", "object"]
// console.log(arrayValuesTypes(["214", true, false, 2, 2.15, [], null]))                 //  ["string", "boolean", "boolean", "number", "number", "object", "object"]
// console.log(arrayValuesTypes([21.1, "float", "array", ["I am array"], null, true, 214]))                 //  ["number", "string", "string", "object", "object", "boolean", "number"]







// 6 => Squares and Cubes
// Create a function that takes an array of two numbers and checks if the square root of the first number is equal to the cube root of the second number.



// function checkSquareAndCube(arr)
// {
//         let last_index=arr.length-1;
//         let num=Math.sqrt(arr[0])
//         let cuberoot=num*num*num;
// //         if(num==cuberoot)
// //         {
// //             return true;
// //         }                                                            // pura karna hey abhi
// //         else
// //         {
// //             return false;
// //         }
// }


// console.log(checkSquareAndCube([4, 8])  )                                // true
// console.log(checkSquareAndCube([16, 48]))                                    // false
// console.log(checkSquareAndCube([9, 27]) )                                    // true