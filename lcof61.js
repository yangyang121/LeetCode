/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isStraight = function (nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let max = 0;
  const set = new Set();
  for (const n of nums) {
    if (n < min) {
      min = n;
    }
    if (n > max) {
      max = n;
    }
    if (set.has(n)) return false;
    set.add(n);
  }
  return max - min < 5;
};
