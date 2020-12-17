function maxValue(grid) {
  const m = grid.length
  if (m === 0) return 0
  const n = grid[0].length
  const ans = [[grid[0][0]]]
  for (let i = 1; i < m; i++) {
    ans[0][i] = grid[0][i] + ans[0][i - 1]
  }
  for (let i = 1; i < n; i++) {
    ans[i] = [grid[i][0] + ans[i - 1][0]]
  }
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      ans[i][j] = Math.max(ans[i - 1][j], ans[i][j - 1]) + grid[i][j]
    }
  }
  return ans[m - 1][n - 1]
}
