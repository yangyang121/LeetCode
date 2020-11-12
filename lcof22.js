/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
  if (head === null) return null;
  let prev = head;
  let next = head;
  while (k > 0) {
    next = next.next;
    k--;
  }
  while (next) {
    next = next.next;
    prev = prev.next;
  }
  return prev;
};
