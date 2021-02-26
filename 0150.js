/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const stack = []
  let i = 0
  let j = 0
  for (let n of tokens) {
    switch (n) {
      case "+":
        j = stack.pop()
        i = stack.pop()
        stack.push(i + j)
        break
      case "-":
        j = stack.pop()
        i = stack.pop()
        stack.push(i - j)
        break
      case "*":
        j = stack.pop()
        i = stack.pop()
        stack.push(i * j)
        break
      case "/":
        j = stack.pop()
        i = stack.pop()
        stack.push((i / j) | 0)
        break
      default:
        stack.push(Number(n))
        break
    }
  }
  return stack.pop()
}
