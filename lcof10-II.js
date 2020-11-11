/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n === 0) return 1;
  if (n < 3) return n;
  let a = 1;
  let b = 2;
  let sum = 0;
  for (let i = 3; i <= n; i++) {
    sum = (a + b) % 1000000007;
    a = b;
    b = sum;
  }
  return sum;
};
