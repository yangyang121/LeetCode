/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  const left = new Map()
  const right = new Map()
  const counter = new Map()
  let count = 0
  let ans = Number.MAX_SAFE_INTEGER
  for (let i = 0; i < nums.length; i++) {
    if (!left.has(nums[i])) {
      left.set(nums[i], i)
    }
    right.set(nums[i], i)
    counter.set(nums[i], (counter.get(nums[i]) || 0) + 1)
    count = Math.max(count, counter.get(nums[i]))
  }
  for (let [k, v] of counter) {
    if (v === count) {
      ans = Math.min(ans, right.get(k) - left.get(k) + 1)
    }
  }
  return ans
}
