// 先排序，后合并
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  if (intervals.length === 0) return result;
  intervals.sort((a, b) => a[0] - b[0]);
  result.push(intervals[0]);
  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] > result[result.length - 1][1]) {
      result.push(intervals[i]);
    } else {
      if (intervals[i][1] > result[result.length - 1][1]) {
        result[result.length - 1][1] = intervals[i][1];
      }
    }
  }
  return result;
};

merge([
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
]);
merge([
  [1, 4],
  [4, 5],
]);
