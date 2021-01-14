/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
  if (x === 0) return 0
  const num = n
  let ans = 1
  n < 0 && (n = -n)
  while (n > 0) {
    if (n % 2 === 1) ans *= x
    x *= x
    n = (n / 2) | 0
  }
  console.log(ans)
  return num < 0 ? 1 / ans : ans
}

myPow(3, 3)
myPow(3, 4)
myPow(2, 2147483648)
