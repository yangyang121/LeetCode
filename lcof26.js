/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
var isSubStructure = function (A, B) {
  function check(a, b) {
    if (b === null) return true;
    if (a === null || a.val !== b.val) return false;
    return check(a.left, b.left) && check(a.right, b.right);
  }
  return (
    A !== null &&
    B !== null &&
    (check(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
  );
};
