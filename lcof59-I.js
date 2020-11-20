/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  const deque = [];
  const ans = [];
  for (let i = 1 - k, j = 0; j < nums.length; i++, j++) {
    if (i > 0 && nums[i - 1] === deque[0]) {
      deque.shift();
    }

    while (deque.length && nums[j] > deque[deque.length - 1]) {
      deque.pop();
    }

    deque.push(nums[j]);

    if (i >= 0) {
      ans.push(deque[0]);
    }
  }
  console.log(ans);
  return ans;
};

maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3);
