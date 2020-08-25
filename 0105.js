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
  const myBuildTree = (
    preorder,
    inorder,
    preorder_left,
    preorder_right,
    inorder_left,
    inorder_right
  ) => {
    if (preorder_left > preorder_right) return null;

    // 前序遍历中的第一个节点就是根节点
    const preorder_root = preorder_left;
    // 在中序遍历中定位根节点
    const inorder_root = indexMap[preorder[preorder_root]];
    // 先把根节点建立出来
    const root = new TreeNode(preorder[preorder_root]);
    // 得到左子树中的节点数目
    const size_left_subtree = inorder_root - inorder_left;
    // 递归地构造左子树，并连接到根节点
    // 先序遍历中「从 左边界+1 开始的 size_left_subtree」个元素就对应了中序遍历中「从 左边界 开始到 根节点定位-1」的元素
    root.left = myBuildTree(
      preorder,
      inorder,
      preorder_left + 1,
      preorder_left + size_left_subtree,
      inorder_left,
      inorder_root - 1
    );
    // 递归地构造右子树，并连接到根节点
    // 先序遍历中「从 左边界+1+左子树节点数目 开始到 右边界」的元素就对应了中序遍历中「从 根节点定位+1 到 右边界」的元素
    root.right = myBuildTree(
      preorder,
      inorder,
      preorder_left + size_left_subtree + 1,
      preorder_right,
      inorder_root + 1,
      inorder_right
    );

    return root;
  };

  const n = preorder.length;
  for (let i = 0; i < n; i++) {
    indexMap[inorder[i]] = i;
  }
  return myBuildTree(preorder, inorder, 0, n - 1, 0, n - 1);
};
