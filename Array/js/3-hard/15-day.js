<<<<<<< HEAD
// 41 => Reorder Digits
// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

// function reorderDigits(arr,direction){
//     let val=null;
//     let ret=[];
//     function hof(otherval,direction){
//         if(direction=="asc") return otherval.sort((a,b)=>a-b);
//         else return otherval.sort((a,b)=>a-b).reverse();
//     }
//      for(let i=0;i<arr.length;i++){
//             val=""+arr[i];
//             val=val.split("" );
//             console.log(val);
//             let otherval=(hof(val,direction));
//             ret.push(+otherval.join(""));
//         }
//     if(direction == "asc"){
//         return ret;
//     }
//     else{
//         return   ret;
//     }
// }

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc") )// [155, 134, 89, 44, 112]
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc") )// [551, 431, 98, 44, 211]
// console.log(reorderDigits([63251, 78221], "asc") )// [12356, 12278]
// console.log(reorderDigits([63251, 78221], "desc") )// [65321, 87221]
// console.log(reorderDigits([1, 2, 3, 4], "asc")  )// [1, 2, 3, 4]
// console.log(reorderDigits([1, 2, 3, 4], "desc") )// [1, 2, 3, 4]

// 42 => You Sunk My Battleship!
// Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them.

// Create a function that takes an array of arrays (matrix) and a coordinate as a string. If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".

// Instruction text contains two blank spaces between quotation marks; the code/test does not. See examples below.

// let matrix=[
//   [".", ".", ".", "*", "*"],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", ".", "*", "*", "."],
// ]

// function fire(matrix,coordinates){
//     coordinates=coordinates.split("");
//     let [row,column]=coordinates;
//     row=row.charCodeAt(0)-65;
//     column=+column-1;
//     if(matrix[row][column]==="*") return "BOOM";
//     else return "splash";
// }

// console.log(fire(matrix, "A1") )// "splash"
// console.log(fire(matrix, "A4") )// "BOOM"
// console.log(fire(matrix, "D2") )// "BOOM"

// 43 => Leader in an Array
// Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

// function leader(arr){
//     let ret=[];
//     for(let i=0;i<arr.length;i++){
//         for(let k=i+1;k<arr.length;k++){
//             if(arr[i]<arr[k]){
//                 break;
//             }else if(k==arr.length-1){
//                 ret.push(arr[i]);
//             }
//         }
//     }
//     ret.push(arr[arr.length-1]);
//     return ret;
// }


// console.log(leader([2, 3, 20, 15, 8, 3]) )// [20, 15, 8, 3]
// // Note that 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.

// console.log(leader([2, 3, 20, 15, 8, 25, 3]) )// [25, 3]
// // Note that 20 cannot be added because it is not greater than 25.

// console.log(leader([1, 2, 3, 4, 5]) )// [5]
// // 5 is technically greater than the (zero) remaining items.

// console.log(leader([8, 7, 1, 2, 10, 3, 5]) )//[10, 5]
// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include.

// 44 => Instances of the Fibonacci Sequence
// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

// function fibSeq(end){
//     if(end==0)  return [];
//     else if(end==1) return [0];
//     else if(end==undefined) return undefined;
//     else{
//         let arr=[0,1];
//     for(let i=2;i<end;i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr;
//     }
// }

// console.log(fibSeq(4) )// [0, 1, 1, 2]
// console.log(fibSeq(7) )// [0, 1, 1, 2, 3, 5, 8]
// console.log(fibSeq(0) )// []
// console.log(fibSeq() )// []
// console.log(fibSeq(1) )// [0]
=======
// 41 => Reorder Digits
// Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.

