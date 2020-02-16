var romanToInt = function(s) {
  const roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  let result = 0

  for (let i = 0; i < s.length; i++) {
    if (s[i + 1] && roman[s[i]] < roman[s[i + 1]]) {
      result -= roman[s[i]]
    } else {
      result += roman[s[i]]
    }
  }

  return result
}
console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
