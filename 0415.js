/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let aLen = num1.length - 1;
  let bLen = num2.length - 1;
  let result = "";
  let count = 0;
  let sum = 0;
  while (aLen >= 0 || bLen >= 0) {
    sum = Number(num1[aLen] || "") + Number(num2[bLen] || "") + count;
    result = (sum % 10) + result;
    count = Math.floor(sum / 10);
    aLen--;
    bLen--;
  }
  if (count === 1) result = 1 + result;
  return result;
};

addStrings("999", "1");
