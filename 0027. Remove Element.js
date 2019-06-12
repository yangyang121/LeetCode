// 更好的思路：记录不等于 val 的值
var removeElement = function(nums, val) {
  let j = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i]
      j++
    }
  }
  console.log(nums, j)
  return j
}
removeElement([1], 1)
removeElement([3, 2, 2, 3], 3)
removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)
