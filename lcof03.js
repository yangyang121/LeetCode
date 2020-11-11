/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
  let i = 0;
  while (i < nums.length) {
    if (i === nums[i]) {
      i++;
      continue;
    }
    if (nums[nums[i]] === nums[i]) return nums[i];
    const tmp = nums[i];
    nums[i] = nums[tmp];
    nums[tmp] = tmp;
  }
  return -1;
};

findRepeatNumber([2, 3, 1, 0, 2, 5, 3]);
