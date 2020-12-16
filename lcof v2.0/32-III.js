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
  let flag = true
  while (queue.length) {
    const sub = []
    let num = queue.length
    while (num-- > 0) {
      const item = queue.shift()
      if (flag) {
        sub.push(item.val)
      } else {
        sub.unshift(item.val)
      }
      if (item.left) queue.push(item.left)
      if (item.right) queue.push(item.right)
    }
    if (sub.length) ans.push(sub)
    flag = !flag
  }
  return ans
}
