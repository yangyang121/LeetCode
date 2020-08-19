/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function (n) {
  const WORDS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (n <= 26) return WORDS[n - 1];
  let ans = "";
  while (n) {
    ans = WORDS[(n - 1) % 26] + ans;
    n = Math.floor((n - 1) / 26);
  }
  console.log(ans);
};

convertToTitle(701);
convertToTitle(27);
