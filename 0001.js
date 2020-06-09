var twoSum = function (nums, target) {
  const map = {};
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (map[target - element] !== undefined) {
      return [map[target - element], index];
    }
    map[element] = index;
  }
};
var nums = [3, 2, 4];
var target = 6;
console.log(twoSum(nums, target)); //[2,7]
