/**
 * @param {number[]} prices
 * @return {number}
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
