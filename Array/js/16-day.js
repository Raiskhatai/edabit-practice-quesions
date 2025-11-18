// 1=> CMS Selector Based on a Given String
// Write a function that takes an array of strings and a pattern (string) and returns the strings that contain the pattern in alphabetical order. If the pattern is an empty string, return all the strings passed in the input array.

// function cmsSelector(arr, value) {
//   let value2 = value.toUpperCase();
//   for (i = 0; i < arr.length; i++) {
//     if (value == "") {
//       return arr;
//     }
//     else if (arr[i].includes(value) || arr[i].includes(value2)) {        //done
//       return arr[i];
//     }
//   }
// }

// console.log(cmsSelector(["WordPress", "Joomla", "Drupal"], "w")); //  ["WordPress"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "ru")); //  ["Drupal"]
// console.log(cmsSelector(["WordPress", "Joomla", "Drupal", "Magento"], "")); //  ["Drupal", Joomla", "Magento", "WordPress"]

// 2=> Convert Number to Corresponding Month Name
// Create a function that takes a number (from 1 to 12) and returns its corresponding month name as a string. For example, if you're given 3 as input, your function should return "March", because March is the 3rd month.

// Number	Month Name
// 1	January
// 2	February
// 3	March
// 4	April
// 5	May
// 6	June
// 7	July
// 8	August
// 9	September
// 10	October
// 11	November
// 12	December

// function monthName(value){
//     switch(value)
//     {
//        case 1	:return "January" ;
//        case 2	:return "February" ;
//        case 3	:return "March" ;
//        case 4	:return "April" ;
//        case 5	:return "May" ;
//        case 6	:return "June" ;
//        case 7	:return "July" ;
//        case 8	:return "August" ;
//        case 9	:return "September" ;                       //done
//        case 10  :return "October" ;
//        case 11  :return "November" ;
//        case 12  :return "December" ;

//        default : "value donsent exist";
// break
//     }
// }

// console.log(monthName(3))               //  "March"
// console.log(monthName(12))              //  "December"
// console.log(monthName(6))               //  "June"

// 3 => Find the Average of the Letters 📊
// Create a function that returns the average of a list composed of letters. First, find the number of the letter in the alphabet in order to find the average of the list.

// A = 1
// B = 2
// C = 3
// D = 4
// E = 5
// average = total sum of all numbers / number of item in the set
// Return the result rounded to two decimal points.

// function averageIndex(arr) {
//   let sum = 0;
//   for (i = 0; i < arr.length; i++) {
//     sum += arr[i].charCodeAt(0) - 96;                        //done
//   }

//   sum = sum / arr.length;
//   sum = sum.toFixed(2);
//   return sum;
// }

// function averageIndex(arr)
// {
//     let sum=arr.reduce(function(accumulator,value){
//       return accumulator+value.charCodeAt(0)-96;                //done
//     },0)

//     sum=sum/arr.length;
//     sum=sum.toFixed(2);
//     return sum;
// }

// console.log(averageIndex(["a", "b", "c", "i"])); //  3.75
// console.log(averageIndex(["e", "d", "a", "b", "i", "t"])); //  6.83
// console.log(
//   averageIndex([
//     "y",
//     "o",
//     "u",
//     "a",
//     "r",
//     "e",
//     "t",
//     "h",
//     "e",
//     "b",
//     "e",
//     "s",
//     "t",
//   ])
// ); //  12.62

// 4=> RegEx: Boundary Assertions II
// You are given an array with random words but your program doesn't accept words that begin with the capital letter "C". Remove the unaccepted words and return the new array.

// function accepted(arr) {
//   let index = [];
//   let j = 0;
//   arr.forEach((element, i) => {
//     if (element[0] === "C") {                            //done
//       arr.splice(i, 1);
//     }
//   });

//   return arr;
// }

// function accepted(arr)
// {
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i][0]==="C")
//         {                                        splice method ke bina nhi
//             arr[i]=arr[i+1];
//             arr.length=arr.length-1;
//         }
//     }
//     return arr;
// }

// console.log(accepted(["Ducks", "Bears", "Cats"])); //  ["Ducks", "Bears"]
// console.log(accepted(["cars", "trucks", "planes"])); //  ["cars", trucks", "planes"]
// console.log(accepted(["Cans", "Worms", "Bugs", "Cold", "Beans"])); //  ["Worms", "Bugs", "Beans"]

// 5 => Cowboy Shootout
// Wild Roger is tasked with shooting down 6 bottles with 6 shots as fast as possible. Here are the different types of shots he could make:

// He could use one pistol to shoot a bottle with a "Bang!" in 0.5 seconds.
// Or he could use both pistols at once with a "BangBang!" to shoot two bottles in 0.5 seconds.
// Given an array of strings, return the time (in seconds) it took to shoot down all 6 bottles. Make sure to only count Bangs and BangBangs. Anything else doesn't count.

// function rogerShots(arr)
// {
//     sum=0;
//     for(i=0;i<arr.length;i++)
//     {
//         if(arr[i]==="Bang!" || arr[i]==="BangBang!")
//         {
//             sum+=0.5;
//         }
//     }
//     return sum;
// }

// function rogerShots(arr) {
//   let sum = arr.reduce(function (accumulator, value) {
//     if (value === "Bang!" || value === "BangBang!") {
//       return accumulator + 0.5;
//     }
//     else                                     //done
//     {
//         return accumulator;
//     }
//   }, 0);
//   return sum;
// }

// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "Bang!", "Bang!"])); //  3
// console.log(rogerShots(["Bang!", "Bang!", "Bang!", "Bang!", "BangBang!"])); //  2.5
// console.log(
//   rogerShots([
//     "Bang!",
//     "BangBangBang!",
//     "Boom!",
//     "Bang!",
//     "BangBang!",
//     "BangBang!",
//   ])
// ); //  2
