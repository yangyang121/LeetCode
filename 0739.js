/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
  const ans = Array.from({ length: T.length }).fill(0)
  const stack = []
  let i = 0
  while (i < T.length) {
    while (stack.length && T[stack[stack.length - 1]] < T[i]) {
      const prevIndex = stack.pop()
      ans[prevIndex] = i - prevIndex
    }
    stack.push(i++)
  }
  console.log(ans)
  return ans
}

dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
