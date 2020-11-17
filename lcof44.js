/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function (n) {
  if (n < 9) return n;
  let start = 1;
  let digit = 1;
  let count = 9;
  while (n > count) {
    n -= count;
    start *= 10;
    digit++;
    count = digit * start * 9;
  }
  const num = start + parseInt((n - 1) / digit);
  console.log(num.toString()[(n - 1) % digit])
  return num.toString()[(n - 1) % digit];
};

countDigitOne(13);
