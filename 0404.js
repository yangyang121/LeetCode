/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  let ans = 0;
  const helper = (node, isLeft) => {
    if (node.left !== null && node.right !== null) {
      helper(node.left, true);
      helper(node.right, false);
    } else if (node.left !== null) {
      helper(node.left, true);
    } else if (node.right !== null) {
      helper(node.right, false);
    } else {
      if (isLeft) ans += node.val;
    }
  };
  helper(root, false);
  return ans;
};
