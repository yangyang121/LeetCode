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
var sumNumbers = function (root) {
  if (root === null) return 0;
  let ans = 0;
  const helper = (node, num) => {
    if (node.left === null && node.right === null) {
      ans += num * 10 + node.val;
    } else if (node.left === null) {
      helper(node.right, num * 10 + node.val);
    } else if (node.right === null) {
      helper(node.left, num * 10 + node.val);
    } else {
      helper(node.left, num * 10 + node.val);
      helper(node.right, num * 10 + node.val);
    }
  };
  helper(root, 0);
  return ans;
};
