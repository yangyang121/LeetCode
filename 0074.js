/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  const m = matrix.length;
  if (m === 0) return false;
  const n = matrix[0].length;
  let left = 0;
  let right = m * n - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const item = matrix[Math.floor(mid / n)][mid % n];
    if (item === target) {
      return true;
    } else if (item > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return false;
};

searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ],
  3
);
searchMatrix(
  [
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 50],
  ],
  13
);
