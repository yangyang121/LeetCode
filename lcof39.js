/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let count = 0;
  let ans = nums[0];
  let num = nums[0];
  for (let i = 0; i < nums.length; i++) {
    num = nums[i];
    if (ans === num) {
      count++;
    } else {
      if (count === 0) {
        ans = num;
        count++;
      } else {
        count--;
      }
    }
  }
  return ans;
};
