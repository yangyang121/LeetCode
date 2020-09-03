/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (root === null) return [];
  const ans = [];
  const queue = [root];
  while (queue.length) {
    const subList = [];
    const levelNum = queue.length;
    for (let i = 0; i < levelNum; i++) {
      const curNode = queue.shift();
      if (curNode !== null) {
        subList.push(curNode.val);
        queue.push(curNode.left);
        queue.push(curNode.right);
      }
    }
    if (subList.length) {
      ans.push(subList);
    }
  }
  return ans;
};
