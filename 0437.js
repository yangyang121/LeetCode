/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const map = new Map();
  const helper = (node, pathSum) => {
    let res = 0;
    if (node === null) return 0;
    pathSum += node.val;
    res += map.get(pathSum - sum) || 0;
    map.set(pathSum, (map.get(pathSum) || 0) + 1);
    res = helper(node.left, pathSum) + helper(node.right, pathSum) + res;
    map.set(pathSum, map.get(pathSum) - 1);
    return res;
  };
  map.set(0, 1);
  return helper(root, 0);
};
