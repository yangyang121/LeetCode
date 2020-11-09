/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (!digits) return [];
  const map = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };
  const ans = [];
  function dfs(path, index) {
    if (index === digits.length) {
      ans.push(path.join(''));
      return;
    }
    for (let i = 0; i < map[digits[index]].length; i++) {
      path.push(map[digits[index]][i]);
      dfs(path, index + 1);
      path.pop();
    }
  }
  dfs([], 0);
  console.log(ans);
  return ans;
};

letterCombinations("23");
