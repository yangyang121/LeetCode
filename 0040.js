/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
  if (!candidates.length) return []
  const ans = []
  candidates.sort((a, b) => a - b)
  function dfs(path, t, start) {
    if (t === 0) {
      ans.push(path.slice())
      return
    }
    for (let i = start; i < candidates.length; i++) {
      if (t - candidates[i] < 0) break
      if (i > start && candidates[i - 1] === candidates[i]) continue
      path.push(candidates[i])
      dfs(path, t - candidates[i], i + 1)
      path.pop()
    }
  }
  dfs([], target, 0)
  console.log(ans)
  return ans
}

combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)
combinationSum2([2, 5, 2, 1, 2], 5)
