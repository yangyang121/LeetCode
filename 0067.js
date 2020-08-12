/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let aLen = a.length - 1;
  let bLen = b.length - 1;
  let result = "";
  let count = 0;
  let sum = 0;
  while (aLen >= 0 || bLen >= 0) {
    sum = Number(a[aLen] || "") + Number(b[bLen] || "") + count;
    result = (sum % 2) + result;
    count = Math.floor(sum / 2);
    aLen--;
    bLen--;
  }
  if (count === 1) result = 1 + result;
  return result;
};

addBinary("11", "1");
addBinary("1010", "1011");
addBinary("11", "11");
