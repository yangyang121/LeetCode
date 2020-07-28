/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  const len = nums.length;
  nums.sort((a, b) => a - b);
  let result = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(sum - target) < Math.abs(result - target)) {
        result = sum;
      }
      if (sum > target) {
        right--;
      } else if (sum < target) {
        left++;
      } else {
        return result;
      }
    }
  }
  return result;
};

threeSumClosest([-1, 2, 1, -4], 1);
