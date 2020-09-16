/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function (citations) {
  citations.sort((a, b) => a - b);
  let i = 0;
  while (i < citations.length && citations[citations.length - i - 1] > i) {
    i++;
  }
  console.log(i);
  return i;
};

hIndex([3, 0, 6, 1, 5]);
