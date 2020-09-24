/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  const window = new Map();
  const need = new Map();
  let left = 0;
  let right = 0;
  let valid = 0;
  for (let c of s1) need.set(c, (need.get(c) || 0) + 1);
  while (right < s2.length) {
    const c = s2[right++];
    if (need.get(c) !== undefined) {
      window.set(c, (window.get(c) || 0) + 1);
      if (window.get(c) === need.get(c)) valid++;
    }
    while (right - left >= s1.length) {
      if (valid === need.size) return true;
      const d = s2[left++];
      if (need.get(d) !== undefined) {
        if (need.get(d) === window.get(d)) {
          valid--;
        }
        window.set(d, window.get(d) - 1);
      }
    }
  }
  return false;
};

checkInclusion("ab", "eidbaooo");
checkInclusion("ab", "eidboaoo");
