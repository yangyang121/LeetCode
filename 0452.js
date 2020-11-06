/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function (points) {
  if (points.length < 2) return points.length;
  points.sort((a, b) => a[1] - b[1]);
  let end = points[0][1];
  let count = 1;
  for (let i = 1; i < points.length; i++) {
    const p = points[i];
    if (p[0] > end) {
      count++;
      end = p[1];
    }
  }
  console.log(count);
  return count;
};

findMinArrowShots([
  [10, 16],
  [2, 8],
  [1, 6],
  [7, 12],
]);
findMinArrowShots([
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
]);
findMinArrowShots([
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
]);
