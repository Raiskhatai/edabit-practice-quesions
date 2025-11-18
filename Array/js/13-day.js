// 1=> Factors of a Given Number
// Create a function that finds each factor of a given number n. Your solution should return an array of the number(s) that meet this criteria.

// function findFactors(value) {
//   let returnarr = [];

//   for (i = 0; i <= value; i++) {
//     if (value % i === 0) {
//       returnarr.push(i);                                         //done
//     }
//   }

//   return returnarr;
// }

// console.log(findFactors(9)); //  [1, 3, 9]
// // 9 has three factors 1, 3 and 9
// console.log(findFactors(12)); //  [1, 2, 3, 4, 6, 12]
// console.log(findFactors(20)); //      [1, 2, 4, 5, 10, 20]
// console.log(findFactors(0)); //  []
// // 0 has no factors

// 2=> Sum of Minimums
// Create a function that takes a 2D array arr and returns the sum of the minimum value in each row.

// function sumMinimums(arr) {
//   let sum = 0;

//   sum += arr[0][0];
//   sum += arr[1][0];                                          //done
//   sum += arr[2][0];
//   return sum;
// }

// function sumMinimums(arr)
// {
//     let sum=0;
//     for(i=0;i<arr.length;i++)
//     {
//         console.log(arr[i].sort((a,b) => a-b));              //done
//         sum+=arr[i][0];
//     }

//     return sum;
// }

// function sumMinimums(arr)
// {
//     let sum=0;
//     arr.forEach((elm,index) => {                             //done
//         sum+=elm[0];
//     });

//     return sum;
// }

// function sumMinimums(arr)
// {
//     let sum=arr.reduce(function(a,c){                        //done
//         return a + c[0];
//     },0)
//     return sum;
// }

// console.log(
//   sumMinimums([
//     [1, 2, 3, 4, 5],
//     [5, 6, 7, 8, 9],
//     [20, 21, 34, 56, 100],
//   ])
// );

// sum of minimum numbers of each array = 26

// minimum value of the first row is 1
// minimum value of the second row is 5
// minimum value of the third row is 20

// 3=> Trimmed Averages
// Given an array of numbers, remove the largest and smallest numbers, and calculate the average of the remaining numbers.

// function trimmedAverages(arr)
// {
//         arr.shift();
//         arr.pop();
//         let av_num=arr.length;
//         sum=0;
//         for(i=0;i<av_num;i++)                            //done
//         {
//             sum+=arr[i];
//         }
//        sum= sum/av_num;
//         return sum;
// }

// function trimmedAverages(arr)
// {
//     arr.shift();
//     arr.pop();
//     let sum = arr.reduce(function(a,c,i,arr){            //done
//         let sum=a+c;
//         return sum;
//     },0);

//     let avg=sum/arr.length;
//     return avg;
// }





// function trimmedAverages(arr) {
//   arr.splice(0, 1);
//   let lastindex = arr.length - 1;
//   arr.splice(lastindex, 1);

//   let sum = arr.reduce(function (a, c, i, arr) {                         //done
//     //done
//     let sum = a + c;
//     return sum;
//   }, 0);

//   let avg = sum / arr.length;
//   return avg;
// }

// console.log(trimmedAverages([4, 5, 7, 100])); // 6
// // Average of 5 and 7
// console.log(trimmedAverages([10, 25, 5, 15, 20])); //  15
// // Average of 10, 15 and 20
// console.log(trimmedAverages([1, 1, 1])); // 1
// // 1




// 4=> Age Difference Between Spouses
// Create a function that determines the age difference between spouses in a household. The ages ages in years of the parents and their children are given in an array.

// If there is no difference in age between the parents, return "No age difference between spouses.". Otherwise, return the difference in years. Check the examples for more clarification.



// function ageDifference(arr)
// {
//     arr.sort((a,b)=>a-b)
//     let lastindex=arr.length-1;
//     let difference=arr[lastindex-1]-arr[lastindex];

//     if(difference==0)
//     {
//         return "no age diffrence between spouses";                   //done
//     }
//     else
//     {
//         return `${difference*-1} year`
//     }

// }


// function ageDifference(arr)
// {
//         arr.sort((a,b) => a-b);
//         let difference=arr.reduce(function(a,c,i,array){
//             let lastindex=arr.length-1;
//             let difference=arr[lastindex]-arr[lastindex-1];
//             return difference;
//         })

//         if(difference===0)
//         {
//             return "no age difference between spouses."                      //done
//         }
//         else
//         {
//             return `${difference} years`
//         }
// }


// console.log(ageDifference([29, 1, 6, 8, 28]))               //  "1 year"
// console.log(ageDifference([43, 86, 49, 86]))                //  "No age difference between spouses."
// console.log(ageDifference([2, 4, 6, 32, 27]))               //  "5 years"






// 5=>  Outlier Number
// Given an array of either entirely odd integers or entirely even integers except for a single Outlier Number, create a function to return this number.


// function outlierNumber(arr)
// {
//     let outlier1=0;
//     let outlier2=0;
//     let no_of_outler_even=0;
//     let no_of_outler_odd=0;
//     let odd_outlier;
//     arr.forEach(element => {

//         if(element%2==0)
//         {
//             no_of_outler_even++;
//         }
//         else 
//         {                                        //nhi hua 
            
//             no_of_outler_odd++;
//               if(element%2==1)
//             {
//                 odd_outlier=element;
//                 console.log(element)
//                 console.log(odd_outlier)
//             }
//         }

//    });

//         console.log(no_of_outler_even,no_of_outler_odd)
    
//     // console.log(outlier1,outlier2);
// }




// console.log(outlierNumber([2, 3, 4]))                                           // 3
// // 2 and 4 are even numbers.
// // // 3 is an outlier number.

// console.log(outlierNumber([1, 2, 3]))                                           // 2
// console.log(outlierNumber([4, 1, 3, 5, 9]))                                         // 4
