/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
var addToArrayForm = function (A, K) {
  const ans = []
  const n = A.length
  for (let i = n - 1; i >= 0; --i) {
    let sum = A[i] + (K % 10)
    K = Math.floor(K / 10)
    if (sum >= 10) {
      K++
      sum -= 10
    }
    ans.push(sum)
  }
  while (K > 0) {
    ans.push(K % 10)
    K = Math.floor(K / 10)
  }
  ans.reverse()
  return ans
}
