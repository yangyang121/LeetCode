/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function (a) {
  if (!a.length) return [];
  const ans = new Array(a.length);
  let temp = 1;
  ans[0] = 1;
  for (let i = 1; i < a.length; i++) {
    ans[i] = ans[i - 1] * a[i - 1];
  }
  for (let i = a.length - 2; i >= 0; i--) {
    temp *= a[i + 1];
    ans[i] *= temp;
  }
  return ans;
};

constructArr([1, 2, 3, 4, 5]);
