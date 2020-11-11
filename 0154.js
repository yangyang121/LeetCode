/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let low = 0;
  let high = nums.length - 1;
  let povit = 0;
  while (low < high) {
    povit = Math.floor((low + high) / 2);
    if (nums[povit] < nums[high]) {
      high = povit;
    } else if (nums[povit] > nums[high]) {
      low = povit + 1;
    } else {
      high--;
    }
  }
  return nums[low];
};
