/**
 * @param {number[]} prices
 * @return {number}
 * 只有三种情况：
 * 1、第i天还持有股票，有两种可能：第i-1天就已经持有；第i天刚购入，此时第i-1天必不处于冷冻期；
 * 2、第i天不持有股票且处于冷冻期；
 * 3、第i天不持有股票且不处于冷冻期
 * 最后比较三个数值，但最后不可能还持有股票所以只需要比较后两个
 */
var maxProfit = function (prices) {
  if (prices.length === 0) return 0;
  let f0 = -prices[0];
  let f1 = 0;
  let f2 = 0;
  for (let i = 1; i < prices.length; i++) {
    const newf0 = Math.max(f0, f2 - prices[i]);
    const newf1 = f0 + prices[i];
    const newf2 = Math.max(f1, f2);
    f0 = newf0;
    f1 = newf1;
    f2 = newf2;
  }
  return Math.max(f1, f2);
};

maxProduct([1, 2, 3, 0, 2]);
