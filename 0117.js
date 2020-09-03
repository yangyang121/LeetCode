/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 * 此题BFS更好理解
 */
var connect = function (root) {
  if (root === null) return null;
  const queue = [root];
  while (queue.length) {
    const len = queue.length;
    let pre = new Node();
    for (let i = 0; i < len; i++) {
      let cur = queue.shift();
      if (i > 0) {
        pre.next = cur;
      }
      pre = cur;
      if (cur.left !== null) {
        queue.push(cur.left);
      }
      if (cur.right !== null) {
        queue.push(cur.right);
      }
    }
  }
  return root;
};
