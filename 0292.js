/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  return n % 4 !== 0;
};

canWinNim(4);
canWinNim(1);
canWinNim(2);
