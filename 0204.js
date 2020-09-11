/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
  let cnt = 0;
  const isPrime = Array.from({ length: n }).fill(true);
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      for (let j = i + i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) cnt++;
  }
  return cnt;
};
