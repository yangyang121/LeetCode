var strStr = function(haystack, needle) {
  const len = needle.length
  const lenHay = haystack.length
  if (len > lenHay) return -1
  if (!needle || haystack === needle) return 0
  let start = 0
  let end = len - 1
  while (end < lenHay) {
    if (haystack.substring(start, end + 1) === needle) return start
    start++
    end++
  }
  return -1
}
console.log(strStr("hello", "lo"))
console.log(strStr("aaaaa", "aba"))
console.log(strStr("helollo", "ll"))
console.log(strStr("heol", "l"))
