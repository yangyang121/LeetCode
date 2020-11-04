/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const max = amount + 1;
  const dp = new Array(amount + 1).fill(max);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (let j = 0; j < coins.length; j++) {
      if (coins[j] <= i) {
        dp[i] = Math.min(dp[i], dp[i - coins[j]] + 1);
      }
    }
  }
  console.log(dp)
  return dp[amount] > amount ? -1 : dp[amount];
};

coinChange([1, 2, 5], 11);
coinChange([2], 3);
coinChange([1], 0);
coinChange([1], 1);
