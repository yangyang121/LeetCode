/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (s, nums) {
  let left = 0;
  let right = 0;
  let sum = 0;
  let min = Number.MAX_SAFE_INTEGER;
  while (right < nums.length) {
    sum += nums[right++];
    while (sum >= s) {
      min = Math.min(min, right - left);
      sum -= nums[left++];
    }
  }
  console.log(min)
  return min == Number.MAX_SAFE_INTEGER ? 0 : min;
};

minSubArrayLen(7, [2, 3, 1, 2, 4, 3]);
