/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function partition(left, right) {
    const x = nums[left]
    let i = left
    let j = right
    while (i < j) {
      while (i < j && nums[j] > x) j--
      if (i < j) nums[i] = nums[j]
      while (i < j && nums[i] <= x) i++
      if (i < j) nums[j] = nums[i]
    }
    nums[i] = x
    return i
  }
  let left = 0
  let right = nums.length - 1
  let index = partition(left, right)
  k = nums.length - k
  while (index !== k) {
    if (index < k) {
      left = index + 1
    } else {
      right = index - 1
    }
    index = partition(left, right)
  }
  console.log(nums, k)
  return nums[k]
}

findKthLargest([3, 2, 1, 5, 6, 4], 4)
