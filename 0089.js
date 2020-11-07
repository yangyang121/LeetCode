/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const res = [];
  res.push(0);
  for (let i = 0; i < n; i++) {
    for (let j = res.length - 1; j >= 0; j--) {
      res.push(res[j] | (1 << i));
    }
  }
  console.log(res);
  return res;
};

grayCode(2);
grayCode(0);
