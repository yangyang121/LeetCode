/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
  if (head === null || head.next === null) return head;
  let prev = null;
  let curr = head;
  while (m > 1) {
    prev = curr;
    curr = curr.next;
    m--;
    n--;
  }
  let con = prev;
  let tail = curr;
  let third = null;
  while (n > 0) {
    third = curr.next;
    curr.next = prev;
    prev = curr;
    curr = third;
    n--;
  }
  if (con !== null) {
    con.next = prev;
  } else {
    head = prev;
  }
  tail.next = curr;
  return head;
};
