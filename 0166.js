/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function (numerator, denominator) {
  let num = numerator;
  let deno = denominator;
  const negative = num / deno < 0;
  num = Math.abs(num);
  deno = Math.abs(deno);
  let res = negative
    ? "-" + Math.floor(num / deno)
    : Math.floor(num / deno) + "";
  if (num % deno === 0) {
    return res;
  }
  num = (num % deno) * 10;
  let decimal = "";
  let index = 0;
  const mods = new Map();
  while (mods.get(num) === undefined && num !== 0) {
    mods.set(num, index++);
    decimal += Math.floor(num / deno);
    num = (num % deno) * 10;
  }
  if (num === 0) {
    return res + "." + decimal;
  }
  const i = mods.get(num);
  return res + "." + decimal.substring(0, i) + "(" + decimal.substring(i) + ")";
};

fractionToDecimal(1, 2);
fractionToDecimal(2, 1);
fractionToDecimal(2, 3);
