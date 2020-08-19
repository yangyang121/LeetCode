/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  if (n < 1) return false;
  if (n === 1) return true;
  if (n % 2 !== 0) return false;
  while (n > 1) {
    n /= 2;
    if (!Number.isInteger(n)) return false;
  }
  return true;
};
