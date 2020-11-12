/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {
  if (n < 1) return [];
  const ans = [];
  const len = 10 ** n;
  for (let i = 1; i < len; i++) {
    ans.push(i);
  }
  return ans;
};
