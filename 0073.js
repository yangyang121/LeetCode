/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const zeroRow = new Set();
  const zeroColumn = new Set();
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j] === 0) {
        zeroRow.add(i);
        zeroColumn.add(j);
      }
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (zeroRow.has(i) || zeroColumn.has(j)) matrix[i][j] = 0;
    }
  }
};

setZeroes([
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
]);
setZeroes([
  [0, 1, 2, 0],
  [3, 4, 5, 2],
  [1, 3, 1, 5],
]);
