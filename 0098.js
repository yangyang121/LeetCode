/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const helper = (node, low, high) => {
    if (node === null) return true;
    if (node.val <= low || node.val >= high) return false;
    return (
      helper(root.left, low, node.val) && helper(node.right, node.val, hight)
    );
  };

  return helper(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER);
};

// 也可以使用中序遍历：由于中序遍历二叉搜索树会得到一个升序数组，所以可以每次拿当前的val去和前一个val对比
var isValidBSTInOrder = function (root) {
  let pre = Number.MIN_SAFE_INTEGER;
  const helper = (node) => {
    if (node === null) return true;
    if (!helper(node.left)) return false;
    if (node.val <= pre) return false;
    pre = node.val;
    return helper(node.right);
  };

  return helper(root);
};
