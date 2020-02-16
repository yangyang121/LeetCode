// 暴力查找需要O(n)，可优化为二分查找
var searchInsert = function(nums, target) {
  let left = 0
  let right = nums.length - 1
  let mid = 0
  while (left <= right) {
    mid = Math.floor(left + right)
    if (nums[mid] === target) {
      return mid
    } else if (nums[mid] > target) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return left
}

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 4))
console.log(searchInsert([1, 3, 5, 6], 0))
console.log(searchInsert([1, 3, 5, 6], 7))
