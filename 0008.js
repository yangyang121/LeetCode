/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  if (!str) return 0;
  let ans = "";
  let i = 0;
  while (i < str.length) {
    const item = str[i];
    if (item === " ") {
      if (ans) break;
    } else if (item === "-" || item === "+") {
      if (ans) {
        break;
      } else {
        ans += item;
      }
    } else if (isNaN(item)) {
      break;
    } else {
      ans += item;
    }
    i++;
  }
  const res = Number(ans);
  if (res > 2 ** 31 - 1) {
    return 2 ** 31 - 1;
  } else if (res < (-2) ** 31) {
    return (-2) ** 31;
  } else {
    return isNaN(res) ? 0 : res;
  }
};

myAtoi("42");
myAtoi("   -42");
myAtoi("4193 with words");
myAtoi("words and 987");
myAtoi("-91283472332");
