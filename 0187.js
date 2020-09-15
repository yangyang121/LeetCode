/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  const seen = new Map();
  const ans = new Map();
  for (let i = 0; i <= s.length - 10; i++) {
    const temp = s.substring(i, i + 10);
    if (seen.get(temp)) {
      if (!ans.get(temp)) ans.set(temp, 1);
    }
    seen.set(temp, 1);
  }
  return Array.from(ans.keys());
};

findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT");
