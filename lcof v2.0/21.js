function exchange(nums) {
  let i = 0
  let j = nums.length - 1
  while (i < j) {
    if (nums[i] % 2 !== 0) {
      i++
      continue
    }
    if (nums[j] % 2 === 0) {
      j--
      continue
    }
    ;[nums[i], nums[j]] = [nums[j], nums[i]]
    i++
    j--
  }
  return nums
}
