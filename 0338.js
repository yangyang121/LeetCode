/**
 * @param {number} num
 * @return {number[]}
 * 1、奇数：二进制表示中，奇数一定比前面那个偶数多一个 1；
 * 2、偶数：二进制表示中，偶数中 1 的个数一定和除以 2 之后的那个数一样多。
 */
var countBits = function (num) {
  const dp = new Array(num + 1).fill(0);
  for (let i = 1; i <= num; i++) {
    if (i % 2 === 1) {
      dp[i] = dp[i - 1] + 1;
    } else {
      dp[i] = dp[i / 2];
    }
  }
  console.log(dp);
  return dp;
};

countBits(2);
countBits(5);
