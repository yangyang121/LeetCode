/**
 * @param {string} s
 * @return {number}
 * 也可以使用哈希（object或map）替数组，但空间复杂复杂度会变高
 */
var firstUniqChar = function (s) {
  const arr = Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    arr[s[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < s.length; i++) {
    if (arr[s[i].charCodeAt() - "a".charCodeAt()] === 1) {
      console.log(i);
      return i;
    }
  }
  return -1;
};

firstUniqChar("leetcode");
firstUniqChar("loveleetcode");
