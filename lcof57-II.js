/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function (target) {
  let i = 1;
  let j = 1;
  let sum = 0;
  const ans = [];
  while (i <= ((target / 2) | 0)) {
    if (sum > target) {
      sum -= i;
      i++;
    } else if (sum < target) {
      sum += j;
      j++;
    } else {
      const arr = [];
      for (let k = i; k < j; k++) {
        arr.push(k);
      }
      ans.push(arr);
      sum -= i;
      i++;
    }
  }
  return ans;
};
