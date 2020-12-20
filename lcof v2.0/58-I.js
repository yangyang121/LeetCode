function reverseWords(s) {
  let c = ""
  let ans = ""
  let i = 0
  let j = s.length - 1
  while (s[i] === " ") i++
  while (s[j] === " ") j--
  while (j >= i) {
    if (s[j] === " ") {
      ans += c + " "
      c = ""
    } else {
      c = s[j] + c
    }
    j--
  }
  ans += c
  return ans
}
