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
 * 直接遍历复杂度高
 */
var countNodes = function (root) {
  if (root === null) return 0;
  const ans = [];
  const stack = [root];
  while (stack.length) {
    let cur = stack.pop();
    ans.push(cur.val);
    if (cur.left !== null) {
      stack.push(cur.left);
    }
    if (cur.right !== null) {
      stack.push(cur.right);
    }
  }
  return ans.length;
};
