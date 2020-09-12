/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  if (head === null || head.next === null) return head;
  const before_head = new ListNode(0);
  const after_head = new ListNode(0);
  let before = before_head;
  let after = after_head;
  while (head !== null) {
    if (head.val < x) {
      before.next = new ListNode(head.val);
      before = before.next;
    } else {
      after.next = new ListNode(head.val);
      after = after.next;
    }
    head = head.next;
  }
  before.next = after_head.next;
  return before_head.next;
};
