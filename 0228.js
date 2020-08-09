/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  const result = [];
  let start = 0;
  let end = 0;
  while (end < nums.length) {
    if (nums[end + 1] === undefined || nums[end + 1] - nums[end] !== 1) {
      if (start === end) {
        result.push(String(nums[end]));
      } else {
        result.push(`${nums[start]}->${nums[end]}`);
      }
      start = end + 1;
    }
    end++;
  }
  console.log(result);
  return result;
};

summaryRanges([0, 1, 2, 4, 5, 7]);
summaryRanges([0, 2, 3, 4, 6, 8, 9]);
