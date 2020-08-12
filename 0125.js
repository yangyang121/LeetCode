/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const reg = /^[A-Za-z0-9]+$/;
  let i = 0;
  let j = s.length - 1;
  while (i < j) {
    if (reg.test(s[i]) && reg.test(s[j])) {
      if (s[i].toUpperCase() === s[j].toUpperCase()) {
        i++;
        j--;
      } else {
        console.log(false);
        return false;
      }
    } else if (reg.test(s[i])) {
      j--;
    } else {
      i++;
    }
  }
  console.log(true);
  return true
};

isPalindrome("A man, a plan, a canal: Panama");
isPalindrome("race a car");
