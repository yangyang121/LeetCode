/**
 * @param {string} s
 * @return {number[][]}
 */
var largeGroupPositions = function (s) {
  const ans = []
  let i = 0
  let j = 0
  while (j < s.length) {
    if (s[j] !== s[i]) {
      if (j - i >= 3) ans.push([i, j - 1])
      i = j
    }
    j++
  }
  if (s[j - 1] === s[i] && j - i >= 3) ans.push([i, j - 1])
  console.log(ans)
  return ans
}

largeGroupPositions("abbxxxxzzy")
largeGroupPositions("abcdddeeeeaabbbcd")
largeGroupPositions("abc")
largeGroupPositions("aba")
