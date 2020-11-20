/**
 * @param {string} str
 * @return {number}
 */
var strToInt = function (str) {
  let ans = "";
  let i = 0;
  while (i < str.length) {
    const c = str[i++];
    if (c === " ") {
      if (ans) break;
    } else if (c === "-" || c === "+") {
      if (ans) break;
      ans += c;
    } else if (isNaN(c)) {
      break;
    } else {
      ans += c;
    }
  }
  if (isNaN(ans)) return 0;
  const n = Number(ans);
  if (n > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (n < (-2) ** 31) {
    return (-2) ** 31;
  } else {
    return n;
  }
};
