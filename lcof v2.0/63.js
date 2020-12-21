function maxProfit(prices) {
  let ans = 0
  let min = Number.MAX_SAFE_INTEGER
  for (const c of prices) {
    if (c < min) {
      min = c
    } else if (c - min > ans) {
      ans = c - min
    }
  }
  return ans
}
