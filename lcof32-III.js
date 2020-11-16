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
  let flag = true;
  while (queue.length) {
    const levelNum = queue.length;
    const subList = [];
    for (let i = 0; i < levelNum; i++) {
      const curNode = queue.shift();
      flag ? subList.push(curNode.val) : subList.unshift(curNode.val);
      if (curNode.left) queue.push(curNode.left);
      if (curNode.right) queue.push(curNode.right);
    }
    ans.push(subList);
    flag = !flag;
  }
  return ans;
};
