/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let left = 0;
  let right = s.length - 1;
  const ans = [];
  while (s[left] === " ") left++;
  while (s[right] === " ") right--;
  let word = "";
  while (left <= right) {
    const c = s[right--];
    if (word && c === " ") {
      ans.push(word);
      word = "";
    } else if (c !== " ") {
      word = c + word;
    }
  }
  ans.push(word);
  return ans.join(" ");
};
