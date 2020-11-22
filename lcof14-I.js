/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
  if (n <= 3) return n - 1;
  const a = Math.floor(n / 3);
  const b = n % 3;
  if (b === 0) return 3 ** a;
  if (b === 1) return 3 ** (a - 1) * 4;
  return 3 ** a * 2;
};