/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  function leftBound() {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
      const mid = ((left + right) / 2) | 0
      if (nums[mid] < target) {
        left = mid + 1
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        right = mid
      }
    }
    if (left >= nums.length || nums[left] !== target) return -1
    return left
  }
  function rightBound() {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
      const mid = (((left + right) / 2) | 0) + 1
      if (nums[mid] > target) {
        right = mid - 1
      } else if (nums[mid] < target) {
        left = mid + 1
      } else {
        left = mid
      }
    }
    if (right < 0 || nums[right] !== target) return -1
    return right
  }
  const leftPosition = leftBound()
  if (leftPosition === -1) return [-1, -1]
  const rightPosition = rightBound()
  return [leftPosition, rightPosition]
}
