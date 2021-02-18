/**
 * @param {number[][]} isConnected
 * @return {number}
 */
var findCircleNum = function (isConnected) {
  const len = isConnected.length
  let ans = 0
  const s = new Set()
  function helper(i) {
    for (let j = 0; j < len; j++) {
      if (isConnected[i][j] === 1 && !s.has(j)) {
        s.add(j)
        helper(j)
      }
    }
  }
  for (let i = 0; i < len; i++) {
    if (!s.has(i)) {
      helper(i)
      ans++
    }
  }
  return ans
}
