/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n === 1) return true;
  if (n < 3) return false;
  if (n % 3 !== 0) return false;
  while (n > 0) {
    n = n / 3;
    if (!Number.isInteger(n)) return false;
  }
  return true;
};
