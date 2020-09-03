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
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  const ans = [];
  const queue = [root];
  let depth = 0;
  while (queue.length) {
    const subList = [];
    const levelNum = queue.length;
    for (let i = 0; i < levelNum; i++) {
      const curNode = queue.shift();
      if (curNode !== null) {
        if (depth % 2 === 0) {
          subList.push(curNode.val);
        } else {
          subList.unshift(curNode.val);
        }
        queue.push(curNode.left);
        queue.push(curNode.right);
      }
    }
    depth++;
    if (subList.length) {
      ans.push(subList);
    }
  }
  return ans;
};
