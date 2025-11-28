// 1=> Sum Greater Than Five
// Write a function that returns the sum of elements greater than 5, in the given array .

// function sumFive(arr){
// let sum=0;
//     arr.forEach((elm) => {
//         if(elm>5)
//                 sum+=elm                                 //done
//     });
//     return sum;
// }


// function sumFive(arr){
// let sum=0;
//    for(let i=0;i<arr.length;i++)
//    {
//         if(arr[i]>5)                                 //done
//         sum+=arr[i];
//    }
//     return sum;
// }

// console.log(sumFive([1, 5, 20, 30, 4, 9, 18])); //  77
// console.log(sumFive([1, 2, 3, 4])); //  0
// console.log(sumFive([10, 12, 28, 47, 55, 100])); //  252





// 2=> Filter Strings from Array
// Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.


// function filterArray(arr)
// {
//     let rtnarr=[];
//         arr.forEach((elm) => {
//                 if(typeof(elm)=="number")            //done
//                     rtnarr.push(elm);
//         });
//         return rtnarr;
// }

// function filterArray(arr){
//     let rtnarr=[];
//     j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         if(typeof(arr[i])==="number")                //done
//         {
//             rtnarr[j]=arr[i];
//             j++;
//         }
//     }
//     return rtnarr;
// }



// console.log(filterArray([1, 2, 3, "a", "b", 4]))        //  [1, 2, 3, 4]
// console.log(filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]))        //  [0, 1729]
// console.log(filterArray(["Nothing", "here"]))       //  []







// 3=> True Ones, False Zeros
// Create a function that returns an array of booleans from a given number by iterating through the number one digit at a time and appending true into the array if the digit is 1 and false otherwise.


// function integerBoolean(n){
//         let num=[];
//        let rtnarr=[]
//         num=n.split("");
//         num.forEach((elm) => {
//                 if(elm==1)
//                 {
//                          rtnarr.push(true) ;                 //DONE
//                 }  
//                 else
//                 {
//                         rtnarr.push(false);
//                 }     
//         });
//         return rtnarr;   
// }


// function integerBoolean(n)
// {
//         let num=[];
//         let rtnarr=[];
//         let j=0;
//         num=n.split("");
//         num.forEach((elm) => {
//                if(Number(elm))
//                {
//                 rtnarr[j]=true;                      //done
//                }
//                else
//                {
//                 rtnarr[j]=false
//                }
//                j++;
//         });
//                console.log(rtnarr);   
// }


// console.log(integerBoolean("100101"))       //  [true, false, false, true, false, true]
// console.log(integerBoolean("10"))       //  [true, false]
// console.log(integerBoolean("001"))      //  [false, false, true]



// 4=> The Forbidden Letter
// Given a letter and an array of words, return whether the letter does not appear in any of the words.


// function forbiddenLetter(char,arr)
// {
//         let value
//         for(let i=0;i<arr.length;i++)
//         {
//                 let temp=[...arr[i]];
//                 temp.forEach((elm) => {
//                         if(elm==char)
//                         {
//                                 console.log("if",char,elm)                   //nhi hua
//                                 value= false;
//                         }
//                         else
//                         {
//                                 console.log("else",char,elm)
//                                value= true;
//                         }
//                 });
//         }
//         return value;
// }

// console.log(forbiddenLetter("r", ["rock", "paper", "scissors"]))            //  false
// console.log(forbiddenLetter("a", ["spoon", "fork", "knife"]))               //  true
// console.log(forbiddenLetter("m", []))               //  true





// 4=> Designing Rugs
// Write a function that accepts the width and height (m, n) and an optional proc s and generates an array with m elements. Each element is a string consisting of either:

// The default character (hash #) repeating n times (if no proc is given).
// The character passed in through the proc repeating n times.


// function makeRug(n,m,s="#")
// {
//         let rtnarr=[];
//         for(i=0;i<n;i++)
//         {
//         let value="";

//                 for(j=0;j<m;j++)                     //done
//                 {value+=s;
//                 }
//                 rtnarr[i]=value;
//         }
//         return rtnarr;
// }


// console.log(makeRug(3, 5))  
// //  [
// //   "#####",
// //   "#####",
// //   "#####"
// // ]

// console.log(makeRug(3, 5, '$') )    
// //  [
// //   "$$$$$",
// //   "$$$$$",
// //   "$$$$$"
// // ]

// console.log(makeRug(2, 2, 'A') )    
// //  [
// //   "AA",
// //   "AA"
// // ]