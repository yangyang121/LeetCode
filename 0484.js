/**
 * @param {string} s
 * @return {number[]}
 */
var findPermutation = function (s) {
  function reverse(start, end) {
    for (let i = 0; i < (end - start) >> 1; i++) {
      ;[ans[start + i], ans[end - i - 1]] = [ans[end - i - 1], ans[start + i]]
    }
  }
  const ans = new Array(s.length + 1)
  for (let i = 0; i < ans.length; i++) {
    ans[i] = i + 1
  }
  let i = 1
  while (i <= s.length) {
    let j = i
    while (i <= s.length && s[i - 1] === "D") {
      i++
    }
    reverse(j - 1, i)
    i++
  }
  console.log(ans)
  return ans
}

findPermutation("DDI")
