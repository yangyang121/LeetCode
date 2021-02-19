/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  if (!matrix.length || !matrix[0].length) return 0
  let side = 0
  const n = matrix.length
  const m = matrix[0].length
  const dp = new Array(n)
  for (let i = 0; i < n; i++) {
    dp[i] = new Array(m).fill(0)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (matrix[i][j] === "1") {
        if (i === 0 || j === 0) {
          dp[i][j] = 1
        } else {
          dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
        }
        side = Math.max(dp[i][j], side)
      }
    }
  }
  return side * side
}
