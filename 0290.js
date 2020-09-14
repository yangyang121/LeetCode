/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (words.length !== pattern.length) return false;
  const map = new Map();
  const visited = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.get(pattern[i]) !== undefined) {
      if (map.get(pattern[i]) !== words[i]) return false;
    } else {
      if (visited.get(pattern[i])) return false;
      map.set(pattern[i], words[i]);
    }
    visited.set(pattern[i], words[i]);
  }
  return true;
};
