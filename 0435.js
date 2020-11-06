/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length < 2) return 0;
  intervals.sort((a, b) => a[1] - b[1]);
  let end = intervals[0][1];
  let count = 1;
  for (let i = 1; i < intervals.length; i++) {
    const interval = intervals[i];
    if (interval[0] >= end) {
      count++;
      end = interval[1];
    }
  }
  console.log(count);
  return intervals.length - count;
};

eraseOverlapIntervals([
  [1, 100],
  [11, 22],
  [1, 11],
  [2, 12],
]);
