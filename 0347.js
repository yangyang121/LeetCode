/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  const map = new Map();
  let ans = [];
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }
  const list = Array.from({ length: nums.length + 1 });
  for (let [key] of map) {
    const i = map.get(key);
    if (!list[i]) {
      list[i] = [];
    }
    list[i].push(key);
  }
  for (let i = list.length - 1; i >= 0 && ans.length < k; i--) {
    if (!list[i]) continue;
    ans = ans.concat(list[i]);
  }
  return ans;
};

topKFrequent([4, 1, -1, 2, -1, 2, 3], 2);
