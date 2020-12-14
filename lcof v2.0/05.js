function replaceSpace(s) {
  let i = 0
  let ans = ""
  while (i < s.length) {
    const c = s[i++]
    if (c === " ") {
      ans += "%20"
    } else {
      ans += c
    }
  }
  return ans
}
