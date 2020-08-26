/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 * 与108类似，但108给的是数组，可以不断地取中间值，而链表只能先取到最下面的左值再逐步取上来
 */
var sortedListToBST = function (head) {
  if (head === null) return null;
  let len = 0;
  let h = head;
  while (head) {
    len++;
    head = head.next;
  }
  const buildBST = (left, right) => {
    if (left > right) return null;
    const mid = (left + right) >>> 1;
    const left = buildBST(left, mid - 1);
    const root = new TreeNode(h.val);
    h = h.next;
    root.left = left;
    root.right = buildBST(mid + 1, right);
    return root;
  };

  return buildBST(0, len - 1);
};
