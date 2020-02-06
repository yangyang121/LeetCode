/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let long = a.length > b.length ? a : b
  let short = a.length > b.length ? b : a
  let longLen = long.length - 1
  let shortLen = short.length - 1
  let result = ""
  let count = 0
  let sum = 0
  while (longLen >= 0) {
    sum = Number(long[longLen]) + Number(short[shortLen] || "") + count
    result = (sum % 2) + result
    count = Math.floor(sum / 2)
    longLen--
    shortLen--
  }
  if (count === 1) {
    result = 1 + result
  }
  return result
}

console.log(addBinary("11", "1"))
console.log(addBinary("1010", "1011"))
console.log(addBinary("11", "11"))
