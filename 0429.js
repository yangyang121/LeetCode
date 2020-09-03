/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
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
      if (curNode) {
        subList.push(curNode.val);
        for (let j = 0; j < curNode.children.length; j++) {
          queue.push(curNode.children[j]);
        }
      }
    }
    if (subList.length) {
      ans.push(subList);
    }
  }
  return ans;
};
