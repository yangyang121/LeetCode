/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  const m = matrix.length;
  if (m === 0) return [];
  const n = matrix[0].length;
  let left = 0;
  let top = 0;
  let right = n - 1;
  let bottom = m - 1;
  const ans = [];
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i]);
    }
    for (let i = top + 1; i <= bottom; i++) {
      ans.push(matrix[i][right]);
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        ans.push(matrix[bottom][i]);
      }
      for (let i = bottom - 1; i > top; i--) {
        ans.push(matrix[i][left]);
      }
    }
    left++;
    top++;
    right--;
    bottom--;
  }
  console.log(ans);
  return ans;
};
spiralOrder([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
]);
