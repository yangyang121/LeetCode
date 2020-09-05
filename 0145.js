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
var postorderTraversal = function (root) {
  const ans = [];
  const stack = [root];
  while (stack.length) {
    let cur = stack.pop();
    ans.unshift(cur.val);
    if (cur.left !== null) {
      stack.push(cur.left);
    }
    if (cur.right !== null) {
      stack.push(cur.right);
    }
  }
  return ans;
};
