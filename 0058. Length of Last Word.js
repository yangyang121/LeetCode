/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  if (!s.trim()) return 0
  const arr = s.split(" ")
  let result = 0
  arr.reverse().forEach(item => {
    console.log(item)
    if (item && !resule) {
      result = item.length
    }
  })
  return result
}

console.log(lengthOfLastWord("Today is a nice day"))
