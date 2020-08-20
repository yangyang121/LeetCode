/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    if (nums[middle] < target) {
      low = middle + 1;
    } else if (nums[middle] > target) {
      high = middle - 1;
    } else {
      return middle;
    }
  }
  return low;
};

searchInsert([1, 3, 5, 6], 5);
searchInsert([1, 3, 5, 6], 2)
searchInsert([1, 3, 5, 6], 4)
searchInsert([1, 3, 5, 6], 0)
searchInsert([1, 3, 5, 6], 7)
