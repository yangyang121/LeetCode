/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const n = nums.length;
  let left = 0;
  let right = n - 1;
  let ans = -1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let cnt = 0;
    for (let i = 0; i < n; i++) {
      if (nums[i] <= mid) cnt++;
    }
    if (cnt <= mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
      ans = mid;
    }
  }
  console.log(ans);
  return ans
};

findDuplicate([1, 3, 4, 2, 2]);
findDuplicate([3, 1, 3, 4, 2]);
