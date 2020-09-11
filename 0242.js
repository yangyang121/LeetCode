/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const nums = Array.from({ length: 26 }).fill(0);
  for (let i = 0; i < s.length; i++) {
    nums[s[i].charCodeAt() - "a".charCodeAt()]++;
    nums[t[i].charCodeAt() - "a".charCodeAt()]--;
  }
  for (let num of nums) {
    if (num !== 0) return false;
  }
  return true;
};
