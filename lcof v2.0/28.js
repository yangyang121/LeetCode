/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root) {
  if (root === null) return true
  function helper(left, right) {
    if (left === null && right === null) return true
    if (left === null || right === null) return false
    return (
      left.val === right.val &&
      helper(left.left, right.right) &&
      helper(left.right, right.left)
    )
  }
  return helper(root.left, root.right)
}
