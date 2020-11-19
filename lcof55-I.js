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
var maxDepth = function (root) {
  if (!root) return 0;
  let ans = 0;
  function dfs(node, n) {
    if (node.left === null && node.right === null) {
      ans = Math.max(ans, n);
    } else if (node.left === null) {
      dfs(node.right, n + 1);
    } else if (node.right === null) {
      dfs(node.left, n + 1);
    } else {
      dfs(node.right, n + 1);
      dfs(node.left, n + 1);
    }
  }
  dfs(root, 1);
  return ans;
};
