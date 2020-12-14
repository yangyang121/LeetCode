function findRepeatNumber(nums) {
  let i = 0
  while (i < nums.length) {
    if (nums[i] === i) {
      i++
      continue
    }
    if (nums[i] === nums[nums[i]]) return nums[i]
    const temp = nums[i]
    nums[i] = nums[temp]
    nums[temp] = temp
  }
  return -1
}
