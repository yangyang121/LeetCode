/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  function helper(s, t) {
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
      const c1 = s[i];
      const c2 = t[i];
      if (map.get(c1) !== undefined) {
        if (map.get(c1) !== c2) return false;
      } else {
        map.set(c1, c2);
      }
    }
    return true;
  }
  return helper(s, t) && helper(t, s);
};

isIsomorphic("ab", "aa");
