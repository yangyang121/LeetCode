/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  function randomPartition(l, r) {
    const p = Math.floor(Math.random() * (r - l)) + l
    ;[nums[p], nums[r]] = [nums[r], nums[p]]
    return partition(l, r)
  }
  function partition(l, r) {
    const x = nums[r]
    let i = l - 1
    for (let j = l; j < r; j++) {
      if (nums[j] <= x) {
        i++
        ;[nums[i], nums[j]] = [nums[j], nums[i]]
      }
    }
    console.log(i, r)
    i++
    ;[nums[i], nums[r]] = [nums[r], nums[i]]
    return i
  }
  let left = 0
  let right = nums.length - 1
  let index = randomPartition(left, right)
  k = nums.length - k
  while (index !== k) {
    if (index < k) {
      left = index + 1
    } else {
      right = index - 1
    }
    index = randomPartition(left, right)
  }
  console.log(nums)
  return nums[k]
}

findKthLargest([3, 2, 1, 5, 6, 4], 2)
