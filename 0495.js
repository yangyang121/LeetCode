/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 * 最后一个一定执行完成所以在最后加 duration
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  let cnt = 0;
  for (let index = 0; index < timeSeries.length - 1; index++) {
    cnt += Math.min(timeSeries[index + 1] - timeSeries[index], duration);
  }
  return cnt + duration;
};

findPoisonedDuration([1, 2, 3, 4], 3);
