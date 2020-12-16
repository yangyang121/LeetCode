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

function levelOrder(root) {
  if (root === null) return []
  const ans = []
  const queue = [root]
  while (queue.length) {
    const item = queue.shift()
    ans.push(item.val)
    if (item.left) queue.push(item.left)
    if (item.right) queue.push(item.right)
  }
  return ans
}
