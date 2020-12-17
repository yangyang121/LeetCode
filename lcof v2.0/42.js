function maxSubArray(nums) {
  let pre = nums[0]
  let ans = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (pre + nums[i] < nums[i]) {
      pre = nums[i]
    } else {
      pre += nums[i]
    }
    ans = Math.max(pre, ans)
  }
  return ans
}
