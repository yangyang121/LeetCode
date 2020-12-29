/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s
  const len = s.length
  let ans = ""
  function spread(left, right) {
    let i = left
    let j = right
    while (i >= 0 && j < len) {
      if (s[i] === s[j]) {
        i--
        j++
      } else {
        break
      }
    }
    return s.substring(i + 1, j)
  }
  for (let i = 0; i < len; i++) {
    const oddStr = spread(i, i)
    const evenStr = spread(i, i + 1)
    const str = oddStr.length > evenStr.length ? oddStr : evenStr
    if (str.length > ans.length) ans = str
  }
  console.log(ans)
  return ans
}

longestPalindrome("babad")
longestPalindrome("cbbd")
