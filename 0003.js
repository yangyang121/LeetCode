/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0 || s.length === 1) return s.length
  const map = new Map()
  let left = 0
  let i = 0
  let ans = 0
  while (i < s.length) {
    if (map.has(s[i])) {
      // "abba"
      left = Math.max(left, map.get(s[i]) + 1)
    }
    map.set(s[i], i)
    i++
    ans = Math.max(ans, i - left)
  }
  return ans
}
lengthOfLongestSubstring("abcabcbb")
lengthOfLongestSubstring("bbbbb")
lengthOfLongestSubstring("pwwkew")
lengthOfLongestSubstring("abba")
