/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = true
  let dec = true
  for (let i = 0; i < A.length - 1; i++) {
    if (A[i] > A[i + 1]) {
      inc = false
    }
    if (A[i] < A[i + 1]) {
      dec = false
    }
  }
  return inc || dec
}
