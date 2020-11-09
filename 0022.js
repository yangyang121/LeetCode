/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  function dfs(path, left, right) {
    if (left === 0 && right === 0) {
      ans.push(path);
      return;
    }
    if (left > right) return;
    if (left > 0) {
      dfs(path + "(", left - 1, right);
    }
    if (right > 0) {
      dfs(path + ")", left, right - 1);
    }
  }
  dfs("", n, n);
  console.log(ans);
  return ans;
};

generateParenthesis(3);
