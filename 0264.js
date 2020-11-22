/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let a = 0
  let b = 0
  let c = 0
  const dp = new Array(n)
  dp[0] = 1
  for (let i = 1; i < n; i++) {
    const n2 = dp[a] * 2
    const n3 = dp[b] * 3
    const n5 = dp[c] * 5
    dp[i] = Math.min.apply(null, [n2, n3, n5])
    if (dp[i] === n2) a++
    if (dp[i] === n3) b++
    if (dp[i] === n5) c++
  }
  console.log(dp)
  return dp[n - 1]
}

nthUglyNumber(10)
