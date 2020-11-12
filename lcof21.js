/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
  if (nums.length < 2) return nums;
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    if (nums[left] % 2 !== 0) {
      left++;
      continue;
    }
    if (nums[right] % 2 === 0) {
      right--;
      continue;
    }
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
  return nums;
};
