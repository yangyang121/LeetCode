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

function reverseList(head) {
  if (head === null) return head
  let prev = null
  let cur = head
  let temp = null
  while (cur) {
    temp = cur.next
    cur.next = prev
    prev = cur
    cur = temp
  }
  return prev
}
