/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  if (nums.length === 1) return nums[0];
  let left = 0;
  let right = nums.length - 1;
  if (nums[right] > nums[0]) return nums[0];
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] >= nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(nums[left])
  return nums[left];
};

findMin([3, 4, 5, 1, 2]);
findMin([4, 5, 6, 7, 0, 1, 2]);
