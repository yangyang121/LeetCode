// 沿着数组移动 curr 指针，若nums[curr] = 0，则将其与 nums[p0]互换；若 nums[curr] = 2 ，则与 nums[p2]互换
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let p0 = 0;
  let p2 = nums.length - 1;
  let curr = 0;
  while (curr <= p2) {
    if (nums[curr] === 0) {
      [nums[p0], nums[curr]] = [nums[curr], nums[p0]];
      p0++;
      curr++;
    } else if (nums[curr] === 2) {
      [nums[p2], nums[curr]] = [nums[curr], nums[p2]];
      p2--;
    } else {
      curr++;
    }
  }
  console.log(nums);
};

sortColors([1, 2, 0]);
