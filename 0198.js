/**
 * @param {number[]} nums
 * @return {number}
 * dp[i]=max(dp[i−2]+nums[i],dp[i−1])
 */
var rob = function (nums) {
  if (!nums || nums.length === 0) return 0;
  const len = nums.length;
  if (len === 1) return nums[0];
  let first = nums[0];
  let second = Math.max(nums[0], nums[1]);
  for (let i = 2; i < len; i++) {
    const temp = second;
    second = Math.max(nums[i] + first, second);
    first = temp;
  }
  return second;
};

rob([1, 2, 3, 1]);