// function reorderDigits(arr,direction){
//     let val=null;
//     let ret=[];
//     function hof(otherval,direction){
//         if(direction=="asc") return otherval.sort((a,b)=>a-b);
//         else return otherval.sort((a,b)=>a-b).reverse();
//     }
//      for(let i=0;i<arr.length;i++){
//             val=""+arr[i];
//             val=val.split("" );
//             console.log(val);
//             let otherval=(hof(val,direction));
//             ret.push(+otherval.join(""));
//         }
//     if(direction == "asc"){
//         return ret;
//     }
//     else{
//         return   ret;
//     }
// }

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc") )// [155, 134, 89, 44, 112]
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc") )// [551, 431, 98, 44, 211]
// console.log(reorderDigits([63251, 78221], "asc") )// [12356, 12278]
// console.log(reorderDigits([63251, 78221], "desc") )// [65321, 87221]
// console.log(reorderDigits([1, 2, 3, 4], "asc")  )// [1, 2, 3, 4]
// console.log(reorderDigits([1, 2, 3, 4], "desc") )// [1, 2, 3, 4]

// 42 => You Sunk My Battleship!
// Remember the game Battleship? Ships are floating in a matrix. You have to fire torpedos at their suspected coordinates, to try and hit them.

// Create a function that takes an array of arrays (matrix) and a coordinate as a string. If the coordinate contains only water " . ", return "splash" and if the coordinate contains a ship " * ", return "BOOM".

// Instruction text contains two blank spaces between quotation marks; the code/test does not. See examples below.

// let matrix=[
//   [".", ".", ".", "*", "*"],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", "*", ".", ".", "."],
//   [".", ".", "*", "*", "."],
// ]

// function fire(matrix,coordinates){
//     coordinates=coordinates.split("");
//     let [row,column]=coordinates;
//     row=row.charCodeAt(0)-65;
//     column=+column-1;
//     if(matrix[row][column]==="*") return "BOOM";
//     else return "splash";
// }

// console.log(fire(matrix, "A1") )// "splash"
// console.log(fire(matrix, "A4") )// "BOOM"
// console.log(fire(matrix, "D2") )// "BOOM"

// 43 => Leader in an Array
// Create a function that finds each number in the given array that is greater than every number that comes after it. Your solution should return an array of the number(s) that meet these criteria.

// function leader(arr){
//     let ret=[];
//     for(let i=0;i<arr.length;i++){
//         for(let k=i+1;k<arr.length;k++){
//             if(arr[i]<arr[k]){
//                 break;
//             }else if(k==arr.length-1){
//                 ret.push(arr[i]);
//             }
//         }
//     }
//     ret.push(arr[arr.length-1]);
//     return ret;
// }


// console.log(leader([2, 3, 20, 15, 8, 3]) )// [20, 15, 8, 3]
// // Note that 20 is greater than all the elements to it's
// // right side, similarly 15 and so on.

// console.log(leader([2, 3, 20, 15, 8, 25, 3]) )// [25, 3]
// // Note that 20 cannot be added because it is not greater than 25.

// console.log(leader([1, 2, 3, 4, 5]) )// [5]
// // 5 is technically greater than the (zero) remaining items.

// console.log(leader([8, 7, 1, 2, 10, 3, 5]) )//[10, 5]
// // 10 is greater than all items to the right of it, so include.
// // 3 is not greater than all items to the right of it, so exclude.
// // 5 is greater than the remaining items, so include.

// 44 => Instances of the Fibonacci Sequence
// Create a function that takes a number as an argument and returns n instances of the Fibonacci sequence as an array.

// Fibonacci numbers: F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1. So the easy explanation is: The next element is the sum of the two previous elements.

// If you want to read more about this sequence, take a look at the On-Line Encyclopedia of Integer Sequences. Fibonacci numbers are strongly related to the golden ratio. See the OEIS and Wikipedia links in the resources tab.

// function fibSeq(end){
//     if(end==0)  return [];
//     else if(end==1) return [0];
//     else if(end==undefined) return undefined;
//     else{
//         let arr=[0,1];
//     for(let i=2;i<end;i++){
//         arr.push(arr[i-1]+arr[i-2]);
//     }
//     return arr;
//     }
// }

// console.log(fibSeq(4) )// [0, 1, 1, 2]
// console.log(fibSeq(7) )// [0, 1, 1, 2, 3, 5, 8]
// console.log(fibSeq(0) )// []
// console.log(fibSeq() )// []
// console.log(fibSeq(1) )// [0]
>>>>>>> d81a1fa884d86d0797da29177c16c9f73911c7f9
