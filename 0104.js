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
var maxDepth = function(root) {
  if(!root) return 0
  let result = 1

  const calculate = (t, num) => {
    if (t.left === null && t.right === null) {
      result = result > num ? result : num
    }else if (t.right === null) {
      calculate(t.left, num + 1)
    } else if (t.left === null) {
      calculate(t.right, num + 1)
    } else {
      calculate(t.left, num + 1)
      calculate(t.right, num + 1)
    }
  }
  calculate(root, 1)
  return result
}
