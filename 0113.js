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
  const result = [];
  const helper = (node, res, cnt) => {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        if (cnt + node.val === sum) {
          result.push(res.push(node.val));
        }
      } else if (node.left === null) {
        helper(node.right, res.concat(node.val), cnt + node.val);
      } else if (node.right === null) {
        helper(node.left, res.concat(node.val), cnt + node.val);
      } else {
        helper(node.left, res.concat(node.val), cnt + node.val);
        helper(node.right, res.concat(node.val), cnt + node.val);
      }
    }
  };
  helper(root, [], 0);
  return result;
};
