/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let ans = "";
  const len = s.length;
  let i = 0;
  while (i < len) {
    let start = i;
    while (i < len && s[i] !== " ") {
      i++;
    }
    for (let j = start; j < i; j++) {
      ans += s[start + i - 1 - j];
    }
    while (i < len && s[i] === " ") {
      i++;
      ans += " ";
    }
  }
  console.log(ans);
  return ans;
};

reverseWords("Let's take LeetCode contest");
