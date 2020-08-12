/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const element = Math.abs(nums[i]);
    if (nums[element - 1] > 0) {
      nums[element - 1] *= -1;
    } else {
      result.push(element);
    }
  }
  console.log(result)
  return result
};

findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]);
