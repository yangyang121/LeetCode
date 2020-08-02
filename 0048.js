// 先转置矩阵，然后翻转每一行
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
  const len = matrix.length;
  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < Math.floor(len / 2); j++) {
      [matrix[i][j], matrix[i][len - j - 1]] = [
        matrix[i][len - j - 1],
        matrix[i][j],
      ];
    }
  }
};

rotate([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
rotate([
  [5, 1, 9, 11],
  [2, 4, 8, 10],
  [13, 3, 6, 7],
  [15, 14, 12, 16],
]);
