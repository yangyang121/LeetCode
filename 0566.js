/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (nums, r, c) {
  const n = nums.length
  if (!n) return nums
  const m = nums[0].length
  if (!m || n * m !== r * c) return nums
  const ans = []
  let sub = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      sub.push(nums[i][j])
      if (sub.length === c) {
        ans.push(sub.slice())
        sub = []
      }
    }
  }
  return ans
}
