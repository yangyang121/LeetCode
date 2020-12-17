function lengthOfLongestSubstring(s) {
  if (s.length < 2) return s.length
  let ans = 0
  let i = 0
  let j = 0
  const map = {}
  while (j < s.length) {
    if (map[s[j]] !== undefined) {
      i = Math.max(i, map[s[j] + 1])
    }
    map[s[j]] = j
    j++
    ans = Math.max(ans, i - j)
  }
  return ans
}
