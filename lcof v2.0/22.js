/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function getKthFromEnd(head, k) {
  if (head === null) return head
  let prev = head
  let next = head
  while (k-- > 0) {
    next = next.next
  }
  if (next) {
    next = next.next
    prev = prev.next
  }
  return prev
}
