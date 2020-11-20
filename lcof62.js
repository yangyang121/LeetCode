/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function (n, m) {
  let ans = 0;
  for (let i = 2; i !== n + 1; i++) {
    ans = (m + ans) % i;
  }
  return ans;
};
