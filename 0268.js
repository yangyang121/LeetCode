// 高斯求和：（首项 + 尾项） * 项数 / 2
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  const len = nums.length;
  let result = (len * (len + 1)) / 2;
  for (let i = 0; i < nums.length; i++) {
    result -= nums[i];
  }
  console.log(result);
  return result;
};

missingNumber([3, 0, 1]);
missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]);
