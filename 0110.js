/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
  const height = (node) => {
    if (node === null) return 0;
    const leftHeight = height(node.left);
    const rightHeight = height(node.right);

    if (
      leftHeight === -1 ||
      rightHeight === -1 ||
      Math.abs(rightHeight - leftHeight) > 1
    ) {
      return -1;
    } else {
      return Math.max(rightHeight, leftHeight) + 1;
    }
  };

  return height(root) >= 0;
};
