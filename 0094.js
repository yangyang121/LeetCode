/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  // 递归法
  // const result = [];
  // helper(root, result);
  // 迭代法
  const result = [];
  const stack = [];
  let current = root;
  while (current !== null || stack.length !== 0) {
    while (current !== null) {
      stack.push(current);
      current = current.left;
    }
    current = stack.pop();
    result.push(current.val);
    current = current.right;
  }
  return result;
};

function helper(root, result) {
  if (root !== null) {
    if (root.left !== null) {
      helper(root.left, result);
    }
    result.push(root.val);
    if (root.right !== null) {
      helper(root.right, result);
    }
  }
}
