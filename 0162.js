/**
 * @param {number[]} nums
 * @return {number}
 * 首先要注意题目条件，在题目描述中出现了 nums[-1] = nums[n] = -∞，
 * 这就代表着只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
 * 根据上述结论，我们就可以使用二分查找找到峰值
 * 查找时，左指针 l，右指针 r，以其保持左右顺序为循环条件
 * 根据左右指针计算中间位置 m，并比较 m 与 m+1 的值，
 * 如果 m 较大，则左侧存在峰值，r = m，如果 m + 1 较大，则右侧存在峰值，l = m + 1
 */
var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  console.log(left)
  return left;
};

findPeakElement([1, 2, 3, 1]);
findPeakElement([1, 2, 1, 3, 5, 6, 4]);
