/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function (k, n) {
  if (k > n) return [];
  const ans = [];
  function dfs(path, t, start) {
    if (path.length === k) {
      t === 0 && ans.push(path.slice());
      return;
    }
    for (let i = start; i <= 9; i++) {
      path.push(i);
      dfs(path, t - i, i + 1);
      path.pop();
    }
  }
  dfs([], n, 1);
  console.log(ans);
  return ans;
};

combinationSum3(3, 7);
combinationSum3(3, 9);
