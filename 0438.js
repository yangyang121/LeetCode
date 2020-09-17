/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const ans = [];
  const needs = Array.from({ length: 26 }).fill(0);
  const windows = Array.from({ length: 26 }).fill(0);
  let total = p.length;
  let left = 0;
  let right = 0;
  for (let c of p) {
    needs[c.charCodeAt() - "a".charCodeAt()]++;
  }

  while (right < s.length) {
    const charIndex = s[right].charCodeAt() - "a".charCodeAt();
    if (needs[charIndex] > 0) {
      windows[charIndex]++;
      if (windows[charIndex] <= needs[charIndex]) {
        total--;
      }
    }
    while (total === 0) {
      if (right - left + 1 === p.length) ans.push(left);
      const charIndex1 = s[left].charCodeAt() - "a".charCodeAt();
      if (needs[charIndex1] > 0) {
        windows[charIndex1]--;
        if (windows[charIndex1] < needs[charIndex1]) {
          total++;
        }
      }
      left++;
    }
    right++;
  }
  console.log(ans);
  return ans;
};
findAnagrams("cbaebabacd", "abc");
findAnagrams("abab", "ab");
