/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
  let pre = []
  let ans = []
  for (let i = 0; i <= numRows; i++) {
    ans = []
    for (let j = 0; j <= i; j++) {
      if (j === 0 || j === i) {
        ans.push(1)
      } else {
        ans.push(pre[j - 1] + pre[j])
      }
    }
    pre = [...ans]
  }
  return ans
}
