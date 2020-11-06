/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const used = {};
  function dfs(path) {
    if (path.length === nums.length) {
      ans.push(path.slice());
      return;
    }
    for (const num of nums) {
      if (used[num]) continue;
      path.push(num);
      used[num] = true;
      dfs(path);
      path.pop();
      used[num] = false;
    }
  }
  dfs([]);
  console.log(ans)
  return ans;
};

permute([1, 2, 3]);
