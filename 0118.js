/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  if (numRows === 0) return []
  const ans = new Array(numRows)
  ans[0] = [1]
  let n = 1
  for (let i = 1; i < ans.length; i++) {
    const len = ++n
    ans[i] = []
    ans[i][0] = ans[i][len - 1] = 1
    for (let j = 1; j < len - 1; j++) {
      ans[i][j] = ans[i - 1][j - 1] + ans[i - 1][j]
    }
  }
  return ans
}
