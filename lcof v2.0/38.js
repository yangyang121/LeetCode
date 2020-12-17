function permutation(s) {
  if (!s.length) return []
  const ans = []
  const used = {}
  const arr = s.split("")
  arr.sort((a, b) => a.charCodeAt() - b.charCodeAt())
  function helper(path) {
    if (path.length === arr.length) {
      ans.push(path.join(""))
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (used[i]) continue
      if (i > 0 && arr[i] === arr[i - 1] && !used[i - 1]) continue
      path.push(arr[i])
      used[i] = true
      helper(path)
      path.pop()
      used[i] = false
    }
  }
  helper([])
  return ans
}
