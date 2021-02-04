/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  const n = nums.length
  let sum = 0
  for (let i = 0; i < k; i++) {
    sum += nums[i]
  }
  let ans = sum
  for (let i = k; i < n; i++) {
    sum += nums[i] - nums[i - k]
    ans = Math.max(sum, ans)
  }
  return ans / k
}
