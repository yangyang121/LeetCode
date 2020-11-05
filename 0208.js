/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.T = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let tree = this.T;
  for (let c of word) {
    if (!tree[c]) tree[c] = {};
    tree = tree[c];
  }
  tree.word = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let tree = this.T;
  for (let c of word) {
    if (!tree[c]) return false;
    tree = tree[c];
  }
  return !!tree.word;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let tree = this.T;
  for (let c of prefix) {
    if (!tree[c]) return false;
    tree = tree[c];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
