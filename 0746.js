/**
 * @param {number[]} cost
 * @return {number}
 * f(i) = cost[i] + min(f(i - 1) + f(i - 2))
 */
var minCostClimbingStairs = function (cost) {
  let f0 = 0;
  let f1 = 0;
  for (let i = 0; i < cost.length; i++) {
    const cur = cost[i] + Math.min(f1, f0);
    f0 = f1;
    f1 = cur;
  }
  return Math.min(f1, f0);
};
minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]);
