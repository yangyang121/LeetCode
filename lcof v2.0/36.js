/**
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
function treeToDoublyList(root) {
  if (root === null) return null
  let pre = null
  let head = null
  function dfs(node) {
    if (node === null) return
    dfs(node.left)
    if (pre !== null) {
      pre.right = node
    } else {
      head = node
    }
    node.left = pre
    pre = node
    dfs(node.right)
  }
  dfs(root)
  head.left = pre
  pre.right = head
  return head
}
