/**
 * @param {string} s
 * @param {string} t
 * @param {number} maxCost
 * @return {number}
 * 滑动窗口模板：https://leetcode-cn.com/problems/get-equal-substrings-within-budget/solution/fen-xiang-zhen-cang-de-hua-dong-chuang-k-e3rd/
 */
var equalSubstring = function (s, t, maxCost) {
  const n = s.length
  const cost = []
  for (let i = 0; i < n; i++) {
    cost.push(Math.abs(s[i].charCodeAt() - t[i].charCodeAt()))
  }
  let left = 0
  let right = 0
  let ans = 0
  let sum = 0
  while (right < n) {
    sum += cost[right]
    while (sum > maxCost) {
      sum -= cost[left++]
    }
    right++
    ans = Math.max(ans, right - left)
  }
  return ans
}
