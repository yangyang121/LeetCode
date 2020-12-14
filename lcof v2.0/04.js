function findNumberIn2DArray(matrix, target) {
  const n = matrix.length
  if (n === 0) return false
  const m = matrix[0].length
  let left = 0
  let top = n - 1
  while (left < m && top >= 0) {
    const c = matrix[top][left]
    if (c > target) {
      top--
    } else if (c < target) {
      left++
    } else {
      return true
    }
  }
  return false
}
