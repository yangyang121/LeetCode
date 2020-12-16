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

function pathSum(root, sum) {
  if (root === null) return []
  const ans = []
  function dfs(node, path, cnt) {
    path.push(node.val)
    if (node.left === null && node.right === null) {
      if (cnt - node.val === 0) ans.push(path.concat(node.val))
    } else if (node.left === null) {
      dfs(node.right, path.concat(node.val), cnt - node.val)
    } else if (node.right === null) {
      dfs(node.left, path.concat(node.val), cnt - node.val)
    } else {
      dfs(node.right, path.concat(node.val), cnt - node.val)
      dfs(node.left, path.concat(node.val), cnt - node.val)
    }
  }
  dfs(root, [], sum)
  return ans
}
