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
function copyRandomList(head) {
  const visited = new Map()
  function getCloneNode(node) {
    if (node === null) return null
    if (visited.has(node)) {
      return visited.get(node)
    }
    visited.set(node, new Node(node.val, null, null))
    return visited.get(node)
  }
  if (head === null) return null
  let oldNode = head
  let newNode = new Node(head.val, null, null)
  visited.set(oldNode, newNode)
  while (oldNode !== null) {
    newNode.next = getCloneNode(oldNode.next)
    newNode.random = getCloneNode(oldNode.random)

    oldNode = oldNode.next
    newNode = newNode.next
  }
  return visited.get(head)
}
