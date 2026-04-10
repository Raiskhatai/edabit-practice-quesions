// 61 => Matrix Transpose
// In linear algebra, the transpose of a matrix is an operator which flips a matrix over its diagonal; that is, it switches the row and column indices of the matrix A by producing another matrix, often denoted by A^T.

// Create a function that takes a 2D array (matrix A) and returns a 2D array (matrix A^T).

function makeTranspose(arr){

}

console.log(
  makeTranspose([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]),
);
//  [
//   [1, 4, 7],
//   [2, 5, 8],
//   [3, 6, 9]
// ]

console.log(
  makeTranspose([
    [1, 2],
    [3, 4],
    [5, 6],
  ]),
);
//  [
//   [1, 3, 5],
//   [2, 4, 6]
// ]

console.log(makeTranspose([["a", "b"]]));
//  [
//   ["a"],
//   ["b"]
// ]
