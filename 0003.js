/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) return s.length;
  let ans = 0;
  const map = {};
  let left = 0;
  let i = 0;
  while (i < s.length) {
    if (map[s[i]] !== undefined) {
      left = Math.max(left, map[s[i]] + 1);
    }
    map[s[i]] = i;
    i++;
    ans = Math.max(ans, i - left);
  }
  console.log(ans);
};
lengthOfLongestSubstring("abcabcbb");
lengthOfLongestSubstring("bbbbb");
lengthOfLongestSubstring("pwwkew");
lengthOfLongestSubstring("dedf");
