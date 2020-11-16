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
var levelOrder = function (root) {
  if (root === null) return [];
  const ans = [];
  const queue = [root];
  while (queue.length) {
    const item = queue.shift();
    ans.push(item.val);
    if (item.left) queue.push(item.left);
    if (item.right) queue.push(item.right);
  }
  return ans;
};
