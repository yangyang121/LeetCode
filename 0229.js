/**
 * @param {number[]} nums
 * @return {number[]}
 * 如果至多选一个代表，那他的票数至少要超过一半（⌊ 1/2 ⌋）的票数；
 * 如果至多选两个代表，那他们的票数至少要超过⌊ 1/3 ⌋的票数；
 * 如果至多选m个代表，那他们的票数至少要超过⌊ 1/(m+1) ⌋的票数。
 * 反之也成立
 */
var majorityElement = function (nums) {
  const result = [];
  let one = nums[0];
  let two = nums[0];
  let count_one = 0;
  let count_two = 0;
  const condition = Math.floor(nums.length / 3);
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === one) {
      count_one++;
    } else if (element === two) {
      count_two++;
    } else {
      if (count_one === 0) {
        one = element;
        count_one++;
      } else if (count_two === 0) {
        two = element;
        count_two++;
      } else {
        count_one--;
        count_two--;
      }
    }
  }
  count_one = 0;
  count_two = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    if (element === one) {
      count_one++;
    } else if (element === two) {
      count_two++;
    }
  }
  if (count_one > condition) result.push(one);
  if (count_two > condition) result.push(two);
  console.log(result);
  return result;
};

majorityElement([3, 2, 3]);
majorityElement([1, 1, 1, 3, 3, 2, 2, 2]);
