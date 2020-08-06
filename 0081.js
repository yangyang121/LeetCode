/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      console.log(true)
      return true;
    }
    if (nums[left] === nums[mid]) {
        left++;
        continue;
    }
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (target > nums[mid] && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  console.log(false)
  return false
};

search([2, 5, 6, 0, 0, 1, 2], 0);
search([2, 5, 6, 0, 0, 1, 2], 3);
