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

function mirrorTree(root) {
  if (root === null) return null
  const tree = new TreeNode(root.val)
  const temp = node.left
  tree.left = mirrorTree(root.right)
  tree.right = mirrorTree(temp)
  return tree
}
