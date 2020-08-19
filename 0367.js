/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let x = num / 2;
  while (x * x > num) {
    x = Math.floor((x + num / x) / 2);
  }
  return x * x === num;
};

isPerfectSquare(9);
isPerfectSquare(19);
isPerfectSquare(81);
