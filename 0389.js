/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const cnts = Array.from({ length: 26 }).fill(0);
  let ans = "";
  for (let i = 0; i < t.length; i++) {
    if (i !== t.length - 1) {
      cnts[s[i].charCodeAt() - "a".charCodeAt()]++;
      cnts[t[i].charCodeAt() - "a".charCodeAt()]--;
    } else {
      cnts[t[i].charCodeAt() - "a".charCodeAt()]--;
    }
  }
  for (let i = 0; i < cnts.length; i++) {
    if (cnts[i] !== 0) ans = String.fromCharCode(i + 97);
  }
  console.log(ans);
  return ans;
};

findTheDifference("abcd", "abcde");
