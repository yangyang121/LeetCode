// 注意审题
var removeDuplicates = function(nums) {
  if (nums.length === 0 || nums.length === 1) return nums.length
  let j = 0
  for (let i = 1; i < nums.length; i++) {
    if (nums[j] !== nums[i]) {
      j++
      nums[j] = nums[i]
    }
  }
  console.log(nums)
  return j + 1
}
removeDuplicates([1, 1])
removeDuplicates([1, 1, 2])
removeDuplicates([1, 1, 1])
removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
