/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * 可以在构造迭代器时使用中序遍历，但复杂度为O(n)
 */
var BSTIterator = function (root) {
  this.stack = [];
  this._leftmostInorder(root);
};

BSTIterator.prototype._leftmostInorder = function (root) {
  while (root !== null) {
    this.stack.push(root);
    root = root.left;
  }
};

/**
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
  const cur = this.stack.pop();
  if (cur.right !== null) {
    this._leftmostInorder(cur.right);
  }
  return cur.val;
};

/**
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */
