function isStraight(nums) {
  let min = Number.MAX_SAFE_INTEGER
  let max = 0
  const s = new Set()
  for (const n of nums) {
    if (n === 0) continue
    if (n < min) min = n
    if (n > max) max = n
    if (s.has(n)) return false
    s.add(n)
  }
  return max - min < 5
}
