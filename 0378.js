/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  const n = matrix.length
  function check(mid) {
    let i = n - 1
    let j = 0
    let num = 0
    while (i >= 0 && j < n) {
      if (matrix[i][j] <= mid) {
        num += i + 1
        j++
      } else {
        i--
      }
    }
    return num >= k
  }

  let left = matrix[0][0]
  let right = matrix[n - 1][n - 1]
  while (left < right) {
    const mid = (left + right) >> 1
    if (check(mid)) {
      right = mid
    } else {
      left = mid + 1
    }
  }
  return left
}
