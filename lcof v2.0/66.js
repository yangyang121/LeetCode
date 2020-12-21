function constructArr(a) {
  if (!a.length) return []
  const ans = new Array(a.length)
  let temp = 1
  ans[0] = 1
  for (let i = 1; i < ans.length; i++) {
    ans[i] = ans[i - 1] * a[i - 1]
  }
  for (let i = ans.length - 2; i >= 0; i--) {
    temp *= a[i + 1]
    ans[i] *= temp
  }
  return ans
}
