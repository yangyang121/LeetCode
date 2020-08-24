// 也可以使用第一题的方法，此处使用双指针
// note:不能 low <= high, numbers = [2, 3, 5], target = 6 会有问题
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
    let sum = numbers[low] + numbers[high];
    if (sum > target) {
      high--;
    } else if (sum < target) {
      low++;
    } else {
      return [low + 1, high + 1];
    }
  }
  return [-1, -1]
};
