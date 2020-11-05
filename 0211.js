/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
  this.T = {};
};

/**
 * Adds a word into the data structure.
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let tree = this.T;
  for (let c of word) {
    if (!tree[c]) tree[c] = {};
    tree = tree[c];
  }
  tree.word = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const f = (word, t) => {
    for (let i = 0; i < word.length; i++) {
      let c = word[i];
      if (c === ".") {
        for (let j in t) {
          if (f(s.substring(i + 1), t[j])) return true;
        }
      }
      if (!t[c]) return false;
      t = t[c];
    }
    return !!t.word;
  };
  return f(word, this.T);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
