/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head) {
  if (head === null) return null;
  const stack = [head];
  const pseudoHead = new ListNode(0, null, head, null);
  let curr = pseudoHead;
  let prev = pseudoHead;
  while (stack.length) {
    curr = stack.pop();
    prev.next = curr;
    curr.prev = prev;
    if (curr.next) {
      stack.push(curr.next);
    }
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }
    prev = curr;
  }
  pseudoHead.next.prev = null;
  return pseudoHead.next;
};
