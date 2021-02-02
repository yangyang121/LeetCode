/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const len = s.length
  if (len < 2) return len
  let left = 0
  let right = 0
  let ans = 0
  let maxCount = 0
  const arr = new Array(26).fill(0)
  while (right < len) {
    arr[s[right].charCodeAt() - "A".charCodeAt()]++
    maxCount = Math.max(maxCount, arr[s[right].charCodeAt() - "A".charCodeAt()])
    right++

    if (right - left > maxCount + k) {
      arr[s[left].charCodeAt() - "A".charCodeAt()]--
      left++
    }
    ans = Math.max(ans, right - left)
  }
  return ans
}

characterReplacement("ABAB", 2)
characterReplacement("AABABBA", 1)
