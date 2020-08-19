/**
 * @param {number} n
 * @return {number}
 * 根据数学公式，k(k+1) /2 = n，可以得到其正数解为：k = sqrt(2n+1/4) - 1/2
 */
var arrangeCoins = function (n) {
  return Math.floor(Math.sqrt(2 * n + 0.25) - 0.5);
};
