/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var flipAndInvertImage = function (A) {
  const n = A.length
  if (!n) return []
  const m = A[0].length
  const ans = new Array(n)
  for (let i = 0; i < m; i++) {
    ans[i] = new Array(m).fill(0)
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (A[i][j] === 0) {
        ans[i][m - j - 1] = 1
      }
    }
  }
  return ans
}
