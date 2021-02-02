/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (root === null) return 0
  let ans = Number.MAX_SAFE_INTEGER
  const calculate = (node, num) => {
    if (node.left === null && node.right === null) {
      ans = Math.min(ans, num)
    } else if (node.left === null) {
      calculate(node.right, num + 1)
    } else if (node.right === null) {
      calculate(node.left, num + 1)
    } else {
      calculate(node.left, num + 1)
      calculate(node.right, num + 1)
    }
  }
  calculate(root, 1)
  return ans
}
