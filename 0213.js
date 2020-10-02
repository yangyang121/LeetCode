/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  function fn(nums) {
    if (nums.length === 1) return nums[0];
    let first = nums[0];
    let second = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      const temp = second;
      second = Math.max(first + nums[i], second);
      first = temp;
    }
    return second;
  }
  if (!Array.isArray(nums) || !nums.length) return 0;
  if (nums.length === 1) return nums[0];

  return Math.max(
    fn(nums.slice(0, nums.length - 1)),
    fn(nums.slice(1, nums.length))
  );
};
