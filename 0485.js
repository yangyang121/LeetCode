/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let result = 0;
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      j++;
      if (j > result) {
        result = j;
      }
    } else {
      j = 0;
    }
  }
  return result
};

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);
