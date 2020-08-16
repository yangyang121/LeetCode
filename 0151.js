/**
 * @param {string} s
 * @return {string}
 * 也可以以空格切割成数组然后unshift
 */
var reverseWords = function (s) {
  if (!s) return [];
  let left = 0;
  let right = s.length - 1;
  while (left <= right && s[right] === " ") right--;
  while (left <= right && s[left] === " ") left++;
  const ans = [];
  let word = "";
  while (left <= right) {
    let c = s[right];
    if (word && c === " ") {
      ans.push(word);
      word = "";
    } else if (c !== " ") {
      word = c + word;
    }
    right--;
  }
  ans.push(word);
  console.log(ans);
  return ans.join(" ");
};

reverseWords("the sky is blue");
reverseWords("  hello world!  ");
reverseWords("a good   example");
