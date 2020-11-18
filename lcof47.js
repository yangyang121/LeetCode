/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  const ans = new Array(m);
  for (let i = 0; i < m; i++) {
    ans[i] = new Array(n);
  }
  ans[0][0] = grid[0][0];
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (i === 0 && j === 0) continue;
      if (i === 0) {
        ans[i][j] = ans[i][j - 1] + grid[i][j];
      } else if (j === 0) {
        ans[i][j] = ans[i - 1][j] + grid[i][j];
      } else {
        ans[i][j] = Math.max(ans[i - 1][j], ans[i][j - 1]) + grid[i][j];
      }
    }
  }
  console.log(ans);
  return ans[m - 1][n - 1];
};

maxValue([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
