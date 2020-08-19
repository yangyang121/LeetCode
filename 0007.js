/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let ans = 0;
  while (x) {
    ans = ans * 10 + (x % 10);
    x = parseInt(x / 10);
  }
  if (ans < (-2) ** 31 || ans > 2 ** 31 - 1) return 0;
  return ans;
};

reverse(123);
reverse(-123);
reverse(120);
