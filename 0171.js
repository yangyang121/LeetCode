/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
  let ans = 0;
  const len = s.length;
  let i = len - 1;
  while (i >= 0) {
    const num = s[i].charCodeAt() - "A".charCodeAt() + 1;
    ans += num * 26 ** (len - i - 1);
    i--;
  }
  console.log(ans);
};

titleToNumber("A");
titleToNumber("AB");
titleToNumber("ZY");
