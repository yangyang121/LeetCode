var romanToInt = function(s) {
  var roman = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 }
  var result = 0

  for (var i = 0; i < s.length; i++) {
    //console.log(roman[s[i]]);
    if (roman[s[i]] < roman[s[i + 1]]) {
      result -= roman[s[i]]
    } else {
      result += roman[s[i]]
    }
  }
  console.log(result)
  return result
}
romanToInt()
