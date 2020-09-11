/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 * 利用哨兵节点
 */
var removeElements = function (head, val) {
  const sentinel = new ListNode(0);
  sentinel.next = head;
  let prev = sentinel;
  let curr = head;
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return sentinel.next;
};
