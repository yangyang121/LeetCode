/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const result = [];
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) return result;
  const rows = matrix.length;
  const columns = matrix[0].length;
  let left = 0;
  let right = columns - 1;
  let top = 0;
  let bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      result.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      result.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column >= left; column--) {
        result.push(matrix[bottom][column]);
      }
      for (let row = bottom - 1; row > top; row--) {
        result.push(matrix[row][left]);
      }
    }
    left++;
    right--;
    top++;
    bottom--;
  }
  console.log(result);
  return result;
};

spiralOrder([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
