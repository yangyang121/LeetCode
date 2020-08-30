/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function (root) {
  if (root === null) return [];
  const ans = [];
  const helper = (node, depth) => {
    if (root === null) return;
    if (depth === ans.length) {
      ans.push(node.val);
    }
    helper(node.right, depth + 1);
    helper(node.left, depth + 1);
  };
  helper(root, 0);
  return ans;
};
