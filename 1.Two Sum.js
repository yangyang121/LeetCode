var twoSum = function(nums, target) {
  let index = 0
  for (var i = 0; i < nums.length; i++) {
    index = nums.indexOf(target - nums[i], i + 1)
    if (index !== -1) {
      return [i, index]
    }
  }
}
var nums = [3, 2, 4]
var target = 6
console.log(twoSum(nums, target)) //[2,7]
