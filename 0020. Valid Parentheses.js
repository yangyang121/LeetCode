// 左侧符号都 push，右侧符号如果跟 result 的最后一个符号匹配就删除 result 最后一项
// 不匹配就 push，最后查看 result 长度是否为 0
var isValid = function(s) {
  if (s.length % 2 !== 0) return false
  const obj = {
    "}": "{",
    "]": "[",
    ")": "("
  }
  const result = []
  const arr = s.split("")
  for (let item of arr) {
    if (obj[item]) {
      if (result[result.length - 1] === obj[item]) {
        result.pop()
      } else {
        result.push(item)
      }
    } else {
      result.push(item)
    }
  }
  return result.length === 0
}
console.log(isValid("()"))
console.log(isValid("()[]{}"))
console.log(isValid("(]"))
console.log(isValid("([)]"))
console.log(isValid("{[]}"))
