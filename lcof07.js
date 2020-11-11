/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function (preorder, inorder) {
  const indexMap = {};
  let idx = 0;
  function myBuildTree(left, right) {
    if (left > right) return null;
    const inorderIndex = indexMap[preorder[idx]];
    const root = new TreeNode(preorder[idx]);

    idx++;

    root.left = myBuildTree(left, inorderIndex - 1);
    root.right = myBuildTree(inorderIndex + 1, right);
    return root;
  }
  const n = preorder.length;
  for (let i = 0; i < inorder.length; i++) indexMap[inorder[i]] = i;
  return myBuildTree(0, n - 1);
};
