// 使用摩尔投票法，也可以使用哈希法（object）
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let cand_num = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === cand_num) {
      count++;
    } else {
      if (count === 0) {
        cand_num = nums[i];
        count++;
      } else {
        count--;
      }
    }
  }
  return cand_num;
};

majorityElement([3, 2, 3]);
majorityElement([2, 2, 1, 1, 1, 2, 2]);
