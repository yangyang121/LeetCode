var longestCommonPrefix = function (strs) {
  if (!Array.isArray(strs) || strs.length === 0) return "";
  if (strs.length === 1) return strs[0];
  let ans = strs[0];
  for (let i = 1; i < strs.length; i++) {
    let j = 0;
    while (j < strs[i].length) {
      if (ans[j] !== strs[i][j]) break;
      j++;
    }
    ans = ans.substring(0, j);
    if (ans === "") return ans;
  }
  console.log(ans);
  return ans;
};
longestCommonPrefix(["", ""]);
longestCommonPrefix(["c", "c"]);
longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["flower", "flow", "floweight"]);
longestCommonPrefix(["dog", "racecar", "car"]);
