/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 * 由于只能从开头和末尾拿 k 张卡牌，所以最后剩下的必然是连续的 n-k 张卡牌。
 * 我们可以通过求出剩余卡牌点数之和的最小值，来求出拿走卡牌点数之和的最大值。
 */
var maxScore = function (cardPoints, k) {
  const size = cardPoints.length - k
  const totalSum = cardPoints.reduce((a, b) => a + b, 0)
  let sum = 0
  for (let i = 0; i < size; i++) {
    sum += cardPoints[i]
  }
  let ans = sum
  for (let i = size; i < cardPoints.length; i++) {
    sum += cardPoints[i] - cardPoints[i - size]
    ans = Math.min(ans, sum)
  }
  return totalSum - ans
}
