/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    // 判断 nums[mid] 是属于前一个有序数组还是后一个有序数组
    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      if (nums[mid] < target && nums[right] >= target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};

search([4, 5, 6, 7, 0, 1, 2], 0);
search([4, 5, 6, 7, 0, 1, 2], 3);
search([6, 7, 0, 1, 2, 3, 4], 0);
search([6, 7, 0, 1, 2, 3, 4], 3);
