/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  if (root === null) return [];
  const ans = [];
  const loop = (node, path) => {
    if (node !== null) {
      path += String(node.val);
      if (node.left === null && node.right === null) {
        ans.push(path);
      } else {
        path += "->";
        loop(node.left, path);
        loop(node.right, path);
      }
    }
  };

  loop(root, "");
  return ans;
};
