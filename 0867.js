/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
  const n = matrix.length
  if (!n) return []
  const m = matrix[0].length
  const ans = new Array(m)
  for (let i = 0; i < m; i++) {
    ans[i] = new Array(n)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      ans[j][i] = matrix[i][j]
    }
  }
  return ans
}
