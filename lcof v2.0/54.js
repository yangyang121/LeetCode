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

function kthLargest(root, k) {
  let ans = 0
  function helper(node) {
    if (node === null) return
    helper(node.right)
    if (k === 0) return
    if (--k === 0) ans = node.val
    helper(node.left)
  }
  helper(root)
  return ans
}
