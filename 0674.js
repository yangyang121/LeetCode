/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let ans = 0
  const n = nums.length
  let start = 0
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] <= nums[i - 1]) {
      start = i
    }
    ans = Math.max(ans, i - start + 1)
  }
  return ans
}

findLengthOfLCIS([1, 3, 5, 4, 7])
findLengthOfLCIS([1, 3, 5, 4, 7, 8, 9])
findLengthOfLCIS([1, 3, 5, 7])
findLengthOfLCIS([2, 2, 2, 2])
