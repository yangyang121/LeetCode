/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
  const map = new Map();
  let res = 0;
  for (let a of A) {
    for (let b of B) {
      const sum = a + b;
      if (map.get(sum)) {
        map.set(sum, map.get(sum) + 1);
      } else {
        map.set(sum, 1);
      }
    }
  }

  for (let c of C) {
    for (let d of D) {
      const sum = -(c + d);
      if (map.get(sum)) res += map.get(sum);
    }
  }

  return res;
};
