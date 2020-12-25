/**
 * @param {string} s
 * @return {string}
 */
var smallestSubsequence = function (s) {
  const map = {}
  const seen = new Set()
  const stack = []
  for (let i = 0; i < s.length; i++) map[s[i]] = i
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    if (!seen.has(c)) {
      while (
        stack.length &&
        stack[stack.length - 1].charCodeAt() > c.charCodeAt() &&
        map[stack[stack.length - 1]] > i
      ) {
        seen.delete(stack.pop())
      }
      stack.push(c)
      seen.add(c)
    }
  }
  console.log(stack)
  return stack.join("")
}

smallestSubsequence("bcabc")
smallestSubsequence("cbacdcbc")
