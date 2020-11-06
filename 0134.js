/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let start = 0;
  let total = 0;
  let curr = 0;
  for (let i = 0; i < gas.length; i++) {
    total += gas[i] - cost[i];
    curr += gas[i] - cost[i];
    if (curr < 0) {
      start = i + 1;
      curr = 0;
    }
  }
  return total < 0 ? -1 : start;
};

canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]);
