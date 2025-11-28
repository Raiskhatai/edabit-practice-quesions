// 1=> Array of Strings to Array of Numbers
// Create a function that takes as a parameter an array of "stringified" numbers and returns an array of numbers.

// function toNumberArray(arr)
// {
//     let returnarr=[];
//    let  j;
//     arr.forEach((key) => {
//         returnarr.push(Number(key));                                 //done
//         j++;  
//     });
//     return returnarr;
// }


// function toNumberArray(arr)
// {
//     let returnarr=[];
//    let  j=0;
//     arr.forEach((key) => {
//         returnarr[j]=(Number(key));                                 //done
//         j++;  
//     });
//     return returnarr;
// }


// function toNumberArray(arr)
// {
//     const returnarr=[];
//     let j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr[j]=arr[i]-0;               //done
//         j++;
//     }

//     return returnarr;
// }


// // ["1", "3", "3.6"]                                //  [1, 3, 3.6]
// console.log(toNumberArray(["9.4", "4.2"]) )                                 //  [9.4, 4.2]
// console.log(toNumberArray(["91", "44"]) )                                   //  [91, 44]
// console.log(toNumberArray(["9.5", "8.8"]) )                                 //  [9.5, 8.8]



// 2=> Recreating the String.length Property
// Create a function which returns the length of a string, WITHOUT using String.length property.


// function length(s)
// {
//     let strlength=0;
//         for(let i =0;i<=str.length-1;i++)
//         {
//                 strlength++;                            //done
//         }
//         return strlength;
// }


// console.log(length("Hello World") )                              //  11
// console.log(length("Edabit")  )                              //  6
// console.log(length("wash your hands!"))                              //  16


// 3=> Half, Quarter and Eighth
// Create a function that takes a number and return an array of three numbers: half of the number, quarter of the number and an eighth of the number.

// function halfQuarterEighth(value){
//         let returnarr=[];
//         j=0;
//         for(let i=0;i<=2;i++)
//         {
//             value=value/2;                               //done
//             returnarr[j]=value;
//             j++;
//         }
//         return returnarr;
// }


// console.log(halfQuarterEighth(6) )      //  [3, 1.5, 0.75]
// console.log(halfQuarterEighth(22) )     //  [11, 5.5, 2.75]
// console.log(halfQuarterEighth(25) )     //  [12.5, 6.25, 3.125]




// 4=> Shapes With N Sides
// Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

// Inputs	Outputs
// 1	"circle"
// 2	"semi-circle"
// 3	"triangle"
// 4	"square"
// 5	"pentagon"
// 6	"hexagon"
// 7	"heptagon"
// 8	"octagon"
// 9	"nonagon"
// 10	"decagon"


// function nSidedShape(n)
// {
//     switch(n){
//         case 1	:   return "circle"
//         case 2	:   return "semi-circle"
//         case 3	:   return "triangle"
//         case 4	:   return "square"
//         case 5	:   return "pentagon"
//         case 6	:   return "hexagon"                //done
//         case 7	:   return "heptagon"
//         case 8	:   return "octagon"
//         case 9	:   return "nonagon"
//         case 10  :   return "decagon"
//         default  :   "wrong value"
//     }
// }


// console.log(nSidedShape(3))                     //  "triangle"
// console.log(nSidedShape(1))                     //  "circle"
// console.log(nSidedShape(9))                     //  "nonagon"


// 5=> Multiply Every Array Item by Two
// Create a function that takes an array with numbers and return an array with the elements multiplied by two.

// function getMultipliedArr(arr)
// {
//         let returnarr=[];
//         j=0;
//         arr.forEach((key) => {                   //done
//             returnarr[j]=key*2;
//             j++
//         });

//         return returnarr;
// }

// function getMultipliedArr(arr){
//     const returnarr=[];
//     let j=0;
//     for(i=0;i<arr.length;i++)
//     {
//         returnarr[j]=arr[i]*2;
//         j++;
//     }
//     return returnarr;
// }

// console.log(getMultipliedArr([2, 5, 3]))        //   [4, 10, 6]
// console.log(getMultipliedArr([1, 86, -5]))      //   [2, 172, -10]
// console.log(getMultipliedArr([5, 382, 0]))      //   [10, 764, 0]
