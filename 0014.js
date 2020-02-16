var longestCommonPrefix = function(strs) {
  if (!Array.isArray(strs) || strs.includes("")) return ""
  if (strs.length === 0) {
    return ""
  } else if (strs.length === 1) {
    return strs[0]
  }
  const item = strs[0]
  const array = strs.slice(1)
  let result = ""
  let resIndex = 0
  let allTrue = true
  while (allTrue) {
    if (!array.every(element => element.startsWith(result))) {
      allTrue = false
      result = result.slice(0, -1)
      break
    }
    if (++resIndex > item.length) {
      allTrue = false
    } else {
      result = item.slice(0, resIndex)
    }
  }
  return result
}
console.log(longestCommonPrefix(["", ""]))
console.log(longestCommonPrefix(["c", "c"]))
console.log(longestCommonPrefix(["flower", "flow", "flight"]))
console.log(longestCommonPrefix(["flower", "flow", "floweight"]))
console.log(longestCommonPrefix(["dog", "racecar", "car"]))
