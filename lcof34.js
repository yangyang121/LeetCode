/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function (root, sum) {
  if (root === null) return [];
  const ans = [];
  function dfs(node, path, cnt) {
    if (node !== null) {
      path.push(node.val);
      if (node.left === null && node.right === null) {
        if (cnt === 0) ans.push(path.slice());
      } else if (node.left === null) {
        dfs(node.right, path, cnt - node.val);
      } else if (node.right === null) {
        dfs(node.left, path, cnt - node.val);
      } else {
        dfs(node.right, path, cnt - node.val);
        dfs(node.left, path, cnt - node.val);
      }
    }
  }
  dfs(root, [], sum);
  return ans;
};
