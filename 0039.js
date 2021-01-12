/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  if (!candidates.length) return []
  const ans = []
  function dfs(path, t, start) {
    if (t <= 0) {
      t === 0 && ans.push(path.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      path.push(candidates[i])
      dfs(path, t - candidates[i], i)
      path.pop()
    }
  }
  dfs([], target, 0)
  console.log(ans)
  return ans
}

combinationSum([2, 3, 6, 7], 7)
combinationSum([2, 3, 5], 8)
