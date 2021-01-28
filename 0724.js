/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  const total = nums.reduce((prev, next) => prev + next, 0)
  let sum = 0
  for (let i = 0; i < nums.length; i++) {
    if (total - nums[i] - sum === sum) return i
    sum += nums[i]
  }
  return -1
}
