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

function maxDepth(root) {
  if (root === null) return 0
  let ans = 0
  function helper(node, depth) {
    if (node.left === null && node.right === null) {
      ans = Math.max(ans, depth)
    } else if (node.left === null) {
      helper(node.right, depth + 1)
    } else if (node.right === null) {
      helper(node.left, depth + 1)
    } else {
      helper(node.right, depth + 1)
      helper(node.left, depth + 1)
    }
  }
  helper(root, 1)
  return ans
}
