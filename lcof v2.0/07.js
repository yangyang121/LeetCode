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

function buildTree(preorder, inorder) {
  const map = {}
  let idx = 0
  const build = (left, right) => {
    if (left > right) return null
    const inorderIndex = map[preorder[idx]]
    const root = new TreeNode(preorder[idx])
    idx++
    root.left = build(left, inorderIndex - 1)
    root.right = build(inorderIndex + 1, right)
    return root
  }
  let n = preorder.length
  for (let i = 0; i < inorder.length; i++) map[inorder[i]] = i
  return build(0, n - 1)
}
