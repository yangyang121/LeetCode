/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  let curr = root;
  while (curr !== null) {
    if (curr.left !== null) {
      let next = curr.left;
      let pre = next;
      while (pre.right !== null) {
        pre = pre.right;
      }
      pre.right = curr.right;
      curr.left = null;
      curr.right = next;
    }
    curr = curr.right;
  }
};
