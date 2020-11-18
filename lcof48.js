/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length < 2) return s.length;
  const map = {};
  let i = 0;
  let left = 0;
  let ans = 0;
  while (i < s.length) {
    if (map[s[i]] !== undefined) {
      left = Math.max(left, map[s[i]] + 1);
    }
    map[s[i]] = i;
    i++;
    ans = Math.max(ans, i - left);
  }
  return ans;
};
