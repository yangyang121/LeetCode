/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  const visited = new Map();
  function getClonedNode(node) {
    if (node !== null) {
      if (visited.get(node) !== undefined) {
        return visited.get(node);
      } else {
        visited.set(node, new ListNode(node.val, null, null));
        return visited.get(node);
      }
    } else {
      return null;
    }
  }
  if (head === null) return null;
  let newNode = new ListNode(head.val, null, null);
  let oldNode = head;
  visited.set(oldNode, newNode);
  while (oldNode !== null) {
    newNode.random = getClonedNode(oldNode.random);
    newNode.next = getClonedNode(oldNode.next);

    oldNode = oldNode.next;
    newNode = newNode.next;
  }
  return visited.get(head);
};
