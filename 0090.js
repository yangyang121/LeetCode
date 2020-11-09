/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  if (!nums.length) return [];
  const ans = [];
  nums.sort((a, b) => a - b);
  function dfs(path, start) {
    ans.push(path.slice());
    for (let i = start; i < nums.length; i++) {
      if (i > start && nums[i - 1] === nums[i]) continue;
      path.push(nums[i]);
      dfs(path, i + 1);
      path.pop();
    }
  }
  dfs([], 0);
  console.log(ans);
  return ans;
};

subsetsWithDup([1, 2, 2]);
