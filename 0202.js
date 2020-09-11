/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  function getNext(n) {
    let res = 0;
    while (n) {
      res += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    return res;
  }
  let slow = n;
  let fast = getNext(n);
  while (fast !== 1 && fast !== slow) {
    slow = getNext(slow);
    fast = getNext(getNext(fast));
  }
  return fast === 1;
};
