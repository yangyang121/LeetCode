/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first = Number.MIN_SAFE_INTEGER;
  let second = Number.MIN_SAFE_INTEGER;
  let third = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === first || nums[i] === second || nums[i] === third) continue;
    if (nums[i] > first) {
      third = second;
      second = first;
      first = nums[i];
    } else if (nums[i] > second) {
      third = second;
      second = nums[i];
    } else if (nums[i] > third) {
      third = nums[i];
    }
  }
  return third === Number.MIN_SAFE_INTEGER ? first : third;
};

thirdMax([3, 2, 1]);
thirdMax([1, 2, 3]);
thirdMax([1, 2]);
thirdMax([2, 2, 3, 1]);
