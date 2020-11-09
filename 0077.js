/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  if (n < k) return [];
  const ans = [];
  function dfs(path, start) {
    if (path.length === k) {
      ans.push(path.slice());
      return;
    }
    for (let i = start; i <= n - (k - path.length) + 1; i++) {
      path.push(i);
      dfs(path, i + 1);
      path.pop();
    }
  }
  dfs([], 1);
  console.log(ans);
  return ans;
};

combine(4, 2);
