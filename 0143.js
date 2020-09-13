/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
  if (head === null || head.next === null) return head;
  // 先用快慢指针找到链表中点
  let slow = head;
  let fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 把中点之后的链表翻转
  let prev = null;
  let curr = slow.next;
  let third = null;
  while (curr !== null) {
    third = curr.next;
    curr.next = prev;
    prev = curr;
    curr = third;
  }
  slow.next = null;
  let before = head;
  let before_next = null;
  let prev_next = null;
  while (prev !== null) {
    before_next = before.next;
    prev_next = prev.next;
    before.next = prev;
    prev.next = before_next;
    before = before_next;
    prev = prev_next;
  }
};
