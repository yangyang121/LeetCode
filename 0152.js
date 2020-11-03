/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
  let max = nums[0];
  let min = nums[0];
  let ans = nums[0];
  for (let i = 1; i < nums.length; i++) {
    const mx = max;
    const mn = min;
    max = Math.max(mx * nums[i], Math.max(nums[i], mn * nums[i]));
    min = Math.min(mn * nums[i], Math.min(nums[i], mx * nums[i]));
    ans = Math.max(max, ans);
  }
  console.log(ans);
  return ans;
};

maxProduct([2, 3, -2, 4]);
maxProduct([-2, 0, -1]);
maxProduct([-2, 3, -1]);
