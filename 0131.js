/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const ans = [];
  const path = [];
  function check(left, right) {
    while (left < right) {
      if (s[left] !== s[right]) return false;
      left++;
      right--;
    }
    return true;
  }
  function dfs(start) {
    if (start === s.length) {
      ans.push(path.slice());
      return;
    }
    for (let i = start; i < s.length; i++) {
      if (!check(start, i)) continue;
      path.push(s.substring(start, i + 1));
      dfs(i + 1);
      path.pop();
    }
  }
  dfs(0);
  console.log(ans);
  return ans;
};

partition("aab");
