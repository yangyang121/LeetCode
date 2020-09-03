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
 */
var connect = function (root) {
  let cur = root;
  while (cur !== null) {
    let dummy = new Node();
    let tail = dummy;

    while (cur !== null) {
      if (cur.left !== null) {
        tail.next = cur.left;
        tail = tail.next;
      }
      if (cur.right !== null) {
        tail.next = cur.right;
        tail = tail.next;
      }
      cur = cur.next;
    }

    cur = dummy.next;
  }
  return root;
};
