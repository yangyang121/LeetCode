/**
 * @param {number} n
 * @return {number}
 * 1、当 n≤3 时，按照规则应不拆分，但由于题目要求必须拆分，因此必须拆出一个因子 1 ，即返回 n−1
 * 2、当 n>3 时，求 n 除以 3 的 整数部分 a 和 余数部分 b （即 n=3a+b ），并分为以下三种情况：、
 *   当 b=0 时，直接返回 3**a
 *   当 b=1 时，要将一个 1+3 转换为 2+2，因此返回 (3**(a-1)) * 4
 *   当 b=2 时，返回 (3**a) * 2
 */
var integerBreak = function (n) {
  if (n <= 3) return n - 1;
  const a = Math.floor(n / 3);
  const b = n % 3;
  if (b === 0) return 3 ** a;
  if (b === 1) return 3 ** (a - 1) * 4;
  return 3 ** a * 2;
};

integerBreak(2);
integerBreak(10);
