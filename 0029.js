/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function (dividend, divisor) {
  if (dividend === 0) return 0;
  const a = Math.abs(dividend);
  const b = Math.abs(divisor);
  let left = 0;
  let right = a;
  while (left < right) {
    const mid = (((left + right) / 2) | 0) + 1;
    if (mid * b > a) {
      right = mid - 1;
    } else if (mid * b < a) {
      left = mid;
    } else {
      if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        if (mid > 2 ** 31 - 1) return 2 ** 31 - 1;
        return mid;
      }
      if (mid > 2 ** 31) return (-2) ** 31;
      return mid * -1;
    }
  }
  if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
    if (right > 2 ** 31 - 1) return 2 ** 31 - 1;
    return right;
  }
  if (right > 2 ** 31) return (-2) ** 31;
  return right * -1;
};
