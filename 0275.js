/**
 * @param {number[]} citations
 * @return {number}
 * n篇文章至少引用了n次
 */
var hIndex = function (citations) {
  const n = citations.length;
  let left = 1;
  let right = n - 1;
  while (left <= right) {
    const mid = ((left + right) / 2) | 0;
    if (citations[mid] === n - mid) {
      return citations[mid];
    } else if (citations[mid] < n - mid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  console.log(n - left);
  return n - left;
};
hIndex([0, 1, 3, 5, 6]);
// 2篇文章至少引用了2次
hIndex([0, 1, 3, 5]);
hIndex([0, 1, 2, 2, 3, 3, 3]);
