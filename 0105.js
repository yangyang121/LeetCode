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
  let pre_idx = 0;
  const myBuildTree = (inorder_left, inorder_right) => {
    if (inorder_left > inorder_right) return null;
    const inorder_root = indexMap[preorder[pre_idx]];
    const root = new TreeNode(preorder[pre_idx]);
    pre_idx++;

    root.left = myBuildTree(inorder_left, inorder_root - 1);
    root.right = myBuildTree(inorder_root + 1, inorder_right);

    return root;
  };
  const n = inorder.length;
  for (let i = 0; i < n; i++) indexMap[inorder[i]] = i;
  return myBuildTree(0, n - 1);
};
