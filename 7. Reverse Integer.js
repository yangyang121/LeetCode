// 数字范围是 [-2147483648, 2147483647]，此范围对输入x和输出的result同时适用
var reverse = function(x) {
  if (x >= 2147483647 || x <= -2147483648) return 0
  const str = x + ""
  let a = ""
  let newStr = str
  if (str[0] === "-") {
    a = "-"
    newStr = str.replace("-", "")
  }
  const arr = newStr.split("")
  const result = parseFloat(a + arr.reverse().join(""))
  if (result >= 2147483647 || result <= -2147483648) return 0
  return result
}
reverse(123) //321
reverse(-123) //-321
