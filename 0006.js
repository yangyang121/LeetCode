/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;
  const result = [];
  for (let i = 0; i < numRows; i++) {
    result.push("");
  }
  let flag = -1;
  let i = 0;
  let j = 0;
  while (j < s.length) {
    result[i] += s[j++];
    if (i === 0 || i === numRows - 1) flag = -flag;
    i += flag;
  }
  console.log(result.join(""));
  return result.join("");
};

convert("LEETCODEISHIRING", 3);
convert("LEETCODEISHIRING", 4);
