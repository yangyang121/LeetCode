/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (!nums.length) return 0;
  function leftBound() {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = ((left + right) / 2) | 0;
      if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }
    if (nums[left] !== target) return -1;
    return left;
  }
  function rightBound() {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
      const mid = (((left + right) / 2) | 0) + 1;
      if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid;
      }
    }
    return right;
  }
  const leftPosition = leftBound();
  if (leftPosition === -1) return 0;
  const rightPosition = rightBound();
  return rightPosition - leftPosition + 1;
};
