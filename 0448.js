// 可以用哈希法，但是题目规定了空间
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const element = Math.abs(nums[i]);
    if (nums[element - 1] > 0) nums[element - 1] *= -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) result.push(i + 1);
  }
  return result;
};

findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]);
