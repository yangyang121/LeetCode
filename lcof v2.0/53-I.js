function search(nums, target) {
  function leftBount() {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
      const mid = (left + right) >> 1
      if (nums[mid] < target) {
        left = mid + 1
      } else {
        right = mid
      }
    }
    if (nums[left] !== target) return -1
    return left
  }
  function rightBount() {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
      const mid = ((left + right) >> 1) + 1
      if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid
      }
    }
    if (nums[left] !== target) return -1
    return left
  }
  const leftPosition = leftBount()
  if (leftPosition === -1) return 0
  const rightPosition = rightBount()
  return rightPosition - leftPosition + 1
}
