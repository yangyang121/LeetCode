/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return '0';
  const len1 = num1.length;
  const len2 = num2.length;
  // 长度为 len1 + len2 或者 len1 + len2 - 1
  const res = Array(len1 + len2).fill(0);
  for (let i = len1 - 1; i >= 0; i--) {
    const n = +num1[i];
    for (let j = len2 - 1; j >= 0; j--) {
      const m = +num2[j];
      const multi = n * m;
      const sum = multi + res[i + j + 1];

      res[i + j + 1] = sum % 10;
      res[i + j] += (sum / 10) | 0;
    }
  }
  const ans = res.join("");
  return ans[0] === "0" ? ans.substring(1) : ans;
};

multiply("2", "3");
multiply("123", "456");
