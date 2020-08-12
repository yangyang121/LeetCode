/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  const map = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    A: 1,
    E: 1,
    I: 1,
    O: 1,
    U: 1,
  };
  const ans = s.split("");
  let i = 0;
  let j = ans.length - 1;
  while (i < j) {
    if (!map[ans[i]]) {
      i++;
    } else if (!map[ans[j]]) {
      j--;
    } else {
      [ans[i], ans[j]] = [ans[j], ans[i]];
      i++;
      j--;
    }
  }
  console.log(ans.join(""));
  return ans.join("");
};

reverseVowels("hello");
reverseVowels("leetcode");
