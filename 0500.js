/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  const nums = [
    2,
    3,
    3,
    2,
    1,
    2,
    2,
    2,
    1,
    2,
    2,
    2,
    3,
    3,
    1,
    1,
    1,
    1,
    2,
    1,
    1,
    3,
    1,
    3,
    1,
    3,
  ];
  const ans = [];
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    let flag = true;
    let line = nums[word[0].toLowerCase().charCodeAt() - "a".charCodeAt()];
    for (let j = 1; j < word.length; j++) {
      if (nums[word[j].toLowerCase().charCodeAt() - "a".charCodeAt()] !== line) flag = false;
    }
    if (flag) ans.push(word);
  }
  return ans;
};

findWords(["Hello", "Alaska", "Dad", "Peace"]);
