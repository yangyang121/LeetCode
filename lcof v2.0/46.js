function translateNum(num) {
  const src = num.toString()
  // let p = 0
  // let q = 0
  // let r = 1
  // for (let i = 0; i < src.length; i++) {
  //   p = q
  //   q = r
  //   if (i === 0) continue
  //   const pre = Number(src.substr(i - 1, 2))
  //   if (pre >= 10 && pre <= 25) {
  //     r += p
  //   }
  // }
  // return r
  const dp = [1]
  for (let i = 1; i < src.length; i++) {
    const pre = Number(src.substr(i - 1, 2))
    if (pre >= 10 && pre <= 25) {
      dp[i] = dp[i - 1] + (dp[i - 2] || 1)
    } else {
      dp[i] = dp[i - 1]
    }
  }
  return dp[dp.length - 1]
}
