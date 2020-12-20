function twoSum(nums, target) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] + nums[j] > target) {
      j--
    } else if (nums[i] + nums[j] < target) {
      i++
    } else {
      return [nums[i], nums[j]]
    }
  }
  return [-1, -1]
}
