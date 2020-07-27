/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {
  if (n === 0) return [];
  return helper(1, n);
};

function helper(start, end) {
  const allTrees = [];
  if (start > end) return [null];

  for (let i = start; i <= end; i++) {
    const leftNodes = helper(start, i - 1);
    const rightNodes = helper(i + 1, end);

    for (const left of leftNodes) {
      for (const right of rightNodes) {
        const node = new TreeNode(i);
        node.left = left;
        node.right = right;
        allTrees.push(node);
      }
    }
  }
  return allTrees;
}
