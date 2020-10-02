/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (!s || !s.length) return "";
  if (s.length === 1) return s;
  const dp = [];
  const len = s.length;
  let ans = "";
  for (let i = 0; i < len; i++) {
    dp.push(Array.from({ length: len }).fill(false));
  }
  for (let i = 0; i < len; i++) {
    for (let j = 0; j + i < len; j++) {
      const k = i + j;
      if (i === 0) {
        dp[j][k] = true;
      } else if (i === 1) {
        dp[j][k] = s[k] === s[j];
      } else {
        dp[j][k] = dp[j + 1][k - 1] && s[k] === s[j];
      }
      if (dp[j][k] && k + 1 > ans.length) ans = s.substring(j, k + 1);
    }
  }
  return ans;
};
