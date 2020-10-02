/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  if (s[0] === "0") return 0;
  let pre = 1;
  let curr = 1;
  for (let i = 1; i < s.length; i++) {
    const temp = curr;
    if (s[i] === "0") {
      if (s[i - 1] === "1" || s[i - 1] === "2") {
        curr = pre;
      } else {
        return 0;
      }
    } else if (
      s[i - 1] === "1" ||
      (s[i - 1] === "2" && Number(s[i]) >= 1 && Number(s[i]) <= 6)
    ) {
      curr = curr + pre;
    }
    pre = temp;
  }
  return curr;
};
