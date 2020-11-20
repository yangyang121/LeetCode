/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0;
  for (const n of prices) {
    if (n < min) {
      min = n;
    } else if (n - min > maxProfit) {
      maxProfit = n - min;
    }
  }
  return maxProfit;
};
