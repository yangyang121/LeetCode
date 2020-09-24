/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let pre = 0;
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    ans = Math.max(ans, pre);
  });
  return ans;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
