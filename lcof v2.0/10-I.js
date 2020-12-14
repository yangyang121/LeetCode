function fib(n) {
  if (n === 0) return 0
  if (n < 3) return 1
  let a = 1
  let b = 1
  let sum = 0
  for (let i = 3; i <= n; i++) {
    sum = (a + b) % 1000000007
    a = b
    b = sum
  }
  return sum
}
