/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  if (!nums.length) return [];
  const ans = [];
  const used = {};
  nums.sort((a, b) => a - b);
  function dfs(path) {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      dfs(path);
      path.pop();
      used[i] = false;
    }
  }
  dfs([]);
  console.log(ans);
  return ans;
};

permuteUnique([1, 1, 2]);
permuteUnique([1, 2, 3]);
