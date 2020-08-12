/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 * 也可以使用哈希（object或map）替数组，但空间复杂复杂度会变高
 */
var canConstruct = function (ransomNote, magazine) {
  const ransomArr = Array(26).fill(0);
  const magazineArr = Array(26).fill(0);
  for (let i = 0; i < ransomNote.length; i++) {
    ransomArr[ransomNote[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < magazine.length; i++) {
    magazineArr[magazine[i].charCodeAt() - "a".charCodeAt()]++;
  }
  for (let i = 0; i < magazineArr.length; i++) {
    if (ransomArr[i] > magazineArr[i]) {
      console.log(false);
      return false;
    }
  }
  console.log(true);
};

canConstruct("a", "b");
canConstruct("aa", "ab");
canConstruct("aa", "aab");
