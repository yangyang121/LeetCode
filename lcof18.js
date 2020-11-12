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
 */
var deleteNode = function (head, val) {
  if (head === null) return null;
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let curr = head;
  let prev = dummyHead;
  while (curr.val !== val) {
    curr = curr.next;
    prev = prev.next;
  }
  prev.next = curr.next;
  return dummyHead.next;
};
