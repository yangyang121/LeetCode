var countAndSay = function(n) {
  if (n < 1 || n > 30) return
  if (n === 1) return "1"
  let idx = 1
  let result = "1"
  while (idx < n) {
    let lastResult = result
    result = ""
    let i = 0
    let j = 0
    while (i < lastResult.length) {
      if (lastResult[i] === lastResult[j]) {
        i++
      } else {
        result = result + (i - j) + lastResult[j]
        j = i
      }
    }
    result = result + (i - j) + lastResult[j]
    idx++
  }
  console.log(result)
  return result
}
countAndSay(2)
countAndSay(3)
countAndSay(4)
countAndSay(5)
