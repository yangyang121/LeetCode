/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  if (!grid.length || !grid[0].length) return 0;
  const rows = grid.length;
  const cols = grid[0].length;
  const dp = [];
  for (let i = 0; i < rows; i++) {
    dp.push(Array.from({ length: cols }).fill(0));
  }
  dp[0][0] = grid[0][0];
  for (let i = 1; i < rows; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let i = 1; i < cols; i++) {
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < cols; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }
  console.log(dp[rows - 1][cols - 1]);
  return dp[rows - 1][cols - 1];
};

minPathSum([
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]);
