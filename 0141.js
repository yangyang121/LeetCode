/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 * 快慢指针：快指针每次移动两次，慢指针每次移动一次，若是环形链表则必定会相遇
 */
var hasCycle = function (head) {
  if (head === null || head.next === null) return false;
  let slow = head;
  let fast = head.next;
  while (slow !== fast) {
    if (fast === null || fast.next === null) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};
