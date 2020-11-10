/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  if (nums.length < 2) return nums;
  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (j > 0 && nums[j] <= nums[i]) {
      j--;
    }
    [nums[j], nums[i]] = [nums[i], nums[j]];
  }
  let l = i + 1;
  let r = nums.length - 1;
  while (l < r) {
    [nums[l], nums[r]] = [nums[r], nums[l]];
    l++;
    r--;
  }
  console.log(nums);
};

nextPermutation([1, 2, 3]);
nextPermutation([3, 2, 1]);
nextPermutation([5, 7, 6]);
