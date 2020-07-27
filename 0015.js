/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const result = [];
  const len = nums.length;
  if (!nums || len < 3) return result;
  // 先排序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    // 第一个数大于0一定没有符合条件的，退出
    if (nums[i] > 0) break;
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1;
    let right = len - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        result.push([nums[i], nums[left], nums[right]]);
        // 去重
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return result;
};

threeSum([-1, 0, 1, 2, -1, -4]);
