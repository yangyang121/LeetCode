var isPalindrome = function(x) {
  if (x < 0) {
    return false
  } else if (x < 10) {
    return true
  } else if (x === Number(x.toString().split('').reverse().join(''))) {
      return true
  }
  return false
}
isPalindrome(232)
