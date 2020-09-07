/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * 后继节点：中序遍历序列的下一个节点，即比当前节点大的最小节点
 * @param {TreeNode} root
 * @return {number}
 */
function successor(root) {
  root = root.right;
  while (root.left !== null) root = root.left;
  return root.val;
}
/**
 * 前驱节点：中序遍历序列的上一个节点，即比当前节点小的最大节点
 * @param {TreeNode} root
 * @return {number}
 */
function predecessor(root) {
  root = root.left;
  while (root.right !== null) root = root.right;
  return root.val;
}
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  if (root === null) return null;
  if (key > root.val) {
    root.right = deleteNode(root.right, key);
  } else if (key < root.val) {
    root.left = deleteNode(root.left, key);
  } else {
    if (root.left === null && root.right === null) {
      root = null;
    } else if (root.right !== null) {
      root.val = successor(root);
      root.right = deleteNode(root.right, root.val);
    } else {
      root.val = predecessor(root);
      root.left = deleteNode(root.left, root.val);
    }
  }
  return root;
};
