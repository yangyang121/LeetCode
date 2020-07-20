// 找出每一段的波谷以及之后的波峰
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let valley = prices[0];
  let peak = prices[0];
  let maxProfit = 0;
  let i = 0;
  while (i < prices.length - 1) {
    while (prices[i] >= prices[i + 1]) i++;
    valley = prices[i];
    while (prices[i] <= prices[i + 1]) i++;
    peak = prices[i];
    maxProfit += peak - valley;
  }
  return maxProfit;
};
