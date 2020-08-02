/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const result = [];
  const rows = n;
  const columns = n;
  let left = 0;
  let right = columns - 1;
  let top = 0;
  let bottom = rows - 1;
  let count = 0;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      if (!Array.isArray(result[top])) result[top] = [];
      result[top][column] = ++count;
    }
    for (let row = top + 1; row <= bottom; row++) {
      if (!Array.isArray(result[row])) result[row] = [];
      result[row][right] = ++count;
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column >= left; column--) {
        result[bottom][column] = ++count;
      }
      for (let row = bottom - 1; row > top; row--) {
        result[row][left] = ++count;
      }
    }
    top++;
    bottom--;
    left++;
    right--;
  }
  console.log(result)
  return result
};

generateMatrix(3);
generateMatrix(4);
