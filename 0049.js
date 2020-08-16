/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  if (strs.length === 0) return [];
  const ans = {};
  const arr = Array(26);
  for (let s of strs) {
    arr.fill(0);
    for (let c of s) arr[c.charCodeAt() - "a".charCodeAt()]++;
    const key = arr.join("#");
    // 也可以对每个字符串进行排序后作为key，但复杂度较高
    if (!ans[key]) {
      ans[key].push(s);
    } else {
      ans[key] = [s];
    }
  }
  console.log(Object.values(ans))
  return Object.values(ans)
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
