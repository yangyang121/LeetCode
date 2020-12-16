function spiralOrder(matrix) {
  const n = matrix.length
  if (n === 0) return []
  const m = matrix[0].length
  if (m < 2) return matrix[0]
  let left = 0
  let right = m - 1
  let top = 0
  let bottom = n - 1
  const ans = []
  while (left <= right && top <= bottom) {
    for (let i = left; i <= right; i++) {
      ans.push(matrix[top][i])
    }
    for (let i = top + 1; i <= bottom; i++) {
      ans.push(matrix[i][right])
    }
    if (left < right && top < bottom) {
      for (let i = right - 1; i >= left; i--) {
        ans.push(matrix[bottom][i])
      }
      for (let i = bottom - 1; i > top; i--) {
        ans.push(matrix[i][left])
      }
    }
    left++
    right--
    top++
    bottom--
  }
  return ans
}
