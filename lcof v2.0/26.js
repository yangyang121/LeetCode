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

function isSubStructure(A, B) {
  function check(a, b) {
    if (b === null) return true
    if (a === null || a.val !== b.val) return false
    return check(a.left, b.left) && check(a.right, b.right)
  }
  return (
    A !== null &&
    B !== null &&
    (check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
  )
}
