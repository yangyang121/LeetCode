/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x === 0) return 0;
  if (x < 4) return 1;
  let num = x / 2;
  while (num * num > x) {
    num = Math.floor((num + x / num) / 2);
  }
  console.log(num);
  return num;
};

mySqrt(8);
mySqrt(4);
