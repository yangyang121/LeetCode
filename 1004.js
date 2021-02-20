/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 * Note:可理解为寻找包含 K 个 0 的最长子序列
 */
var longestOnes = function (A, K) {
  let i = 0
  let j = 0
  let cnt = 0
  let ans = 0
  while (j < A.length) {
    if (A[j] === 0) {
      cnt++
    }
    while (cnt > K) {
      if (A[i++] === 0) {
        cnt--
      }
    }
    ans = Math.max(j - i + 1, ans)
    j++
  }
  return ans
}
