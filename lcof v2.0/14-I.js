function cuttingRope(n) {
  if (n <= 3) return n - 1
  const a = (n / 3) | 0
  const b = n % 3
  if (b === 0) return 3 ** a
  if (b === 1) return 3 ** (a - 1) * 4
  return 3 ** a * 2
}
