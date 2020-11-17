/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let pre = 0;
  for (const x of nums) {
    pre = Math.max(x, pre + x);
    ans = Math.max(ans, pre);
  }
  return ans;
};
