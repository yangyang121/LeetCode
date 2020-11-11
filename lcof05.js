/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function (s) {
  let i = 0;
  let ans = "";
  while (i < s.length) {
    if (s[i] === " ") {
      ans += "%20";
    } else {
      ans += s[i];
    }
    i++;
  }
  return ans;
};

replaceSpace("We are happy.");
