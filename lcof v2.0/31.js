function validateStackSequences(pushed, popped) {
  const stack = []
  let i = 0
  for (const n of pushed) {
    stack.push(n)
    while (stack.length && stack[stack.length - 1] === popped[i]) {
      stack.pop()
      i++
    }
  }
  return !stack.length
}
