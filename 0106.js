/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function (inorder, postorder) {
  const indexMap = {};
  let post_idx = postorder.length - 1;
  const myBuildTree = (inorder_left, inorder_right) => {
    if (inorder_left > inorder_right) return null;
    const inorder_root = indexMap[postorder[post_idx]];
    const root = new TreeNode(postorder[post_idx]);
    post_idx--;

    root.right = myBuildTree(inorder_root + 1, inorder_right);
    root.left = myBuildTree(inorder_left, inorder_root - 1);

    return root;
  };

  const n = inorder.length;
  for (let i = 0; i < n; i++) indexMap[inorder[i]] = i;
  return myBuildTree(0, n - 1);
};
